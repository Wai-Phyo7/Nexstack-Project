import styled from "@emotion/styled";
import { FaUnlockAlt } from "react-icons/fa";

function SetNewPassword() {
    return (
        <SetNewPasswordForm className="forget-password-container">
            <div className="snpw-left-container">
                <img className="snpw-img" src="/images/nexstack_logo.png" />
            </div>
            <div className="snpw-right-container">
                <div className="header-container">
                    <div className="snpw-logo">
                        <img className="wp-img" src="/images/password.png" />
                    </div>
                    <span className="snpw-text">Set New Password</span>
                </div>
                <div className="body-container">
                    <form className="form-control">
                        <div className="input-with-icon">
                            <input
                                type="password"
                                placeholder="New Password"
                                required
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
                                required
                            />
                            <FaUnlockAlt className="fa-unlock-icon" />
                        </div>
                        <div className="pw-strenght">
                            <span>password strength:</span>
                            <a href="#"> strong</a>
                        </div>
                        <button className="btn-reset btn-snpw">
                            Reset Password
                        </button>
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
`;

export default SetNewPassword;
