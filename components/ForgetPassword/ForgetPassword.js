import styled from "@emotion/styled";
import { FaEnvelope } from "react-icons/fa";

function ForgetPassword() {
    return (
        <ForgetPasswordForm className="forget-password-container">
            <div className="fp-left-container">
                <img className="ufp-img" src="/images/nexstack_logo.png" />
            </div>

            <div className="fp-right-container">
                <div className="header-container">
                    <div className="logo">
                        <img
                            className="wp-img"
                            src="/images/wrong-password.png"
                        />
                    </div>
                    <span className="fp-text">Forgot Password ?</span>
                    <span className="nw-text">
                        No worries, we'll send you reset instructions
                    </span>
                </div>
                <div className="body-container">
                    <form className="form-control">
                        <label>Email</label>
                        <div className="input-with-icon">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <FaEnvelope className="fa-env-icon" />
                        </div>
                        <button className="btn-reset">Reset Password</button>
                    </form>
                    <div className="rq-new-one">
                        <span>Didn't receive a comfirmation email?</span>
                        <a href="#"> Request a new one</a>
                    </div>
                </div>
                <div className="footer-container">
                    <span>Remeber your password ?</span>
                    <a href="#"> Sign in</a>
                </div>
            </div>
        </ForgetPasswordForm>
    );
}

const ForgetPasswordForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export default ForgetPassword;
