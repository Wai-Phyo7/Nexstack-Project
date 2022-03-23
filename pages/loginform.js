import styled from "@emotion/styled"

function LogInForm() {
  return(
    <LogInForm1>
      <form>
        <input type="email"/> <br />
        <input type="password"/> <br />
        <button type="button">Login</button>
      </form>
    </LogInForm1>
  )
}

const LogInForm1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 300px auto;
`

export default LogInForm
