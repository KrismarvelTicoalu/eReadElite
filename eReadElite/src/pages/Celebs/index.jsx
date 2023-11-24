const Celebs = () => {
  return (
    <div>
       <div>
  {/* header section start */}
  <div className="header_section">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="logo" href="index.html"><img src="images/logo.png" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/movies">Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tv">TV</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/celebs">Celebs</a>
          </li>
        </ul>
        <div className="search_icon"><a href="#"><img src="images/notification-icon.png" /><span className="padding_left_15">Notificastion</span></a></div>
        <div className="search_icon"><a href="#"><img src="images/eye-icon.png" /><span className="padding_left_15">Viwe</span></a></div>
        <div className="search_icon"><a href="#"><img src="images/user-icon.png" /><span className="padding_left_15">login</span></a></div>
        <div className="search_icon"><a href="#"><img src="images/search-icon.png" /><span className="padding_left_15">Search...</span></a></div>
      </div>
    </nav>
  </div>
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

export default Celebs