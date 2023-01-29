import { useState } from "react";
import Nav from "../nav/nav";
import Content from "../content/content";
import Footer from "../footer/footer";

import './app.sass'
import Mvp from "../mvp/mvp";
const App = () => {
  const [btnClick, setBtnClick] = useState(false)
  const onBtnClickHandle = () => {
    setBtnClick(true)
  }
  return(
    <main>
      <Nav/>
      {!btnClick ? <Content onBtnClick={onBtnClickHandle}/> : <Mvp/>}
      <Footer/>
    </main>
  )
}
export default App;
