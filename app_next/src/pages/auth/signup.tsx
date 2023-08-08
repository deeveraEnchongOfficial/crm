import Link from "next/link";
import Image from "next/image";
import NEXT_LOGO from '@/images/logo/NEXT_LOGO.png';
import { useRouter } from "next/router";
import { useState } from "react";
import { signup } from "@/hooks/useAuth";
import LoadingButton from "@/components/LoadingButton";
import { UserIcon, EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Signup() {
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastNamae] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const [isPasswordCorfimationVisible, setIsPasswordConfirmationVisible] = useState<boolean>(false)

  const togglePassword = () =>{
    setIsPasswordVisible(!isPasswordVisible)
  }

  const togglePasswordConfirmation = () =>{
    setIsPasswordConfirmationVisible(!isPasswordCorfimationVisible)
  }
  
  const handleSignup = async (e: React.FormEvent) =>{
    e.preventDefault();
    if(password === passwordConfirmation){
      try{
        setIsLoading(true)
        const { message } = await signup(firstName, middleName, lastName, email, password, passwordConfirmation)
      }catch(err){
        console.log(err)
      }finally{
        setIsLoading(false)
      }
    }else{
      setAlertMessage('Password do not match')
    }
  }

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" href="/">
                {/* <Image className="hidden dark:block" src={Logo} alt="Logo" /> */}
                <Image className="dark:hidden" src={NEXT_LOGO} alt="Logo" />
              </Link>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up
              </h2>

              <form onSubmit={handleSignup}>
                <div className="flex justify-between">
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                      <UserIcon className="h-6 w-6 text-gray-500" />
                      </span>
                    </div>
                  </div>

              
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Middle Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={middleName}
                        onChange={(e)=>setMiddleName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                        <UserIcon className="h-6 w-6 text-gray-500" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e)=>setLastNamae(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <span className="absolute right-4 top-4">
                       <UserIcon className="h-6 w-6 text-gray-500" />
                      </span>
                    </div>
                  </div>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text":"password"}
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    <div className="absolute right-4 top-4" onClick={togglePassword}>
                      {isPasswordVisible ? <EyeIcon className="h-6 w-6 text-gray-500" /> : <EyeSlashIcon className="h-6 w-6 text-gray-500" />}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Re-type Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordCorfimationVisible ? "text":"password"}
                      value={passwordConfirmation}
                      onChange={(e)=>setPasswordConfirmation(e.target.value)}
                      placeholder="Re-enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <div className="absolute right-4 top-4" onClick={togglePasswordConfirmation}>
                    {isPasswordCorfimationVisible ? <EyeIcon className="h-6 w-6 text-gray-500" /> : <EyeSlashIcon className="h-6 w-6 text-gray-500" />}
                    </div>
                  </div>
                </div>
                </div>

                <div className="mb-5">
                  <LoadingButton
                    isLoading={isLoading}
                    onClick={handleSignup}
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  >Create Account
                  </LoadingButton>
                </div>
                <div className="mt-6 text-center">
                  <p>
                    Already have an account?{' '}
                    <Link href="/auth/login" className="text-primary">
                      Sign in
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