import styled from "@emotion/styled";

function PasswordResetComplete() {
    return (
        <PasswordResetCompleteForm className="forget-password-container">
             <div className="prc-left-container">
                <img className="ufp-img" src="/images/nexstack_logo.png" />
            </div>
            <div className="prc-right-container">
                <div className="header-container">
                    <div className="logo-prc">
                        <img className="wp-img" src="/images/tick.png" />
                    </div>
                    <span className="fp-text">Password Reset Complete</span>
                    <div className="btn-prc form-control">
                        <button className="btn-reset">Back to Sign In</button>
                    </div>
                </div>
            </div>    
        </PasswordResetCompleteForm>
    )
}

const PasswordResetCompleteForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
`;

export default PasswordResetComplete