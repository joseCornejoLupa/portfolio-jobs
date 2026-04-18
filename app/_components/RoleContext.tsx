"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Role } from "../_lib/data";

interface RoleContextType {
  activeRole: Role;
  setActiveRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType>({
  activeRole: "software-engineer",
  setActiveRole: () => {},
});

export function RoleProvider({ children }: { children: ReactNode }) {
  const [activeRole, setActiveRole] = useState<Role>("software-engineer");
  return (
    <RoleContext.Provider value={{ activeRole, setActiveRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
