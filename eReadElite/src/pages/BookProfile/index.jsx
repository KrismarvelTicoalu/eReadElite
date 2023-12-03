import Header from "../../components/Header";
import Footer from "../../components/Footer"
import StarRating from "../Star Rating";

const BookProfile = () => {
    return (
      <>
        <Header/>
        <div  className="Teks" >
          <h1>Broken Monsters - Monster-Monster Rusak</h1>
          <h1> </h1>
          <h3> Author : Lauren Beukes , Translator : Lulu Fitri Rahman</h3>
          <a href="#" className="Jumlahrating">
            <img src="images/rating.png" className="ratingImage"></img>
          </a>
        </div>
        <div className="PosisiBook">
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
        </div>

      </>
    )
  }
  
  export default BookProfile
