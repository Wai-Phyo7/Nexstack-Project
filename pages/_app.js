import GlobalStyle from "../components/GlobalStyle/GlobalStyle";
import Head from "next/head";

// import  ForgetPassword from '../components/ForgetPassword'
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>NexStack</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
