import Header from "../../components/Header"

const Discussion = () => {
  return (
    <div>
        <div>
  {/* header section start */}
  <Header discussion="active"/>
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
  <div className="footer_section layout_padding">
    <div className="container">
      <div className="footer_menu">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="movies.html">Movies</a></li>
          <li><a href="tv.html">TV</a></li>
          <li><a href="celebs.html">Celebs</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">News</a></li>
        </ul>
      </div>
      <div className="social_icon">
        <ul>
          <li><a href="#"><img src="images/fb-icon.png" /></a></li>
          <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
          <li><a href="#"><img src="images/linkedin-icon.png" /></a></li>
          <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
        </ul>
      </div>
    </div>
  </div>
  {/* footer  section end */}
  {/* copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <div className="copyright_text">Copyright 2019 All Right Reserved By <a href="https://html.design">Free html Templates</a></div>
    </div>
  </div>
  {/* copyright section end */}
</div>

    </div>
  )
}

export default Discussion