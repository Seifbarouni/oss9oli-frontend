import axios from "axios"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { useCookies } from 'react-cookie';

export const GoogleAuth = () => {
    const [searchParams] = useSearchParams();
    const [cookies, setCookie] = useCookies(['oss9oli']);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_AUTH_SERVER_URI}/auth/google?code=${searchParams.get("code")}`).then(res => {
            if (res.data.token) {
                setCookie("oss9oli", res.data.token)
                window.location = "/accueil"
            }
            else {
                window.location = "/?error=Code not valid"
            }
        }).catch(err => {
            alert(err)
            window.location = "/?error=Server Error"
        })
    }, [])
    return (
        <div>
            <p>Please wait for redirection...</p>
        </div>
    )
} 