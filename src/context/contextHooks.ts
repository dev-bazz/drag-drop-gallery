import { useContext } from "react";
import { AppContext } from ".";

export const useContextStore = () => useContext(AppContext);
