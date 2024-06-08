import './App.css'
import { useState } from 'react'
import { Button } from './components/Button'
import { Display } from './components/Display'

function App() {
  const [contador, setContador] = useState(0)
  return (
    <div className='main'>
      <h1>Contador</h1>
      <div>
        <Display contador={contador} />
        <div>
          <Button className="btn" value="Aumentar" setContador={setContador} />
          <Button className="btn" value="Disminuir" setContador={setContador} />
        </div>
        <Button className="btn btn_reset" value="Reset" setContador={setContador} />
      </div>
    </div>
  )
}

export default App
