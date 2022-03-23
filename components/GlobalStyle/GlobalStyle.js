import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
    return (
       
        <>
            <Global
                styles={css`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    html {
                        height: 100%;
                        background-color: #172b4d;
                        overflow: hidden; 
                    }

                    body {
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
                            Droid Sans, Helvetica Neue, sans-serif;
                        width: 100%;
                        height: 100vh;
                        background: linear-gradient(
                            90deg,
                            #825ee4 0%,
                            #e6a355 100%
                        );
                        background-repeat: no-repeat;
                        background-size: 100% 50%;
                    }

                    .fp-left-container {
                        width: 420px;
                        height: 350px;
                        margin-top: 22%;
                        margin-bottom: 5%;
                    }

                    .snwp-left-container {
                        width: 420px;
                        height: 350px;
                        margin-bottom: 6%;
                    }

                    .ufp-img {
                        width: 100%;
                    }

                    .fp-right-container {
                        box-sizing: border-box;
                        background-color: #f3f4f6;
                        margin-top: 2.5%;
                        margin-bottom: 5%;
                        border: 3px solid #f3f4f6;
                        border-radius: 10px;
                    }

                    .logo , .snwp-logo {
                        text-align: center;
                        margin-top: 100px;
                        margin-bottom: 15px;
                    }

                    .snwp-logo {
                        margin-top: 70px;
                    }

                    .wp-img {
                        width: 45px;
                    }

                    .fp-text {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #172b4d;
                        font-size: 18px;
                        margin-bottom: 20px;
                    }

                    .nw-text {
                        font-style: normal;
                        font-weight: 300;
                        font-size: 14px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        color: #01282b;
                        margin-bottom: 15px;
                    }

                    .form-control {
                        margin: 20px 20px;
                    }

                    .form-control label {
                        display: block;
                        font-size: 14px;
                        color: #172b4d;

                        /* margin: 10px; */
                    }

                    .fp-text,
                    .nw-text,
                    .form-control label {
                        user-select: none;
                    }

                    .form-control input {
                        width: 335px;
                        height: 40px;
                        margin: 10px 0px;
                        padding-bottom: 2px;
                        font-size: 13px;
                        border: 3px solid #ffffff;
                        outline: none;
                        border-radius: 5px;
                        background-color: #ffffff;
                    }

                    .input-with-icon input[type="email"] , input[type="password"] {
                        padding-left: 40px;
                    }

                    .input-with-icon {
                        position: relative;
                    }

                    .input-with-icon .fa-env-icon , .fa-unlock-icon {
                        position: absolute;
                        left: 0px;
                        top: 15px;
                        padding-left: 15px;
                        font-size: 30px;
                        color: #adb5bd;
                    }

                    .input-with-icon .fa-unlock-icon {
                        top: 15px;
                        font-size: 28px;
                    }

                    .btn-reset {
                        width: 100%;
                        height: 35px;
                        border: 2px solid #5e72e4;
                        border-radius: 5px;
                        background-color: #5e72e4;
                        color: #ffffff;
                        margin-top: 8px;
                        cursor: pointer;
                    }

                    .rq-new-one,
                    .footer-container, .footer-container-snpw {
                        text-align: center;
                        font-size: 11px;
                        color: #172B4D;
                    }

                    .rq-new-one a,
                    .footer-container a, .footer-container-snpw a {
                        color: #5e72e4;
                        text-decoration: none;
                    }

                    a:active {
                        color: blue;
                    }

                    .footer-container {
                        margin-top: 70px;
                        margin-bottom: 40px;
                    }

                    /* test code*/
                    
                    
                `}
            />
        </>
    );
};

export default GlobalStyle;
