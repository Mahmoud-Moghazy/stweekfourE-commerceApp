import React, { useState } from "react";
import { Formik, Form } from "formik";
import InputField from "./InputField";
import images from "../../../assets/images";
import {
  signUpFields,
  signUpInitialValues,
  signUpValidationSchema,
} from "../../../constants/constants";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
import { useSignUpMutation } from "../../../APIs/Authentication/authAPI";
import { ErrorResponse } from "../../../constants/interfaces";
import { useAppDispatch } from "../../../hooks/hooks";
import { setCredentials } from "../../../features/user/authSlice";
import toast from "react-hot-toast";

const SignUp: React.FC = () => {
  const [errorsMessage, setErrorsMessage] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signUp, { isLoading }] = useSignUpMutation();

  const handleSignUp = async (values: typeof signUpInitialValues) => {
    try {
      const response = await signUp(values).unwrap();
      dispatch(setCredentials({ ...response }));
      navigate("/home");
      toast.success("Sign up successful");
    } catch (error) {
      const errMsg = (error as { data: ErrorResponse }).data.message;
      setErrorsMessage(errMsg);
      toast.error(errMsg);
    }
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="flex items-center py-20 max-w-[1305px] mx-auto">
      <div className="hidden lg:block w-2/3 max-w-[805px]">
        <img src={images.register} alt="Registration" className="" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-between">
        <div className="w-4/5 mb-10">
          <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
          <p className="text-gray-600">Enter your details below</p>
        </div>
        {errorsMessage ? (
          <div className="bg-red-50 text-red-500 p-2 mb-3">{errorsMessage}</div>
        ) : null}
        <div className="w-4/5">
          <Formik
            initialValues={signUpInitialValues}
            validationSchema={signUpValidationSchema}
            onSubmit={handleSignUp}
          >
            {({ isValid, dirty }) => (
              <Form>
                {signUpFields.map((field, index) => (
                  <InputField key={index} {...field} />
                ))}
                <button
                  type="submit"
                  disabled={!isValid || !dirty}
                  className={`w-full py-3 px-6 text-white rounded-sm ${
                    isValid ? "bg-red-500 hover:bg-red-600" : "bg-gray-300"
                  }`}
                >
                  Create Account
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex items-center justify-between gap-4 mt-4">
          <p>Already have account?</p>
          <Link to={"/signin"} className="border-b border-gray-500">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
