import Navbar from "./components/Navabar"
import Contact from "./components/Contact"
import Aboutus from "./components/Aboutus"
import Search from "./components/Search"
import Products from "./components/Products"
import "./style.css"
function App()
{
    return(
        <div>
        <Navbar></Navbar>
        <Search></Search>
        <Products></Products>
        <Aboutus></Aboutus>
        <Contact></Contact>
        </div>
    )
}
export default App;