const Movies = () => {
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
  {/* movies section start */}
  <div className="movies_section layout_padding">
    <div className="container">
      <div className="movies_menu">
        <ul>
          <li className="active"><a href="#">Overview</a></li>
          <li><a href="tv.html">TV</a></li>
          <li><a href="movies.html">Movies</a></li>
          <li><a href="#">Show</a></li>
          <li><a href="celebs.html">Celeb</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Cartoon</a></li>
        </ul>
      </div>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Letest Movies</h2>
        <div className="seemore_bt"><a href="#">See More</a></div>
        <div className="movies_main">
          <div className="iamge_movies_main">
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-3.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">CADE Prlor</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-4.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Bradon</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-5.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Anton Levin</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-6.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Sacha Styles</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-7.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Katledrazdu</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">TV Shows</h2>
        <div className="seemore_bt"><a href="#">See More</a></div>
        <div className="movies_main">
          <div className="iamge_movies_main">
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-8.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">CADE Prlor</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-9.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Bradon</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-10.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Anton Levin</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-11.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Sacha Styles</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-12.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Katledrazdu</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Sports</h2>
        <div className="seemore_bt"><a href="#">See More</a></div>
        <div className="movies_main">
          <div className="iamge_movies_main">
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-13.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">CADE Prlor</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-14.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Bradon</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-15.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Anton Levin</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-16.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Sacha Styles</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
            <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-7.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">Katledrazdu</h1>
              <p className="there_text">There are many variations </p>
              <div className="star_icon">
                <ul>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                  <li><a href="#"><img src="images/star-icon.png" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="seebt_1"><a href="#">See More</a></div>
    </div>
  </div>
  {/* movies section end */}
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

export default Movies