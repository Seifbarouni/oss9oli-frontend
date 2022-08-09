import axios from "axios"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { useCookies } from 'react-cookie';

export const GoogleAuth = ()=>{
    const [searchParams] = useSearchParams();
    const [setCookie] = useCookies(['oss9oli']);

    useEffect(()=>{
        axios.get(`${process.env.AUTH_SERVER_URI}/auth/facebook?code=${searchParams.get("code")}`).then(res=>{
            if(res.data.token){
                setCookie("oss9oli", res.data.token)
                window.location = "/"
            }
            else{
                window.location = "/?error=Code not valid"
            }
        }).catch(err=>{
            window.location = "/?error=Server Error"
        })
    }, [])
    return(
        <div>
            <p>Please wait for redirection...</p>
        </div>
    )
} 