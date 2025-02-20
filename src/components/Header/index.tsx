import { use } from "react";
import { PowerIcon } from "@heroicons/react/24/solid";

import AuthContext from "../../providers/auth";

function Header() {
  const { setIsAuthed } = use(AuthContext);
  return (
    <header className="h-[50px] bg-gray-700 text-gray-200 flex justify-around">
      <div className="right flex-1 ml-2"></div>
      <div className="left flex justify-end items-center flex-1 mr-2">
        <button
          className="text-white hover:text-yellow-600 cursor-pointer transition-all"
          onClick={() => setIsAuthed(false)}
        >
          <PowerIcon className="size-4" />
        </button>
      </div>
    </header>
  );
}

export default Header;
