import React from "react"
import useInput from "../hooks/useInput"
import axios from "axios"
import {toast} from "react-toastify"
import {connect} from 'react-redux'
import {setPlayer} from '../redux/authReducer'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  registerStyle: {}
})

const Register = ({setPlayer, history}) => {
  const {registerStyle} = useStyles()
  const [{ username, email, password }, setValues] = useInput({
    username: "",
    email: "",
    password: ""
  })
  const register = () => {
    axios.post('/auth/register', {username, email, password})
    .then(results => {
      setPlayer(results.data)
      history.push('/')
    })
    .catch(err => toast.error(err.response.data))
  }
  return (
    <div className={registerStyle}>
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

export default connect(null, {setPlayer})(Register)
