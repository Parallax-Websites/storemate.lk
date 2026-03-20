import { useLanguage } from '@/Contexts/LanguageContext';
import { t } from '@/Utils/translations';

export const useTranslation = () => {
    const { currentLanguage } = useLanguage();

    const translate = (key) => {
        return t(key, currentLanguage);
    };

    return { t: translate, currentLanguage };
};
