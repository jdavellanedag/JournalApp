import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPassword } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "El correo",
    email: "elcorreo@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    }
    if (password !== password2 || password.length < 5) {
      dispatch(
        setError("Password should be at least 6 characters and be equals")
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already registered?
        </Link>
      </form>
    </>
  );
};
