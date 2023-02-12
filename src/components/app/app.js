import { Routes, Route } from "react-router-dom";
import Content from "../content/Content";
import Mvp from "../mvp/Mvp";
import './app.sass'

const App = () => {
  return(
    <main>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/mvp' element={<Mvp/>}/>
        <Route path='*' element={<Mvp/>}/>
      </Routes>
    </main>
  )
}
export default App;
