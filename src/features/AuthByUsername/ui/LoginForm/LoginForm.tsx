import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

const LoginForm = memo(() => {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const {username,password, error, isLoading} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(()=>{
        dispatch(loginByUsername({username,password}))
    },[dispatch, password, username])

    return (
        <div className={cls.LoginForm}>
            {error && <div>{error}</div>}
            <Input value={username} onChange={onChangeUsername} className={cls.input} type="text" />
            <Input value={password} onChange={onChangePassword} className={cls.input} type="text" />
            <Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>{t('LOG IN')}</Button>
        </div>
    );
});

export default LoginForm;