import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const LoginForm = memo(() => {

    const { t } = useTranslation()
    const dispatch = useDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginIsLoading)
    const error = useSelector(getLoginError)

    const initialReducers: ReducersList = {
        loginForm: loginReducer
    }

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
            <div className={cls.LoginForm}>
                {error && <div>{error}</div>}
                <Input value={username} onChange={onChangeUsername} className={cls.input} type="text" />
                <Input value={password} onChange={onChangePassword} className={cls.input} type="text" />
                <Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>{t('LOG IN')}</Button>
            </div>
        </DynamicModuleLoader >
    );
});

export default LoginForm;