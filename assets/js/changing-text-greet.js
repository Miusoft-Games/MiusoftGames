const words = [
    "Hello",  // English
    "Hola",  // Spanish
    "Bonjour",  // French
    "Hallo",  // German & Dutch
    "Ciao",  // Italian
    "Olá",  // Portuguese
    "Привет",  // Russian
    "你好",  // Chinese (Mandarin)
    "こんにちは",  // Japanese
    "안녕하세요",  // Korean
    "مرحبا",  // Arabic
    "नमस्ते",  // Hindi
    "Merhaba",  // Turkish
    "Γεια σου",  // Greek
    "שלום",  // Hebrew
    "สวัสดี",  // Thai
    "Hej",  // Swedish & Danish
    "Cześć",  // Polish
    "Hei",  // Finnish & Norwegian
    "ආයුබෝවන්",  // Sinhala (Sri Lanka)
    "வணக்கம்",  // Tamil (India, Sri Lanka)
    "नमस्कार",  // Marathi & Nepali
    "ሰላም",  // Amharic (Ethiopia)
    "Sawubona",  // Zulu (South Africa)
    "Kumusta",  // Filipino / Tagalog (Philippines)
    "Mabuhay",  // Filipino (Formal greeting)
    "Aloha",  // Hawaiian
    "Bula",  // Fijian
    "Talofa",  // Samoan
    "Kia ora",  // Māori (New Zealand)
    "Saluton",  // Esperanto
    "Xαίρετε",  // Ancient Greek
    "Tungjatjeta",  // Albanian
    "Mingalaba",  // Burmese (Myanmar)
    "Sain bain uu",  // Mongolian
    "Zdravstvuyte",  // Formal Russian
    "Dobrý den",  // Czech
    "Sveiki",  // Latvian & Lithuanian
    "Selamat",  // Indonesian & Malay
    "Szia",  // Hungarian
    "Dia dhuit",  // Irish Gaelic
    "Slav",  // Belarusian
    "Tere",  // Estonian
    "Jambo",  // Swahili (East Africa)
    "Yassas",  // Greek (Formal)
    "Shlama",  // Assyrian
    "Halló",  // Icelandic
    "Kaixo",  // Basque (Spain/France)
    "Zdravo",  // Serbian / Croatian / Bosnian
    "Dzień dobry",  // Polish (Formal)
    "Sveiks",  // Latvian
    "Holaʕ",  // Ladino (Judeo-Spanish)
    "Nǐn hǎo",  // Mandarin (Formal)
    "Tashi delek",  // Tibetan
    "Konnichi wa",  // Japanese (Formal)
    "Sat Sri Akal",  // Punjabi (India/Pakistan)
    "Dobry den",  // Slovak
    "Halo",  // Indonesian
];

let index = 0;

function changeWord() {
    const wordElement = document.getElementById("greeting-text");

    // Add the 'hidden' class to fade out the word
    wordElement.classList.add("hidden");

    // Wait for the fade-out to complete before changing the word
    setTimeout(() => {
        // Change the word after the fade-out (500ms)
        index = (index + 1) % words.length;
        wordElement.textContent = words[index];

        // Remove the 'hidden' class to trigger fade-in
        wordElement.classList.remove("hidden");
    }, 500); // Timeout for fade-out duration
}

// Change the word every 2.5 seconds
setInterval(changeWord, 2500);
