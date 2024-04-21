
import BestSells from "./Components/BestSellComponents/BestSells/BestSells"
import Carou from "./Components/Carou/Carou"
import Header from "./Components/Header/Header"
import Home from "./Components/Homes/Home"
import Items from "./Components/Items/Items"
import Mains1 from "./Components/Main1/Mains/Mains"
import Mains2 from "./Components/Main2/Mains/Mains"

function App() {



  return (
    <>
      <div>
        <Header></Header>
        <Home></Home>
        <Items></Items>
        <Carou></Carou>
        <BestSells></BestSells>
        <div className="my-36">
          <Mains1></Mains1>
        </div>
        <div className="my-36">
          <Mains2></Mains2>
        </div>
      </div>
    </>
  )
}

export default App
