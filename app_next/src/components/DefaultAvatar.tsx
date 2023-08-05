import React, { useState, useEffect } from "react";
interface AvatarProps {
  firstName: string;
  lastName: string;
}
const DefaultAvatar: React.FC<AvatarProps> = ({ firstName, lastName }) => {
  const firstNameInitial = firstName.charAt(0);
  const lastNameInitial = lastName.charAt(0);
  const initials = firstNameInitial + lastNameInitial;

  const getColorFromInitials = (initials: any) => {
    const colors = ["#EF476F", "#118AB2", "#FFD166", "#06D6A0", "#073B4C"]; // Add more colors as needed
    const charCodeSum = initials
      .split("")
      .reduce((acc: string, char: string) => acc + char.charCodeAt(0), 0);
    const colorIndex = charCodeSum % colors.length;
    return colors[colorIndex];
  };

  const initialsColor = getColorFromInitials(initials);

  return (
    <div
      className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-meta-9 dark:bg-gray-600"
      style={{ backgroundColor: initialsColor }}
    >
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {initials}
      </span>
    </div>
  );
};

export default DefaultAvatar;
