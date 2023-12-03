import Header from "../../components/Header";
import Footer from "../../components/Footer"
import StarRating from "../Star Rating";

const BookProfile = () => {
    return (
      <>
        <Header/>
        <div>
        <a href="#" className="Profilbuku">
          <img src="images/mysteryBook.jpg" className="bukuMystery" alt="Mystery Book" />
        </a>
        </div>

        <div>
        <button className="bottomBook">Want to Read?</button>
        </div>

        <div>
        <button className="bottomBook">buy $</button>
        </div>

        <StarRating/>
  

        <Footer/>
      </>
    )
  }
  
  export default BookProfile
