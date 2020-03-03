import { useState, useEffect } from "react"
import axios from "axios"

const useAxios = ({ url, callback, initialData }) => {
  const [axiosData, setAxiosData] = useState(initialData || [])
  // console.log({axiosData})
  useEffect(() => {
    axios
      .get(url)
      .then(results => {
        setAxiosData(results.data)
        if (callback) {
          callback(results.data)
        }
      })
      .catch(err => console.log(err))
  }, [url, callback])
  return [axiosData, setAxiosData]
}

export default useAxios
