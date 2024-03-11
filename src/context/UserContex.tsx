import { ReactNode, createContext, useState } from "react";
import { IGoogleUser } from "../types/GoogleUser";

export type Props = {
    data: IGoogleUser,
    setData: (user: IGoogleUser) => void
}

export const UserContext = createContext<Props>({} as Props);



const UserProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<IGoogleUser>({ name: "", picture: "", email: "" })
    return (
        <>
            <UserContext.Provider value={{
                data,
                setData
            }}>
                {children}
            </UserContext.Provider>
        </>
    )
}
export default UserProvider;