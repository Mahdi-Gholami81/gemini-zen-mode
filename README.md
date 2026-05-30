# Gemini Zen Mode & Custom Font 🚀

A lightweight Tampermonkey UserScript designed to improve the readability and focus of your Google Gemini workspace.

## 📖 Overview
If you find the sidebar, header, and narrow message width of Google Gemini distracting, this script is for you. With a simple keyboard shortcut, you can transform your workspace into a clean, distraction-free environment while enjoying your own custom Persian fonts.

## 💡 Key Features
* **Focus Mode (Zen Mode):** Toggle the clutter away with `Alt + Z`.
* **Persian Typography:** Apply custom fonts like *IRANYekan* or *Vazirmatn* specifically to Persian/Arabic text.
* **Widescreen Layout:** Increases the width of chat bubbles and code blocks for better data visualization.
* **Smart Text Scaling:** Larger, more readable text for your messages while keeping your input box size standard.
* **Keyboard-Layout Aware:** Works perfectly regardless of your current keyboard language (Persian/English).

---

## ✨ Features
* **Zen Mode Toggle:** Instantly hide sidebars and headers for a pure, distraction-free reading and chatting environment.
* **Widescreen Support:** Expands code blocks and messages to utilize your full monitor width.
* **Custom Typography:** Forces your preferred local font (e.g., IRANYekan, Vazirmatn) only on Persian/Arabic texts without breaking Google's UI icons or English characters.
* **Smart Scaling:** Enlarges message text for better readability while keeping the input prompt area at its default size.
* **Keyboard Independent:** The shortcut works flawlessly even if your keyboard layout is not set to English.

## ⌨️ Shortcut
Simply press **`Alt + Z`** while on the Google Gemini page to toggle Zen Mode on and off.

## 📦 Installation
1. Install a UserScript manager extension like [Tampermonkey](https://www.tampermonkey.net/) for your browser.
2. Click on the link below to install the script directly:
   
   👉 **[Install Script](https://github.com/Mahdi-Gholami81/gemini-zen-mode/raw/refs/heads/main/gemini-zen-mode.user.js)**
   
   *(Tampermonkey will automatically detect the `.user.js` extension and prompt you to install).*

## ⚙️ Customization
You can easily change the default font and font size by editing the script after installation.
Open Tampermonkey dashboard, edit this script, and modify the following variables at the top of the code:
```javascript
const myFont = 'IRANYekanX-Medium'; // Change to your favorite locally installed font
const zenFontSize = '22px';         // Adjust to your preferred reading size