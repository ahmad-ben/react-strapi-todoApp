import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef((
  { ...rest }: IProps, ref: Ref<HTMLInputElement>
) => {
  return (
    <input
      ref={ref}
      className="
        w-full px-3 py-3 rounded-lg border border-gray-300 shadow-lg 
        focus:outline-none  focus:border-indigo-600
        focus:ring-1 focus:ring-indigo-600  
        text-md bg-transparent
      "
      {...rest}
    />
  );
})

export default Input;
