import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState } from 'entities/User/model/selectors/getLoginState/getLoginState';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import i18n from 'i18next';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const {
    className,
  } = props;
  
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error, 
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={i18n.t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Введите username')}
        autofocus
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
