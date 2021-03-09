import React, { useState } from "react";


const Form = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setValid] = useState(true);
  const [value, setValue] = useState('')


  const setText = event => {
    if(event.target.name === "name"){
        setUsername(event.target.value)
    } else if(event.target.value === "Access123"){
        setValue(event.target.value)
    } else {
        setPassword(event.target.value);
    }
      
  };

  const validate = () => {
    setValid(!!username && !!password);
    if (!username) {
      document.querySelector("#username").focus();
    } else if (!password) {
      document.querySelector("#password").focus();
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    validate();
  };



  return (
    <form className="form" onSubmit={onSubmit}>
      <label
        className={
          username || isValid ? "form__label" : "form__label form__label--error"
        }
      >
        Username
        <input
          type="text"
          name="name"
          id="username"
          className={
            username || isValid
              ? "form__input"
              : "form__input form__input--error"
          }
          value={username}
          onChange={setText}
          aria-required="true"
          aria-invalid={!username && !isValid}
          aria-describedby="usernameAlert"
        />
      </label>
      {!isValid && !username && (
        <div
          role="alert"
          aria-atomic="true"
          id="usernameAlert"
          className="form__alert"
        >
          You must enter a username
        </div>
      )}
      <label
        className={
          password || isValid ? "form__label" : "form__label form__label--error"
        }
      >
        Password
        <input
          type="password"
          name="password"
          id="password"
          className={
            password || isValid
              ? "form__input"
              : "form__input form__input--error"
          }
          value={password}
          onChange={setText}
          aria-required="true"
          aria-invalid={!password && !isValid}
          aria-describedby="passwordAlert"
        />
      </label>
      {!isValid && !password && (
        <div
          aria-live="polite"
          role="alert"
          aria-atomic="true"
          id="passwordAlert"
          className="form__alert"
        >
          You must enter a password
        </div>
        
      )}
        <p className="pwd__constraint">Password must include one capital letter, one lower case letter, and at least one number</p>

      <button type="submit" className="form__submit" >
        Submit
      </button>
    </form>
  );
};

export default Form;
