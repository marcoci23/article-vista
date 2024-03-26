import React from 'react';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {

    const {t, i18n} = useTranslation()

    const changeLang =  async () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')

    return (
        <div>
            <button onClick={changeLang}>lang</button>
        </div>
    );
};
