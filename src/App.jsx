
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'


function App() {
  

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"hola nuevo taller"} />
    </>
  )
}

export default App
