// ==UserScript==
// @name         Gemini Zen Mode & Custom Font
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Applies a custom font and toggles a distraction-free focus mode with Alt+Z. Specifically optimized for Persian typography.
// @author       Mahdi Gholami
// @match        https://gemini.google.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // === Configuration ===
    const myFont = 'IRANYekanX-Medium'; // Your locally installed font name
    const zenFontSize = '22px';         // Font size during Zen Mode

    const css = `
        /* 1. Define custom font (Ready in the background) */
        @font-face {
            font-family: 'PersianOnly';
            src: local('${myFont}');
            /* Unicode range for Persian and Arabic characters */
            unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF, U+06F0-06F9, U+0660-0669;
        }

        /* 2. Apply font ONLY when Zen Mode is active */
        body.zen-mode *:not(.material-symbols-outlined):not(mat-icon):not([class*="icon"]):not(svg):not(i) {
            font-family: 'PersianOnly', 'Google Sans', 'Google Sans Text', Roboto, system-ui, sans-serif !important;
        }

        /* 3. Hide sidebars and header in Zen Mode */
        body.zen-mode header,
        body.zen-mode nav,
        body.zen-mode side-navigation-bar,
        body.zen-mode [aria-label="Navigation drawer"] {
            display: none !important;
        }

        /* 4. Expand the main layout to full screen */
        body.zen-mode main,
        body.zen-mode chat-app,
        body.zen-mode .page-content {
            width: 100vw !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        /* 5. Widen message containers, text areas, and code blocks */
        body.zen-mode .conversation-container,
        body.zen-mode message-content,
        body.zen-mode user-message,
        body.zen-mode model-response,
        body.zen-mode .message-content,
        body.zen-mode message-bubble {
            max-width: 95% !important;
        }

        /* 6. Enlarge text size (Input box remains default size) */
        body.zen-mode message-content,
        body.zen-mode message-content *,
        body.zen-mode model-response p,
        body.zen-mode user-message p,
        body.zen-mode model-response li,
        body.zen-mode user-message li {
            font-size: ${zenFontSize} !important;
            line-height: 1.8 !important;
        }
    `;

    GM_addStyle(css);

    // Keyboard shortcut logic (Independent of keyboard language layout)
    window.addEventListener('keydown', function(event) {
        // 'KeyZ' targets the physical Z key regardless of the current keyboard language
        if (event.altKey && event.code === 'KeyZ') {
            document.body.classList.toggle('zen-mode');
        }
    }, true);

})();