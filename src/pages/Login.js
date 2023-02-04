import { AuthLogin } from "../components/AuthLogin";
import { FooterSocial } from "../components/FooterSocial"
import { HeaderMenu } from "../components/HeaderMenu"

const Login = () => {
    return(
        <>
            <HeaderMenu />
            <AuthLogin />
            <FooterSocial />
        </>
    )
}

export default Login;