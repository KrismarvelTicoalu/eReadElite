import Copyright from "../../components/Copyright"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const HomePage = () => {
  return (
    <div>
        <div>
  <Header />
  {/* header section end */}
  {/* banner section end */}
  <div className="banner_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="banner_taital">Enjoy <br />The movies Shows And Songs</div>
          <p className="banner_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <div className="see_bt"><a href="#">See More</a></div>
        </div>
        <div className="col-md-6">
          <div className="play_icon"><a href="#"><img src="images/play-icon.png" /></a></div>
        </div>
      </div>
    </div>
  </div>
  {/* banner section end */}
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
  {/* movies section start */}
  <div className="movies_section layout_padding">
    <div className="container">
      <div className="movies_menu">
        <ul>
          <li className="active"><a href="#">Overview</a></li>
          <li><a href="/tv">TV</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="#">Show</a></li>
          <li><a href="/celebs">Celeb</a></li>
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
  {/* newsletter section start */}
  <div className="newsletter_section layout_padding">
    <div className="container">
      <h1 className="newsletter_text">Subscribe Our Newsletter</h1>
      <div className="box_main">
        <p className="dummy_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
        <div className="mail_main">
          <input type="text" className="email_text" placeholder="Enter Your email" name="Enter Your email" />
          <div className="right_arrow">
            <a href="#"><img src="images/right-arrow.png" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* newsletter section end */}
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
  <Footer />
  {/* footer  section end */}
  {/* copyright section start */}
  <Copyright />
</div>

    </div>
  )
}

export default HomePage