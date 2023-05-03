# How to use chatgpt in vscode portable mode
[[vscode]] [[chatgpt]]

## Use vscode portable mode
- Download and unzip [vscode.zip](https://code.visualstudio.com/download).
- Create **data** folder under folder **VSCode-win32-x64-1.74.3** to enable portable mode.
    - For example, VSCode-win32-x64-1.74.3/data

## Install chatgpt extension
- Login https://chat.openai.com/chat with google account
- Execute **Code.exe** to open vscode
- Find **chatgpt** on the extension side bar. Click **install** button to install it.
- Click gear icon beside the uninstall button. Then choose **extension settings** menu item.

![chatgpt-extension-settings](../images/chatgpt-extension-settings.PNG)

- Extension settings
    -find **authentication type** choose **google authentication**
    -find **chrominum path** and fill in the browser path. If you install
    browser in different directory.
    - find **api key** , clicks **Get your api key from OpenAI** link, click
      **open** button to open the link.
    - click **create new secret key** button on the web page https://beta.openai.com/account/api-keys. copy key "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"
    - you won't be able to view it again through your OpenAI account. If you lose this secret key, you'll need to generate a new one.
    - find **method** seelect **gpt3 openai api key**

## Use Chatgpt extension
- open a folder choose **C:\Temp\py_test**
- create a test.py file.
- click **chatgpt** icon from side bar
- click **login** button in **chatgpt:conversation windows**
- ask question **give me py read file snippet** . click **insert** button at the top bar of the snippet. it will insert snippet to current file.
![insert-snippet-code-by-chatgpt](../images/insert-snippet-code-by-chatgpt.PNG)
- or select code from your file. right click menu to choose many chatgpt items
![chatgpt-functions-in-vscode](../images/chatgpt-functions-in-vscode.PNG)



