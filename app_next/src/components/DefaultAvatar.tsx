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
      "#073B4C", // Dark Blue
      // Add more colors as needed
    ];
    const charCodeSum = initials
      .split("")
      .reduce((acc: string, char: string) => acc + char.charCodeAt(0), 0);
    const colorIndex = charCodeSum % colors.length;
    return colors[colorIndex];
  };

  const initialsColor = getColorFromInitials(initials);

  // Determine if the background color is considered dark
  const isDarkBackground = (color: string) => {
    const hexColor = color.replace("#", "");
    const red = parseInt(hexColor.substr(0, 2), 16);
    const green = parseInt(hexColor.substr(2, 2), 16);
    const blue = parseInt(hexColor.substr(4, 2), 16);
    const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
    return luminance < 0.5; // Adjust this threshold as needed.
  };

  // Determine the text color based on the background color
  const textColor = isDarkBackground(initialsColor) ? "text-white" : "text-gray-600 dark:text-gray-300";

  return (
    <div
      className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-meta-9 dark:bg-gray-600 ${textColor}`}
      style={{ backgroundColor: initialsColor }}
    >
      <span className="font-medium">{initials}</span>
    </div>
  );
};

export default DefaultAvatar;
