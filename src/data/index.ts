import { LoginInputsDataInt, RegisterInputsDataInt } from "../interfaces";

export const REGISTER_INPUTS_DATA: RegisterInputsDataInt[] = [
  {
    placeHolder: "Username",
    name: "username",
    rules: { 
      required: "Username is required.",
      minLength: {
        value: 5,
        message: "Username should be at-least 5 characters"
      } 
    }
  },
  {
    placeHolder: "Email address",
    name: "email",
    rules: { 
      required: "Email is required.",
      pattern: { 
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Not a valid email"
      }
    }
  },
  {
    placeHolder: "Password",
    name: "password",
    rules: { 
      required: "Password is required.",
      minLength: {
        value: 6,
        message: "The password is less than 6"
      }
    }
  },
];

export const LOGIN_INPUTS_DATA: LoginInputsDataInt[] = [
  {
    placeHolder: "Email address",
    name: "identifier",
    rules: { 
      required: "Email is required.",
      pattern: { 
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Not a valid email"
      }
    }
  },
  {
    placeHolder: "Password",
    name: "password",
    rules: { 
      required: "Password is required.",
      minLength: {
        value: 6,
        message: "The password is less than 6"
      }
    }
  },
];
