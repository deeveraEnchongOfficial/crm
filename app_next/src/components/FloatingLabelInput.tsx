const FloatingLabelInput = () =>{
    return(
        <>
            <div>   
                <div className="relative">
                    <input type="password" aria-describedby="outlined_error_help" className="block px-2.5 pb-2.5 pt-4 w-full text-l text-gray-900 bg-transparent rounded-lg border-2 border-meta-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="" />
                    <label  className="absolute text-sm text-meta-1 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                </div>
                <p id="outlined_error_help" className="mt-2 text-xs text-meta-1 dark:text-red-400"><span className="font-medium">Oh, snapp!</span> Some error message.</p>    
            </div>

        </>
    )
}

export default FloatingLabelInput;