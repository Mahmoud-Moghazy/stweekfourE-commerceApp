import React from "react";
import { useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { InputFieldProps } from "../../../constants/interfaces";

const InputField: React.FC<InputFieldProps> = ({name,  label, type, placeholder}) => {

  const [field, meta] = useField(name);

  return (
    <div className="py-3">
      <div className="mb-2 relative">
        <input
          {...field}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={!!meta.error}
          className={`p-1 placeholder-transparent peer border-b w-full focus:outline-none  ${!meta.error && field.value ? "border-green-600 focus:border-green-600" : 'focus:border-red-600'}`}
        />
        <label
          htmlFor={name}
          className="absolute left-0 bottom-full text-sm transition-all duration-200 
          peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:bottom-2 
          peer-focus:bottom-full peer-focus:text-green-500 peer-focus:text-sm"
        >
          {label}
        </label>
      </div>
      {meta.error && meta.touched && (
        <div className="text-red-600 p-1 flex items-center gap-2">
          <FontAwesomeIcon icon={faCircleExclamation} />
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default InputField;
