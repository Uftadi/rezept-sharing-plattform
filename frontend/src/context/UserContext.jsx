import { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const url = "http://localhost:3001";

    const fetchUserData = async () => {
        try {
          const response = await axios.get(url);
          setUsers(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Fehler beim Abrufen der Daten:", error.message);
        }
      };


      return (
		<UserContext.Provider
			value={{
				users, 
                setUsers,
                fetchUserData,
                url
			}}
		>
			{children}
		</UserContext.Provider>
	);  
}

export { UserContext, UserContextProvider };