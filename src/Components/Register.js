import React from "react"
import useInput from "../hooks/useInput"
import axios from "axios"
import { toast } from "react-toastify"
import { connect } from "react-redux"
import { setPlayer } from "../redux/authReducer"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  registerStyle: {}
})

const Register = ({ setPlayer, history }) => {
  const { registerStyle } = useStyles()
  const [{ username, email, password }, setValues] = useInput({
    username: "",
    email: "",
    password: ""
  })
  const register = e => {
    e.preventDefault()
    axios
      .post("/auth/register", { username, email, password })
      .then(results => {
        setPlayer(results.data)
        setValues({target:{name: 'username', value: ''}})
        setValues({name: 'email', value: ''})
        setValues({name: 'password', value: ''})
        history.push("/village")
      })
      .catch(err => toast.error(err.response.data))
  }
  return (
    <div className={registerStyle}>
      <form onSubmit={e => register(e)}>
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

export default connect(null, { setPlayer })(Register)
