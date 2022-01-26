import React, { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
export default function Auth(props) {
  const {onCloseModal, setTitleModal}=props;
  const [showLogin, setShowlogin] = useState(true);
const showLoginForm=()=>{
  setTitleModal("Inicia sesión")
  setShowlogin(true);
}
const showRegisterForm=()=>{
  setTitleModal("Crear nuevo usuario");
  setShowlogin(false);
}

  return showLogin ? <LoginForm showRegisterForm={showRegisterForm}/> : <RegisterForm showLoginForm={showLoginForm}/>;

}
