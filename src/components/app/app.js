import Chat from "../chat/chat";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import Header from "../header/header";
import Nav from "../nav/nav";
import Services from "../services/services";
import Steps from "../steps/steps";
import './app.sass'
const App = () => {
  return(
    <main>
      <Nav/>
      <Header/>
      <Services/>
      <Steps/>
      <Chat/>
      <Faq/>
      <Footer/>
    </main>
  )
}
export default App;
