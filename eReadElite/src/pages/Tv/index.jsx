import Copyright from "../../components/Copyright"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Tv = () => {
  return (
    <div>
        <div>
  {/* header section start */}
  <Header />
  {/* header section end */}
  {/* arrival section start */}
  <div className="arrival_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="image_1">
            <h2 className="jesusroch_text">J E S U S R O C H</h2>
            <p className="movie_text">Hollywood Movie</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="image_2">
            <h2 className="jesusroch_text">J E S U S R O C H</h2>
            <p className="movie_text">Hollywood Movie</p>
          </div>
        </div>
        <div className="col-sm-8 col-lg-4">
          <h1 className="arrival_text">A r r i v a l</h1>
          <div className="movie_main">
            <div className="mins_text_1">150 mins</div>
            <div className="mins_text">Actions Movie</div>
            <div className="mins_text"><img src="images/icon-1.png" /><span className="icon_1">Watchlist</span></div>
          </div>
          <p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          <div className="rating_main">
            <div className="row">
              <div className="col-sm-6 col-lg-6">
                <div className="icon_2"><img src="images/icon-2.png" /><span className="padding_10">4.6 Revieweed</span></div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="icon_2"><img src="images/icon-2.png" /><span className="padding_10">Your Rateing</span></div>
              </div>
            </div>
          </div>
          <div className="paly_bt"><a href="#">Play Now</a></div>
        </div>
      </div>
    </div>
  </div>
  {/* arrival section end */}
  {/* footer  section start */}
  <Footer />
  {/* footer  section end */}
  {/* copyright section start */}
  <Copyright />
  {/* copyright section end */}
</div>

    </div>
  )
}

export default Tv