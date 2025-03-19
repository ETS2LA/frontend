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
export var isChangingLanguage: boolean = false;

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
    try {
        // 设置状态为正在切换语言，触发UI显示加载动画
        isChangingLanguage = true;
        
        // 添加延迟以确保动画有足够时间显示
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // 更新当前语言
        currentLanguage = language;
        
        // 加载新语言的翻译
        await loadTranslations();
        
        // 添加延迟以确保翻译加载完成后动画有足够时间显示
        await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
        console.error('Failed to change language:', error);
        // 发生错误时恢复到之前的语言
        throw error;
    } finally {
        // 无论成功或失败，最终都将状态设置为非切换状态
        isChangingLanguage = false;
    }
};