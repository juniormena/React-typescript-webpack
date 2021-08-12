import './styles.css'
import junior from './pp.jpg'
import { ClickCounter } from './ClickCounter'

interface AppTypes {
  nombre: string
}

function App({ nombre }: AppTypes): JSX.Element {
  const num = 'gsdfgsdfgsdf'

  return (
    <div>
      Hello World {nombre} {process.env.NODE_ENV} {process.env.name}
      <img src={junior} alt="Junior Mena" width="300" height="300" />
      <ClickCounter />
      {num}
    </div>
  )
}

export default App
