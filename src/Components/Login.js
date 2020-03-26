import React from "react"
import useInput from "../hooks/useInput"
import axios from "axios"
import { toast } from "react-toastify"
import { connect } from "react-redux"
import { setPlayer } from "../redux/authReducer"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  loginStyle: {}
})

const Login = ({ setPlayer, history }) => {
  const { loginStyle } = useStyles()
  const [{ username, password }, setValues] = useInput({
    username: "",
    password: ""
  })
  const login = e => {
    e.preventDefault()
    axios
      .post("/auth/login", { username, password })
      .then(results => {
        setPlayer(results.data)
        history.push("/village")
      })
      .catch(err => toast.error(err.response.data))
  }
  return (
    <div className={loginStyle}>
      <form onSubmit={login}>
        <input
          name="username"
          value={username}
          placeholder="Username"
          onChange={setValues}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={setValues}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default connect(null, { setPlayer })(Login)
