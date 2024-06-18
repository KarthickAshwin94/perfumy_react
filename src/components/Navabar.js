import "../style.css"
function Navbar(){
    return(
      <div className="perfumy">
        <div className="perfumy__one">
          <h1>Perfumy</h1>
        </div>
        <div className="perfumy__two">
          <ul className="products">
            <li><a>Home</a></li>
            <li><a>Products</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Navbar;