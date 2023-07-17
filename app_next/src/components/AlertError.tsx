import { useState } from "react"
type TitleProps = {
    email: string
}
var AlertError = (props: TitleProps) =>{
   

    const promptMessage = 
        
<div id="toast-success" className="flex items-center animate-bounce transition-opacity max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed top-4 right-4 w-37" role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg className="w-5 h-5 text-meta-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ml-3 text-sm font-normal text-meta-3">Logged in Successfully.</div>
</div>

    const messageError =
         <div className="bg-meta-7-100 border-l-4 border-meta-1 text-meta-1 p-4 h-18" role="alert">
                <div className="items-center">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-exclamation-square-fill" viewBox="0 0 16 16"> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg>
                        <p className="font-bold ml-3">Login Error</p>
                    </div>
                    <p className="text-meta-1">Email and password does not match our records.</p>
                </div>
            </div>
    
    const messageSuccess = 
        <div className="bg-meta-7-100 border-l-4 border-meta-3 text-meta-3 p-4 h-18" role="alert">
            <div className="items-center">
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16"> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/> </svg>
                    <p className="font-bold ml-3">Login Successfully</p>
                </div>
                <p className="text-meta-3">You have succesfully logged in.</p>
            </div>
        </div>

    if(props.email!='aurieljames11@gmail.com'){

    }
    return(
        <>
            {promptMessage}
        </>
    )
}

export default AlertError;

