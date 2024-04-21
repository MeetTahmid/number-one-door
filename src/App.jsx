
import About from "./Components/About/About"
import BestSells from "./Components/BestSellComponents/BestSells/BestSells"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Home from "./Components/Homes/Home"
import Items from "./Components/Items/Items"
import Mains1 from "./Components/Main1/Mains/Mains"
import Mains2 from "./Components/Main2/Mains/Mains"
import Slider1 from "./Components/Slider1/Slider1"

function App() {



  return (
    <>
      <div>
        <Header></Header>
        <Home></Home>
        <Items></Items>
        <Slider1></Slider1>
        <BestSells></BestSells>
        <div className="my-36">
          <Mains1></Mains1>
        </div>
        <div className="my-36">
          <Mains2></Mains2>
        </div>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
