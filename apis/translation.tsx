declare var require: {
    context(
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp
    ): {
        keys(): string[];
        <T>(id: string): T;
        resolve(id: string): string;
    };
};

interface Translation {
    "default": {
        "Translations": { [key: string]: string };
        "Language": { [key: string]: string };
    }
}

export const translations: { [key: string]: Translation } = {};
export var currentLanguage: string = "en";

export const loadTranslations = async () => {
    const context = require.context('@/translations', false, /\.yaml$/);
    const translationFiles: { [key: string]: Translation } = {};
  
    context.keys().forEach((key: string) => {
        const language = key.replace('./', '').replace('.yaml', '');
        translationFiles[language] = context(key);
    });

    Object.assign(translations, translationFiles);
};

export const translate = (key: string, ...values: any[]): string => {
    //console.log(translations[currentLanguage]);
    let translation = translations[currentLanguage].default.Translations?.[key];
    if (!translation) {
        translation = translations[currentLanguage].default.Language?.[key];
    }
    if (!translation) {
        // Default to english
        translation = translations["en"].default.Translations?.[key];
        if (!translation) {
            return key;
        }
        return translation.replace(/{(\d+)}/g, (match, number) => {
            return values[number] !== undefined ? values[number] : match;
        });
    }

    return translation.replace(/{(\d+)}/g, (match, number) => {
        return values[number] !== undefined ? values[number] : match;
    });
}

export const changeLanguage = async (language: string) => {
    currentLanguage = language;
};