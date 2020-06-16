import { useState } from 'react'

function useInput() {
  const [state] = useState('')
  console.log(state)
  return true
}

export default useInput
