import { useEffect, useState } from "react"
import axios from "axios";
const useToken = user => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const address = user.user?.email;
            if (address) {
                const { data } = await axios.post("https://obscure-shore-20433.herokuapp.com/login", { address })
                setToken(data.token);
                localStorage.setItem("token", data.token);
            }
        }
        getToken();
    }, [user])
    return [token];
}

export default useToken;