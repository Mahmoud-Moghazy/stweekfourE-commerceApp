import { Form, Formik } from "formik";
import images from "../../../assets/images";
import {
  signInFields,
  signInInitialValues,
  signInValidationSchema,
} from "../../../constants/constants";
import InputField from "./InputField";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ErrorResponse } from "../../../constants/interfaces";
import LoadingScreen from "../LoadingScreen";
import { useSignInMutation } from "../../../APIs/Authentication/authAPI";
import { useAppDispatch } from "../../../hooks/hooks";
import { setCredentials } from "../../../features/user/authSlice";
import toast from "react-hot-toast";

const SignIn: React.FC = () => {
  const [errorsMessage, setErrorsMessage] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signIn, { isLoading }] = useSignInMutation();

  const handleSignIn = async (values: typeof signInInitialValues) => {
    try {
      const response = await signIn(values).unwrap();
      dispatch(setCredentials({ ...response }));
      navigate("/home");
      toast.success("Sign in successful");
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
        {/* Parent container with flex-grow, flex layout, and spacing between elements */}
        <div className="w-4/5 mb-10">
          <h2 className="text-3xl font-semibold mb-2">Log in to Exclusive</h2>
          <p className="text-gray-600">Enter your details below</p>
        </div>
        {errorsMessage ? (
          <div className="bg-red-50 text-red-500 p-2 mb-3">{errorsMessage}</div>
        ) : null}
        <div className="w-4/5">
          <Formik
            initialValues={signInInitialValues}
            validationSchema={signInValidationSchema}
            onSubmit={handleSignIn}
          >
            {({ isValid, dirty }) => (
              <Form>
                {signInFields.map((field, index) => (
                  <InputField key={index} {...field} />
                ))}

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={!isValid || !dirty}
                    className={`py-3 px-6 text-white rounded-sm ${
                      isValid ? "bg-red-500 hover:bg-red-600" : "bg-gray-300"
                    }`}
                  >
                    Log in
                  </button>
                  <Link to={"/signin"} className="text-red-500">
                    Forget Password?
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
