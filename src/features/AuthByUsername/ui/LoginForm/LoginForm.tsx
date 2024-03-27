import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input/Input';

const LoginForm = () => {

    const {t} = useTranslation()

    return (
        <div className={cls.LoginForm}>
            <Input className={cls.input} type="text"/>
            <Input className={cls.input} type="text"/>
            <Button className={cls.loginBtn}>{t('LOG IN')}</Button>
        </div>
    );
};

export default LoginForm;