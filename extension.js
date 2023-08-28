// Import required modules
const vscode = require('vscode');
const axios = require('axios');

// Activate the extension
function activate(context) {
    // Fetch the API key from the configuration
    let apiKey = getApiKeyFromConfig();
    // If API key is not set, prompt the user to enter it
    if (!apiKey) {
        promptForApiKey();
    }

    // Register the command for generating code with GPT
    let disposable = vscode.commands.registerCommand('extension.generateWithGPT', async function () {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        // Get the current document and selection
        const document = editor.document;
        const selection = editor.selection;

        // Get the selected text (comment)
        const comment = document.getText(selection);

        // Get the context code around the selection
        const codeContext = getCodeContext(document, selection);

        // Show a message that GPT is triggered
        vscode.window.showInformationMessage('Generate with GPT triggered!');

        // Call OpenAI API to get the generated code
        callOpenAI(codeContext, comment, document.languageId, document).then(generatedCode => {
            // Insert the generated code into the editor
            insertGeneratedCode(editor, selection, generatedCode);
        });
    });

    // Subscribe the command to the extension context
    context.subscriptions.push(disposable);
}

// Fetch the API key from the configuration
function getApiKeyFromConfig() {
    const config = vscode.workspace.getConfiguration('gptCodeGenerator');
    return config.get('apiKey');
}

// Prompt the user to enter the API key
function promptForApiKey() {
    vscode.window.showInputBox({ prompt: 'Enter your OpenAI API Key' }).then(value => {
        if (value) {
            const config = vscode.workspace.getConfiguration('gptCodeGenerator');
            config.update('apiKey', value, true);
        }
    });
}

// Get the code context around the selection
function getCodeContext(document, selection) {
    const startLine = Math.max(0, selection.start.line - 10);
    const endLine = Math.min(document.lineCount, selection.end.line + 10);
    return document.getText(new vscode.Range(new vscode.Position(startLine, 0), new vscode.Position(endLine, 0)));
}

// Insert the generated code below the selection
function insertGeneratedCode(editor, selection, generatedCode) {
    const pos = new vscode.Position(selection.end.line + 1, 0);
    editor.edit((editBuilder) => {
        editBuilder.insert(pos, `${generatedCode}\n`);
    });
}

// Call OpenAI API to get the generated code
async function callOpenAI(context, comment, languageId, document) {
    const config = vscode.workspace.getConfiguration('gptCodeGenerator');
    let apiKey = config.get('apiKey');

    if (!apiKey) {
        vscode.window.showInputBox({ prompt: 'Enter your OpenAI API Key' }).then(value => {
            if (value) {
                config.update('apiKey', value, true);
                apiKey = value;  // Update apiKey for this session
            }
        });
    }

    const endpoint = "https://api.openai.com/v1/chat/completions";

    const framework = detectFramework(document);

    const messages = [
        { "role": "system", "content": `You are a ${languageId} code generator assistant working in a ${framework || 'general'} context. Return only the code snippet without explanations.` },
        { "role": "user", "content": `Context code: \n${context}` },
        { "role": "user", "content": comment }
    ];

    try {
        // @ts-ignore
        const response = await axios.post(endpoint, {
            model: "gpt-3.5-turbo",
            messages: messages,
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        vscode.window.showErrorMessage("Error calling OpenAI API.");
        console.error("Error details:", error);
        return "";
    }
}

// Detect the framework used in the code (e.g., React)
function detectFramework(document) {
    let framework;
    if (document.getText().includes('import React from')) {
        framework = 'React';
    }
    // Add more conditions for other frameworks
    return framework;
}

// Deactivate the extension
function deactivate() { /* To turn extension off */ }

// Export activate and deactivate functions
module.exports = {
    activate,
    deactivate
}






