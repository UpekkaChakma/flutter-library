import { Context } from "@/context";

import { useContext } from "react";

const SidebarBottom = () => {
  const { SIDE_MENU_ACTIVE_USERS } = useContext(Context);

  return (
    <div className="flex flex-col text-sm lg:text-xs px-4 py-2 gap-3 cursor-default">
      <p className="text-sm lg:text-xs text-primary font-semibold">
        All Screens
      </p>
      <ul className="flex flex-col gap-3 ml-2">
        {SIDE_MENU_ACTIVE_USERS.map((item, index) => (
          <li
            key={index}
            className="flex justify-between text-sm lg:text-xs text-secondary leading-primary"
          >
            <span>{item?.page}</span>
            <span>{item?.activeUsersCount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarBottom;
