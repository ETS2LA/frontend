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
        
        // 调用后端API更新语言设置
        try {
            const response = await fetch(`http://localhost:37520/api/language`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ language })
            });
            
            if (!response.ok) {
                console.error('Failed to update language on backend');
            }
        } catch (apiError) {
            console.error('API error when changing language:', apiError);
            // 继续执行，即使后端API调用失败
        }
        
        // 更新当前语言
        currentLanguage = language;
        
        // 加载新语言的翻译
        await loadTranslations();
        
        // 主动触发React组件重新渲染
        const languageChangeEvent = new CustomEvent('languageChanged');
        document.dispatchEvent(languageChangeEvent);
        
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