import InputErrorMessage from "../components/InputErrorMessage";
import Input from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterInputNameType } from "../types";
import { REGISTER_INPUTS_DATA } from "../data";
import { RegisterFormInputsNamesInt } from "../interfaces";
import Button from "../components/ui/Button";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputsNamesInt>();

  const onSubmitFun: SubmitHandler<RegisterFormInputsNamesInt> = (data) => {
    console.log("onSubmitFun worked!!");
    console.log(data);
  }

  console.log(errors);

  /* ======= Renders ======= */
  const renderRegisterFromInputs = () => 
    REGISTER_INPUTS_DATA.map((inputData, idx) => 
      <div className="input-wrapper" key={idx}>
        <Input 
          placeholder={inputData.placeHolder}
          {...register(
            inputData.name as RegisterInputNameType, 
            inputData.rules
          )} 
        />
        {
          errors[inputData.name as RegisterInputNameType] && 
          <InputErrorMessage 
            msg={errors[inputData.name as RegisterInputNameType]?.message} 
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
        <Button fullWidth>Register</Button>
      </form>

    </div>
  );

};

export default RegisterPage;
