import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../utils/axioinstance";
import { API_PATHS } from "../utils/apiPaths";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) return;

        const accessToken = localStorage.getItem("token");
        if (!accessToken) {
            setLoading(false);
            return;
        }
        const fetchUser = async () => {
            try {
                const response = await axiosInstance.get(API_PATHS.Auth.GET_PROFILE);
                SetUser(response.data);
            }
            catch (error) {
                console.error("User not authenticaated", error);
                clearUser();
            }
            finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem("token", userData.token);
        setLoading(false);
    };

    const clearUser = () => {
        setUser(null);
        localStorage.removeItem("token");
    };
    return (
        <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;