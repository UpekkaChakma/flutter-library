"use client";
import React, { createContext, useState } from "react";

import { SIDE_MENU_ACTIVE_USERS, SIDE_MENU_ITEMS } from "@/constants";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selected, setSelected] = useState(SIDE_MENU_ITEMS[0].title);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Context.Provider
      value={{
        SIDE_MENU_ACTIVE_USERS,
        SIDE_MENU_ITEMS,
        sidebarOpen,
        selected,
        toggleSidebar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
