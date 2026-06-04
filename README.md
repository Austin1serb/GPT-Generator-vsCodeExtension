# GPT Code Generator for VS Code

GPT Code Generator is a Visual Studio Code extension that helps you generate code from comments, prompts, and selected text using the OpenAI API.

Write what you want, run **Generate with GPT**, and the extension inserts the generated code into your editor.

Built by [Serbyte Web Design & Development](https://www.serbyte.net/), a software and web development company that builds custom websites, AI integrations, automation systems, and developer tools.

## Features

* Generate code from comments or selected text
* Works across programming languages
* Supports context-aware code generation
* Inserts generated code directly into your editor
* Uses your own OpenAI API key
* Simple command palette and context menu workflow

## API Key Required

This extension requires your own OpenAI API key.

To add your API key:

1. Go to the OpenAI API keys page.
2. Create or copy your API key.
3. Open VS Code settings.
4. Search for `gptCodeGenerator.apiKey`.
5. Paste your API key into the setting.

You can also run the extension for the first time and enter your API key when prompted.

## Usage

### Option 1: Command Palette

1. Press `Cmd + Shift + P` on Mac or `Ctrl + Shift + P` on Windows/Linux.
2. Search for **Generate with GPT**.
3. Run the command.
4. Enter your prompt or use selected code as context.

### Option 2: Right-Click Menu

1. Highlight the code or text you want to use as context.
2. Right-click in the editor.
3. Select **Generate with GPT**.

### Option 3: Insert Code in a Specific Place

Write:

```txt
insert code here
```

Then run **Generate with GPT** and describe the code you want generated.

## Demo

### Basic Code Generation

<img src="https://github.com/Austin1serb/GPT-Generator-vsCodeExtension/assets/128577470/252d82fb-1888-41b2-a56b-6a5f67620c67" alt="GPT Code Generator demo" />

### Context-Aware Generation

<img src="https://github.com/Austin1serb/GPT-Generator-vsCodeExtension/assets/128577470/62281612-efa2-4859-8968-a6d9bf93d763" alt="Context-aware code generation demo" />

### Algorithm Help

<img src="https://github.com/Austin1serb/GPT-Generator-vsCodeExtension/assets/128577470/c3774482-e7a1-4469-9b23-e508a4449c03" alt="Algorithm code generation demo" />

## Extension Settings

This extension contributes the following settings:

```txt
gptCodeGenerator.enable
```

Enable or disable the extension.

```txt
gptCodeGenerator.apiKey
```

Set your OpenAI API key.

## Requirements

* Visual Studio Code 1.50 or higher
* Internet connection
* OpenAI API key

## Known Issues

In some cases, the right-click **Generate with GPT** option may not appear immediately.

If that happens:

1. Right-click in the editor.
2. Open the command palette.
3. Run **Generate with GPT** from there.

You can report issues in the GitHub repository.

## Release Notes

### 1.0.0

* Initial release of GPT-Code Generator

### 1.0.1

* Updated packages and dependencies

### 1.0.2

* Added support for context-aware code generation

## About Serbyte Web Design & Development

[Serbyte Web Design & Development](https://www.serbyte.net/) builds custom websites, web applications, AI integrations, automation workflows, SEO systems, and developer tools.
