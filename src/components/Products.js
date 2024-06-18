import image_one from "../assets/images/Product1.jpeg"
import image_two from "../assets/images/Product2.jpeg"
import image_three from "../assets/images/Product3.jpeg"
import "../style.css"
function Products()
{
  return(
    <div className="Products">
      <div className="Products_One">
        <img src={image_one} alt="one" />
       <div className="One_Desc">
       <p>Fogg Wood Extreme, Eau De Parfum,Long lasting perfume,100ml</p>
       </div>
      </div>
      <div className="Products_Two">
        <img src={image_two} alt="Two" />
        <div className="Two_Desc">
        <p>Fogg Wood Extreme, Eau De Parfum,Long lasting perfume,100ml</p>
        </div>
       
      </div>
      <div className="Products_Three">
        <img src={image_three} alt="Three" />
        <div className="Three_Desc">
        <p>Fogg Wood Extreme, Eau De Parfum,Long lasting perfume,100ml</p>
        </div>
      </div>
    </div>
  )
}

export default Products;