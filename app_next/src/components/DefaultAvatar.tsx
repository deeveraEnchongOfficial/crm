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
    const colors = [
      "#EF476F", // Red
      "#118AB2", // Blue
      "#FFD166", // Yellow
      "#06D6A0", // Green
      "#073B4C", // Dark Blue
      "#FF7F50", // Coral
      "#2E8B57", // Sea Green
      "#FF1493", // Deep Pink
      "#800080", // Purple
      "#DC143C", // Crimson
      "#4B0082", // Indigo
      "#FF4500", // Orange Red
      "#32CD32", // Lime Green
      "#9370DB", // Medium Purple
      "#FF69B4", // Hot Pink
      "#20B2AA", // Light Sea Green
      "#FF6347", // Tomato
      "#808000", // Olive
      "#BA55D3", // Medium Orchid
      "#00FF00", // Lime
      // Add more colors as needed
    ];
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
