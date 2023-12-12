window.watsonAssistantChatOptions = {
    integrationID: "e7be6af9-7e5b-4ce1-8025-80b3b0127c82", // The ID of this integration.
    region: "eu-de", // The region your integration is hosted in.
    serviceInstanceID: "171467fc-673e-48ab-b2f2-80c9ed746341", // The ID of your service instance.
    onLoad: function(instance) {
        
        instance.render();

        // BLOCK customize language pack
        const customLanguagePack = {
            "input_placeholder": "Upiši nešto...",
            "homeScreen_returnToAssistant": "Nazad u razgovor",
            "branding_headline": "V saradnji sa <b>IBM Watson®</b>",
            "messages_botIsTyping": "Bot piše",
            "buttons_restart": "Počni novi razgovor",
            "buttons_cancel": "Poništi",
            "buttons_retry": "Pokušaj ponovo",
            "options_select": "Izaberi opciju",
        };
        instance.updateLanguagePack(customLanguagePack);
        // END BLOCK customize language pack
    }
};

setTimeout(function() {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || 'latest') +
        "/WatsonAssistantChatEntry.js"
    document.head.appendChild(t);
});
