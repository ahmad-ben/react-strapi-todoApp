import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { LOGIN_INPUTS_DATA } from "../data";
import { useState } from "react";
import InputErrorMessage from "../components/InputErrorMessage";
import toast from "react-hot-toast";
import axiosInstance from "../config/axios.config";
import { AxiosError } from "axios";
import { LoginFormInputsNamesInt } from "../interfaces";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { 
    register, handleSubmit, formState: { errors } 
  } = useForm<LoginFormInputsNamesInt>();

  /* ======= Functions ======= */
  const onSubmitFun:
    SubmitHandler<LoginFormInputsNamesInt> = 
  async (loginData) => {
    console.log("onSubmitFun worked!!");
    console.log("loginData", loginData);

    try {
      setIsLoading(true);
      const res = await axiosInstance.post("auth/local", loginData);
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
  const renderLoginFromInputs = () => 
    LOGIN_INPUTS_DATA.map((inputData, idx) => 
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
      <h2 className="text-center mb-4 text-3xl font-semibold">Login to get access!</h2>
      <form onSubmit={handleSubmit(onSubmitFun)} className="space-y-4">
        {renderLoginFromInputs()}
        <Button isDisabled={isLoading} fullWidth>
          { isLoading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
