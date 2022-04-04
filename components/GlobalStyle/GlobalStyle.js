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
                        background: linear-gradient(
                            90deg,
                            #2d6db7 0%,
                            #4d9bb6 52.4%,
                            #4eafaa 100%
                        );
                        background-repeat: no-repeat;
                        background-attachment: fixed;
                    }

                    body {
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
                            Droid Sans, Helvetica Neue, sans-serif;
                        width: 100%;
                        height: 100vh;

                        background-size: 100% 50%;
                    }

                    .fp-left-container,
                    .snpw-left-container, .prc-left-container {
                        width: 420px;
                        height: 350px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        margin-top: 7.3%;
                        margin-left: 3%;
                        user-select: none;
                    }

                    .snpw-left-container {
                        margin-top: 0;
                    }

                    .ufp-img,
                    .snpw-img {
                        width: 100%;
                    }

                    .fp-right-container,
                    .snpw-right-container, .prc-right-container {
                        box-sizing: border-box;
                        background-color: #f3f4f6;
                        border: 3px solid #f3f4f6;
                        border-radius: 10px;
                        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                            0 10px 10px rgba(0, 0, 0, 0.22);
                        margin-top: 5.7%;
                        margin-right: 3%;
                    }

                    .snpw-right-container {
                        margin-top: 3.5%;
                        margin-bottom: 5%;
                    }

                    .logo,
                    .snpw-logo {
                        text-align: center;
                        margin-top: 100px;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }

                    .logo-prc {
                        text-align: center;
                        margin-top: 180px;
                        margin-bottom: 15px;
                        cursor: pointer;
                    }

                    .snpw-logo {
                        margin-top: 70px;
                    }

                    .wp-img {
                        width: 45px;
                    }

                    .fp-text,
                    .snpw-text {
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

                    .input-with-icon input[type="email"],
                    input[type="password"] {
                        padding-left: 40px;
                    }

                    .input-with-icon {
                        position: relative;
                    }

                    .input-with-icon .fa-env-icon,
                    .fa-unlock-icon {
                        position: absolute;
                        left: 0px;
                        top: 15px;
                        padding-left: 15px;
                        font-size: 30px;
                        color: #adb5bd;
                        cursor: pointer;
                    }

                    .input-with-icon .fa-unlock-icon {
                        top: 15px;
                        font-size: 28px;
                    }

                    .btn-prc {
                        width: 335px;
                        margin-bottom: 180px;
                    }

                    .btn-reset {
                        width: 100%;
                        height: 35px;
                        border: 2px solid #00abd1;
                        border-radius: 5px;
                        background-color: #00abd1;
                        color: #ffffff;
                        margin-top: 8px;
                        cursor: pointer;
                    }

                    .rq-new-one,
                    .footer-container,
                    .footer-container-snpw {
                        text-align: center;
                        font-size: 11px;
                        color: #172b4d;
                    }

                    .rq-new-one a,
                    .footer-container a,
                    .footer-container-snpw a {
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

                    .forget-password-container {
                        width: 100%;
                    }

                    /*set new password */

                    .snpw-list-container {
                        margin-left: 20px;
                        font-size: 10px;
                        color: #172b4d;
                        margin-bottom: 12px;
                        text-align: left;
                        user-select: none;
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
                        color: #8898aa;
                    }

                    .pw-strenght a {
                        color: #2dce89;
                        text-decoration: none;
                    }

                    .footer-container-snpw {
                        margin-top: 40px;
                        margin-bottom: 40px;
                    }

                    .btn-snpw {
                        margin-top: 15px;
                    }

                    @media (max-width: 767px) {
                        .forget-password-container {
                            display: flex;
                            flex-direction: column;
                            text-align: center;
                        }

                        .fp-left-container,
                        .snpw-left-container, .prc-left-container {
                            width: 50%;
                            height: 50%;
                            margin-left: 0;
                            margin-top: 2%;
                        }

                        .fp-right-container,
                        .snpw-right-container, .prc-right-container {
                            margin-right: 0;
                        }
                    }
                `}
            />
        </>
    );
};

export default GlobalStyle;
