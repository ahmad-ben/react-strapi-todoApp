import { RegisterOptions } from "react-hook-form"
import { RegisterInputNameType } from "../types"

export interface RegisterFormInputsNamesInt {
  username: string
  email: string,
  password: string
}

export interface RegisterInputsDataInt {
  placeHolder: string,
  name: RegisterInputNameType,
  rules: RegisterOptions<RegisterFormInputsNamesInt, RegisterInputNameType>
}