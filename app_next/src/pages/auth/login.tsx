import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { login } from "@/hooks/useAuth";
import NEXT_LOGO from "@/images/logo/NEXT_LOGO.png";
import Toast from "@/components/Toast";
import LoadingButton from "@/components/LoadingButton";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailAlert, setEmailAlert] = useState<string>("");
  const [passwordAlert, setPasswordAlert] = useState<string>("");

  const togglePassword = () =>{
    setIsPasswordVisible(!isPasswordVisible);
  }

  const Validator = () =>{
    
  }
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      handleToast();
      const { token, message, emailMessage, passwordMessage } = await login(email, password);
      setEmailAlert(emailMessage)
      setPasswordAlert(passwordMessage)
      if (token) {
        setAlertMessage(message);
        setAlertType("success");
        router.push("/"); // Redirect to the dashboard page
      } else {
        setAlertMessage(message);
        setAlertType("error");
      }
    } catch (error) {
      // Handle error if needed
    } finally {
      setIsLoading(false); // Ensure that isLoading is set to false regardless of success or error
    }
  };

  const handleToast = () => {
    setShowToast(!showToast);
  };
  return (
    <>
      <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link href="/" className="mb-5.5 inline-block" passHref>
                <Image
                  className="hidden dark:block"
                  src={NEXT_LOGO}
                  alt="Logo"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <Image
                  className="dark:hidden"
                  src={NEXT_LOGO}
                  alt="Logo"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            {showToast && (
              <Toast
                type={alertType}
                message={alertMessage}
                onClose={handleToast}
              />
            )}
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="text-2xl font-bold text-black mb-9 dark:text-white sm:text-title-xl2">
                Sign In to AppNext
              </h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full py-4 pl-6 pr-10 bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    <span className="absolute right-4 top-4">
                    <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-meta-1 dark:text-green-400"><span className="font-medium">{emailAlert}</span></p> 
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full py-4 pl-6 pr-10 bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    <div
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePassword}
      >
        {isPasswordVisible ? (
          <EyeIcon className="h-6 w-6 text-gray-500" />
        ) : (
          <EyeSlashIcon className="h-6 w-6 text-gray-500" />
        )}
      </div>
                  </div>
                  <p className="mt-2 text-xs text-meta-1 dark:text-green-400"><span className="font-medium">{passwordAlert}</span></p> 
                </div>
                <div className="mb-5">
                <LoadingButton
                  isLoading={isLoading}
                  onClick={handleLogin}
                  className="w-full p-4 text-white transition border rounded-lg cursor-pointer border-primary bg-primary hover:bg-opacity-90"
                  >
                  Sign In
                </LoadingButton>
                </div>
                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{" "}
                    <Link href="/auth/signup" className="text-primary" passHref>
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
