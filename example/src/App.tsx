import React from 'react'

import { useInput, useFetch } from '@webchemistcorp/custom-hooks'

const App = () => {
  const a = useInput()
  const b = useFetch()
  console.log(a, b)
  return <div>a</div>
}

export default App
