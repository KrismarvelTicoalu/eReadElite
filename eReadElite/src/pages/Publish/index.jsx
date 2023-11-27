import Header from "../../components/Header"

const Publish = () => {
  return (
    <div>
       <div>
  {/* header section start */}
  <Header publish="active"/>
  {/* header section end */}
  {/* cooming  section start */}
  <div className="cooming_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="image_17">
            <div className="image_17"><img src="images/img-17.png" /></div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="number_text">01</h1>
          <h1 className="Cooming_soon_taital">Cooming soon</h1>
          <p className="long_text_1">It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
          <div className="paly_bt"><a href="#">Play Now</a></div>
        </div>
      </div>
    </div>
  </div>
  {/* cooming  section end */}
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
</div>

    </div>
  )
}

export default Publish