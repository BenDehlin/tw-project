import React from "react"
import useInput from "../hooks/useInput"
import axios from "axios"
import toast from "react-toastify"
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  loginStyle: {},
})

const Login = props => {
  const [{ username, password }, setValues] = useInput({
    username: "",
    password: ""
  })
  const login = () => {
    // axios.post('/auth/login')
    // .then(results => setPlayer(results.data))
    // .catch(err => toast.error(err.response.data))
  }
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(`Username: ${username} Password: ${password}`)
          login()
        }}
      >
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

export default Login
