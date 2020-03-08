import { useState } from "react"

const useInput = initialState => {
  const [values, setValues] = useState(initialState)
  return [values, ({target}) => {
    setValues({
      ...values,
      [target.name]: target.value
    })
  }, () => {
    for(let key in values){

      setValues({[key]: ''})
    }
  }]
}

export default useInput