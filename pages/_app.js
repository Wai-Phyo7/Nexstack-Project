import GlobalStyle  from '../components/GlobalStyle/GlobalStyle'

// import  ForgetPassword from '../components/ForgetPassword'
function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp