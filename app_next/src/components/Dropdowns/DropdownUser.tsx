import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { getOwner } from "@/hooks/useUser";
import Default_Profile_pic from "@/images/user/Default_Profile_pic.png";
import { logout } from "@/hooks/useAuth";
import DefaultAvatar from "@/components/DefaultAvatar"
import { UserIcon, IdentificationIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

const DropdownUser = () => {
  interface User {
    name: string,
    role: number;
    image: Blob;
       // Other properties
  }

  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);
  const [firstname, setFirstname] = useState<string>("")
  const [lastname, setLastname] = useState<string>("")
  useEffect(() => {
    getOwner()
      .then((data) => {
        const{firstName, lastName} = data.user;
        setFirstname(firstName); 
        setLastname(lastName);
      })
      .catch((error) => {
        console.error("Failed to get User:", error);
      });
  }, []);


  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleLogout = async () => {
    try {
      // Perform logout logic, e.g., making an API request or clearing local storage
      await logout();
      // Redirect to the login page after successful logout
      router.push("/auth/login");
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };
  
  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {firstname}
          </span>
          <span className="block text-xs">{lastname}</span>
        </span>

        <span className="w-12 h-12 rounded-full">
          {user?.image ? (
            <Image
              src={`data:image/png;base64,${user.image}`}
              height={200}
              width={200}
              alt="User"
            />
          ) : (
            <DefaultAvatar firstName={firstname} lastName={lastname}/>
          )}
        </span>

        <svg
          className={`hidden fill-current sm:block ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
             <UserIcon className="h-6 w-6 text-gray-500" />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <IdentificationIcon className="h-6 w-6 text-gray-500" />
              My Contacts
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <Cog6ToothIcon className="h-6 w-6 text-gray-500" />
              Account Settings
            </Link>
          </li>
        </ul>
        <button
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          onClick={handleLogout}
        >
          <ArrowLeftOnRectangleIcon className="h-6 w-6 text-gray-500" />
          Log Out
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
