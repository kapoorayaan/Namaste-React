import { createContext } from "react";
const userContext = createContext({
  user: {
    name: "Ayaan",
    email: "ak@namastesdev.com",
  },
});
export default userContext;
