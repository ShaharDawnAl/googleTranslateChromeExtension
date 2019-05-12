'use strict';
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
        /* Calling the specified callback, passing 
           the web-pages DOM content as argument */

        const root1 = document.querySelector('html');
        root1.setAttribute("lang", "en");
        root1.setAttribute("xml:lang", "en");
        root1.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
        root1.setAttribute("class", "translated-ltr");

        const root = document.querySelector('body');
        root.setAttribute("id", "google_translate_element");


        $('<script type="text/javascript">' +
            function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                    {
                        pageLanguage: 'zh-CN',
                        includedLanguages: 'en',
                        gaTrack: true,
                        gaId: 'UA-XXXXXXXX-X'
                    },
                    'google_translate_element'
                );
            } + '</' + 'script>').appendTo(document.body)[0];

        $('<script  type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></' + 'script>').appendTo(document.body)[0];

        $('<style type="text/css">.goog-te-banner-frame.skiptranslate, .goog-te-gadget-icon {display: none!important;}body {top: 0px!important;}.goog-tooltip {display: none!important;}.goog-tooltip:hover {display: none!important;}.goog-text-highlight{background-color: transparent!important;border: none!important;box-shadow: none!important;}</style>').appendTo(document.head)[0];
        history.replaceState(null, '', '#googtrans(zh-CN|en)');
    }
});