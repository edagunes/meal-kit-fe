import { AuthSignUp } from "../components/AuthSignUp";
import { FooterSocial } from "../components/FooterSocial"
import { HeaderMenu } from "../components/HeaderMenu"

const SignUp = () => {
    return(
        <>
            <HeaderMenu />
            <AuthSignUp />
            <FooterSocial />
        </>
    )
}

export default SignUp;