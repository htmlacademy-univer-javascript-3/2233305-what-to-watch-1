import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import {FormEvent, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/types';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {APIRoute, AuthorizationStatus} from '../../const';
import {Navigate} from 'react-router-dom';
import Message from '../../components/sign-in/message';
import Error from '../../components/sign-in/error';

function SignInScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const [errorMessage, setError] = useState<string | null>(null);
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={APIRoute.Default}/>;
  }
  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      const data = {
        email: loginRef.current.value,
        password: passwordRef.current.value,
      };
      const currentError = signInValidator(data);
      setError(currentError);
      if (currentError === null) {
        onSubmit(data);
      }
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleSubmit}>
          {(errorMessage === '1' && <Message/>) || (errorMessage === '2' && <Error/>)}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" ref={loginRef} type="email" placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" ref={passwordRef} type="password" placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}


export const signInValidator = (data: { email: string, password: string }) => {
  const isEmailValid = /^\S+@\S+\.\S+$/.test(data.email);
  const isPasswordValid = /^(?=^[a-zA-Z0-9]{2,}$)(?=.*\d)(?=.*[a-zA-Z]).*$/.test(data.password);

  if (!isPasswordValid) {
    return '1';
  }

  if (!isEmailValid) {
    return '2';
  }

  return null;
};

export default SignInScreen;
