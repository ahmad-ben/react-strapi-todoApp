import { RegisterOptions } from "react-hook-form"
import { LoginInputNameType, RegisterInputNameType } from "../types"

export interface RegisterFormInputsNamesInt {
  username: string
  email: string,
  password: string
}

export interface LoginFormInputsNamesInt {
  identifier: string
  password: string
}

export interface RegisterInputsDataInt {
  placeHolder: string,
  name: RegisterInputNameType,
  rules: RegisterOptions<RegisterFormInputsNamesInt, RegisterInputNameType>
}

export interface LoginInputsDataInt {
  placeHolder: string,
  name: LoginInputNameType,
  rules: RegisterOptions<LoginFormInputsNamesInt, LoginInputNameType>
}