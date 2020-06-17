import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = () => {
  const [state] = useState({ loading: false, data: {}, error: {} })
  const instance = axios.create({ baseURL: 'http://localhost:5050' })
  console.log(state)

  const fnTrigger = () => {}

  const fnFetch = () => {
    instance({ method: 'GET', url: '/tests' })
      .then(({ data }) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => fnFetch(), [])
  return [fnTrigger]
}

export default useAxios
