import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

export const RegisterScreen = () => {
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
      console.log("Es correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log("Nombre mal");
      return false;
    }
    if (!validator.isEmail(email)) {
      console.log("Email mal");
      return false;
    }
    if (password != password2 || password.length < 5) {
      console.log("Mal contrasenias");
      return false;
    }
    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error"></div>
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
