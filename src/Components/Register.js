import React from "react"
import useInput from "../hooks/useInput"

const Register = props => {
  const [{ username, email, password }, setValues] = useInput({
    username: "",
    email: "",
    password: ""
  })
  const register = () => {}
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(`Username: ${username} Password: ${password}`)
          register()
        }}
      >
        <input
          name="username"
          value={username}
          placeholder="Username"
          onChange={setValues}
        />
        <input
          name="email"
          value={email}
          placeholder="Email"
          onChange={setValues}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={setValues}
        />
        <button
          type="submit"
          onClick={() =>
            console.log(
              `Username: ${username} Email: ${email} Password: ${password}`
            )
          }
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
