import axios from "axios"
import { useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import aslema_line from "../assets/svgs/aslema_line.svg"
import aslema_stars from "../assets/svgs/aslema_stars.svg"
import aslema_bg from "../assets/svgs/aslema_bg.svg"

export const FacebookAuth = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['oss9oli']);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_AUTH_SERVER_URI}/auth/facebook?code=${searchParams.get("code")}`).then(res => {
            if (res.data.token) {
                setCookie("oss9oli", res.data.token, { path: '/', sameSite: 'strict' })
                navigate("/accueil")
            }
            else {
                navigate("/?error=Code not valid")
            }
        }).catch(err => {
            alert(err)
            navigate("/?error=Server Error")
        })
    }, [])
    return (
        <div
            className="flex justify-center items-center min-h-screen  z-50"
            style={{
                background: `url(${aslema_bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <p className="header text-9xl z-50">
                <div className="absolute z-40 left-80 bottom-44">
                    <img src={aslema_line} alt="" />
                </div>
                <div className="absolute z-40 right-[600px]">
                    <img src={aslema_stars} alt="" />
                </div>
                ASLEMA
            </p>
        </div>
    )
} 