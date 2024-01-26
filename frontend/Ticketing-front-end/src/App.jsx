import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, NotFound, RegistrarEvento, VisualizarEvento, Login, ComprarIngresso, Teste} from './pages';
import Success from './pages/Success/Success';
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/visualizar" element={<VisualizarEvento/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/comprar" element={<ComprarIngresso/>} />
          <Route path="/registrar" element={<RegistrarEvento/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/teste" element={<Teste/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
