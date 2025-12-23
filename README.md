# GPT-Code Generator for VSCode

GPT Code Generator is a powerful Visual Studio Code extension that leverages the capabilities of OpenAI's GPT-3.5 Turbo to assist you in your software development process. The extension aims to make your coding experience smoother and more efficient by generating code snippets on the fly.

Built by [Serbyte Development (Seattle WA)](https://www.serbyte.net/) with a focus on AI automation and custom software systems: https://www.serbyte.net/services/management


❗Important: API Key Requirement

Before you can use the GPT-Code Generator extension, you must enter your OpenAI API key. Upon the first activation, the extension will prompt you to input your API key. You can also manually set this key in the VSCode settings under gptCodeGenerator.apiKey.

Free initial Set Up:
To set your own API key:

Go to OpenAI's website: https://platform.openai.com/ to create one.
Once logged in, click on your account in the top right corner.
Select "View API Keys" from the drop-down menu.
Click the button "Create a new key."
Copy the key and paste it into the extension's settings under gptCodeGenerator.apiKey.

***
Press cmd + shift + p (Command Palette) and search for "Generate with GPT", click that. if an api ket is not yet set, then you will be prompted to enter your API key.
***
***
Demo:
<img src="https://github.com/Austin1serb/GPT-Generator-vsCodeExtension/assets/128577470/252d82fb-1888-41b2-a56b-6a5f67620c67" alt="demo" />

Context Aware:
<img src="https://github.com/Austin1serb/GPT-Generator-vsCodeExtension/assets/128577470/62281612-efa2-4859-8968-a6d9bf93d763" alt="demo" />

Great with Algorithms!
<img src="https://github.com/Austin1serb/GPT-Generator-vsCodeExtension/assets/128577470/c3774482-e7a1-4469-9b23-e508a4449c03" alt="demo" />
***

Features

🔹 Supports all programming languages!

🔹 Easy-to-use interface with one-click generation

🔹 Code Generation:
Type a comment describing what you want, and our extension will generate the corresponding code snippet right below it. Supports multiple programming languages!

🔹 Context Awareness:
Understands the context in which you are coding. Whether you're working in React, Angular, or just a vanilla JavaScript file, the generated code will fit right in.

COMING SOON:

🔹 Refactoring Assistant:
Simplify your code automatically. Identifies patterns and code smells, offering refactoring options to improve code quality.

🔹 Error Handling:
Automatically generate error-handling code. Make your applications robust without the extra hassle.

🔹 Unit Tests:
Generate unit tests for your newly created code, ensuring it not only works as expected but continues to do so in the future.

🔹 Interactive Mode (Optional):
Have a more conversational experience with the code generator, refining your requirements through back-and-forths before the code gets generated.

Usage

🔹 Highlight the text where you want to generate code.
Right-click to open the context menu.
Click on "Generate with GPT" to generate the code snippet.

🔹 If you want to generate code in a specific area, just write "insert code here" and the code will be generated there.

VSCode version 1.50 or higher
An internet connection for API calls
Extension Settings

This extension contributes the following settings:

gptCodeGenerator.enable: Enable/disable this extension.
gptCodeGenerator.apiKey: Set your OpenAI API key.
Known Issues:

There may be a bug where after right clicking the "Generate With GPT" option may not appear in the menu, to overcome this right click and then select command palette, then select generate with GPT.

Please refer to the GitHub issues section for a list of known issues and to report new ones.

Release Notes

1.0.1
updated packages and dependencies
