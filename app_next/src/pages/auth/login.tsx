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

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      handleToast();
      const { token, message } = await login(email, password);

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
                  <div className="relative">
                    <input
                      type="text" id="outlined_success" aria-describedby="outlined_success_help"
                      className="block px-2.5 pb-2.5 pt-4 py-4 w-full text-xl text-gray-900 bg-transparent rounded-lg border-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=""
                    />
                    <label className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Email</label>
                    <span className="absolute right-4 top-4">
                      <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    {/* <input
                      
                      id="password"
                      
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full py-4 pl-6 pr-10 bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                     */}
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className="block px-2.5 pb-2.5 pt-4 py-4 w-full text-xl text-gray-900 bg-transparent rounded-lg border-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder=""
                    />
                    <label className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Password</label>
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
