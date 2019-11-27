(function ($) {
    'use strict';

    // ISO-693-1 Language codes: http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

    // Submit Message
    // 'submit': 'Submitting...'

    // Mailchimp Responses
    // 0: 'We have sent you a confirmation email'
    // 1: 'Please enter a value'
    // 2: 'An email address must contain a single @'
    // 3: 'The domain portion of the email address is invalid (the portion after the @: )'
    // 4: 'The username portion of the email address is invalid (the portion before the @: )'
    // 5: 'This email address looks fake or invalid. Please enter a real email address'

    $.ajaxChimp.translations = {
        // Translation via https://github.com/lifeisfoo
        'it': {
            'submit': 'Registrazione in corso...',
            0: 'Ti abbiamo inviato una mail di conferma',
            1: 'Per favore inserisci una mail',
            2: 'Un indirizzo valido contiene una sola @',
            3: 'Il dominio della tua mail non Ã¨ valido (la porzione dopo la @: )',
            4: 'Il nome della mail non Ã¨ valido (la porzione prima della @: )',
            5: 'L\'indirizzo email sembra finto o non valido: per favore inseriscine uno reale'
        },
        // Translation via https://github.com/Cube42
        'de': {
            'submit': 'Senden...',
            0: 'Wir haben Ihnen eine BestÃ¤tigungs-E-Mail geschickt',
            1: 'Bitte geben Sie Ihre E-Mail-Adresse ein',
            2: 'Eine E-Mail-Adresse muss ein @ enthalten',
            3: 'Der Domain-Teil der E-Mail-Adresse ist ungÃ¼ltig (der Teil nach dem @)',
            4: 'Der Benutzername der E-Mail-Adresse ist ungÃ¼ltig (der Teil vor dem @)',
            5: 'Diese E-Mail-Adresse scheint gefÃ¤lscht oder ungÃ¼ltig zu sein. Bitte geben Sie eine echte E-Mail-Adresse an!'
        },
        // Translation via https://github.com/designorant
        'pl': {
            'submit': 'WysyÅ‚anie...',
            0: 'Email z potwierdzeniem zostaÅ‚Â wysÅ‚any',
            1: 'ProszÄ™ podaÄ‡ adres email',
            2: 'Adres email musi zawieraÄ‡ jeden znak @',
            3: 'CzÄ™Å›Ä‡ adresu z domenÄ… jest niepoprawna (czÄ™Å›Ä‡ po znaku @: )',
            4: 'CzÄ™Å›Ä‡ adresu z uÅ¼ytkownikiem jest niepoprawna (czÄ™Å›Ä‡ przed znakiem @: )',
            5: 'Ten adres wyglÄ…da na nieprawdziwy lub niepoprawny. ProszÄ™ podaÄ‡ prawdziwy adres email.'
        },
        // The translations below are from google translate, and may not be accurate.
        // Pull requests with translations for other languages as well as corrections are welcome.
        'es': {
            'submit': 'GrabaciÃ³n en curso...',
            0: 'Te hemos enviado un email de confirmaciÃ³n',
            1: 'Por favor, introduzca un valor',
            2: 'Una direcciÃ³n de correo electrÃ³nico debe contener una sola @',
            3: 'La parte de dominio de la direcciÃ³n de correo electrÃ³nico no es vÃ¡lida (la parte despuÃ©s de la @:)',
            4: 'La parte de usuario de la direcciÃ³n de correo electrÃ³nico no es vÃ¡lida (la parte antes de la @:)',
            5: 'Esta direcciÃ³n de correo electrÃ³nico se ve falso o no vÃ¡lido. Por favor, introduce una direcciÃ³n de correo electrÃ³nico real'
        },
        'fr': {
            'submit': 'Enregistrement en cours...',
            0: 'Nous vous avons envoyÃ© un e-mail de confirmation',
            1: 'S\'il vous plaÃ®t entrer une valeur',
            2: 'Une adresse e-mail doit contenir un seul @',
            3: 'La partie domaine de l\'adresse e-mail n\'est pas valide (la partie aprÃ¨s le @:)',
            4: 'La partie nom d\'utilisateur de l\'adresse email n\'est pas valide (la partie avant le signe @:)',
            5: 'Cette adresse e-mail semble faux ou non valides. S\'il vous plaÃ®t entrer une adresse email valide'
        }
    };
})(jQuery);