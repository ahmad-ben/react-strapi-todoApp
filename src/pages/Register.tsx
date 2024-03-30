import InputErrorMessage from "../components/InputErrorMessage";
import Input from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterInputNameType } from "../types";
import { REGISTER_INPUTS_DATA } from "../data";
import { RegisterFormInputsNamesInt } from "../interfaces";
import Button from "../components/ui/Button";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";
import { AxiosError } from "axios";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { 
    register, handleSubmit, formState: { errors } 
  } = useForm<RegisterFormInputsNamesInt>();



  /* ======= Functions ======= */
  const onSubmitFun:
    SubmitHandler<RegisterFormInputsNamesInt> = 
  async (registerData) => {
    console.log("onSubmitFun worked!!");
    console.log(registerData);

    try {
      setIsLoading(true);
      const res = await axiosInstance.post("auth/local/register", registerData);
      toast.success('Successfully toasted!')
      console.log("success res", res);
    } catch (err) {
      const errObj = err as AxiosError<{ error: { message: string } }>;
      toast.error(errObj.response?.data.error.message as string);
      console.log("error happened:", err);
    } finally {setIsLoading(false)}
  }

  console.log(errors);

  /* ======= Renders ======= */
  const renderRegisterFromInputs = () => 
    REGISTER_INPUTS_DATA.map((inputData, idx) => 
      <div className="input-wrapper" key={idx}>
        <Input 
          placeholder={inputData.placeHolder}
          {...register(
            inputData.name, 
            inputData.rules
          )} 
        />
        {
          errors[inputData.name] && 
          <InputErrorMessage 
            msg={errors[inputData.name]?.message} 
          />
        }
      </div>
    );
  

  return (
    <div className="max-w-md mx-auto">

      <h2 className="text-center mb-4 text-3xl font-semibold">
        Register to get access!
      </h2>

      <form onSubmit={handleSubmit(onSubmitFun)} className="space-y-4">
        {renderRegisterFromInputs()}
        <Button isDisabled={isLoading} fullWidth>
          { isLoading ? "Loading..." : "Register"}
        </Button>
      </form>

    </div>
  );

};

export default RegisterPage;
