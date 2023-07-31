import React, { useState, useEffect } from "react";

interface AvatarProps{
    firstName: undefined | string,
    lastName: undefined | string,
}
const DefaultAvatar: React.FC<AvatarProps> = (firstName, lastName) => {
    let fNameInitial = firstName.firstName?.charAt(0);
    let lNameInitial = firstName.lastName?.charAt(0);
    
    return(
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-meta-9 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{fNameInitial+lNameInitial}</span>
        </div>
    )
};

export default DefaultAvatar;
