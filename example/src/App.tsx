import React from 'react'

import { useInput } from 'custom-hooks'
import 'custom-hooks/dist/index.css'

const App = () => {
  const a = useInput()
  console.log(a)
  return <div>a</div>
}

export default App
