import styled from "@emotion/styled";
import { FaUnlockAlt } from "react-icons/fa";

function SetNewPassword() {
    return (
        <SetNewPasswordForm className="forget-password-container">
            <div className="snwp-left-container">
                <img
                    className="ufp-img"
                    src="/images/undraw_authentication_re_svpt.png"
                />
            </div>
            <div className="fp-right-container">
                <div className="header-container">
                    <div className="snwp-logo">
                        <img className="wp-img" src="/images/password.png" />
                    </div>
                    <span className="fp-text">Set New Password</span>
                </div>
                <div className="body-container">
                    <form className="form-control">
                        <div className="input-with-icon">
                            <input
                                type="password"
                                placeholder="New Password"
                            />
                            <FaUnlockAlt className="fa-unlock-icon" />
                        </div>
                        <div className="snpw-list-container">
                            <span className="ms-contain">MUST contain:</span>
                            <ul className="snpw-list-style">
                                <li>Minimum 10 characters</li>
                                <li>At least one uppercase letter [A-Z]</li>
                                <li>Maximum two identical letters in a row</li>
                                <li>At least one number [0-9]</li>
                                <li>At least one lowercase letter [a-z]</li>
                                <li>
                                    At least one special character, e.g., ! * %
                                    ^ & # @ ]
                                </li>
                            </ul>
                        </div>
                        <div className="input-with-icon">
                            <input
                                type="password"
                                placeholder="Confirm New Password"
                            />
                            <FaUnlockAlt className="fa-unlock-icon" />
                        </div>
                        <div className="pw-strenght">
                            <span>password strength:</span>
                            <a href="#"> strong</a>
                        </div>
                        <button className="btn-reset btn-snwp">Reset Password</button>
                    </form>
                </div>
                <div className="footer-container-snpw">
                    <span>Remeber your password ?</span>
                    <a href="#"> Sign in</a>
                </div>
                <div></div>
            </div>
        </SetNewPasswordForm>
    );
}

const SetNewPasswordForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;

    .snpw-list-container {
        margin-left: 20px;
        font-size: 10px;
        color: #172b4d;
        margin-bottom: 12px;
    }

    .snpw-list-style li {
        list-style-type: disc;
        margin-left: 20px;
        line-height: 15px;
    }

    .pw-strenght {
        margin-left: 5px;
        font-size: 13px;
        font-weight: bold;
        font-style: italic;
        color: #8898AA;

    }

    .pw-strenght a {
        color: #2DCE89;
        text-decoration: none;
    }

    .footer-container-snpw {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .btn-snwp {
        margin-top: 20px;
    }
    
`;

export default SetNewPassword;
