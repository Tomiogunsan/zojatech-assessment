import { InputAdornment, OutlinedInput } from "@mui/material";
import { IInputProps } from "./interface";
import { twMerge } from "tailwind-merge";
import FieldHelperText from "../FieldHelperText";

const Input = (props: IInputProps) => {
  const {
    label,

    helperText,
    startAdornmentProps,
    endAdornmentProps,
    asteric,
    className,
    startAdornment,
    endAdornment,
    maxlength,
  
    ...rest
  } = props;
  return (
    <div className="w-full max-w-full overflow-hidden flex flex-col py-2">
      {label &&
        (asteric ? (
          <div className="flex gap-[4px] items-center">
            <label className="pb-[3px] text-[#5B6871] text-[14px] leading-6">
              {label}
            </label>
            <img src="/Info.png" alt="icon" className="w-[16px] h-[16px]" />
          </div>
        ) : (
          <label className="pb-[3px] text-[#5B6871] text-[14px] leading-6">
            {label}
          </label>
        ))}
     
      <OutlinedInput
        {...rest}
        classes={{
          input: twMerge(
            "w-full text-[12px] rounded-[8px] border-[0.2px] border-[#E6E6E6]  ",
            className
          ),
         
        }}
        startAdornment={
          startAdornment ? (
            <InputAdornment {...startAdornmentProps} position="start">
              {startAdornment}
            </InputAdornment>
          ) : null
        }
        endAdornment={
          endAdornment ? (
            <InputAdornment {...endAdornmentProps} position="end">
              {endAdornment}
            </InputAdornment>
          ) : null
        }
        inputProps={{ maxlength: maxlength }}
       
      />
      <FieldHelperText error={props.error} helperText={helperText} />
    </div>
  );
};

export default Input;
