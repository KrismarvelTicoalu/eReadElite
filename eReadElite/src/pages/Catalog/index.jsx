import { useEffect, useState } from "react";
import Header from "../../components/Header"
import Movie from "../../components/Movie"
import { getDatabase, ref, onValue} from "firebase/database";

const Catalog = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const movieRef = ref(db, "movies/");
    onValue(movieRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setMovie(Object.keys(data).map(key => data[key]));
    });
  }, [])

  return (
    <div>
       <div>
  {/* header section start */}
  <Header catalog="active"/>
  {/* header section end */}
  {/* movies section start */}
  <div className="movies_section layout_padding">
    <div className="container">
      <div className="movies_menu">
        <ul>
          <li className="active"><a href="#">Overview</a></li>
          <li><a href="/catalog/mystery">Mystery</a></li>
          <li><a href="#">Sci-fi</a></li>
          <li><a href="#">Romance</a></li>
          <li><a href="celebs.html">Educational</a></li>
          <li><a href="#">Theology</a></li>
        </ul>
      </div>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Mystery</h2>
        <div className="seemore_bt"><a href="#">See More</a></div>
        <div className="movies_main">
          <div className="iamge_movies_main">
            {movie.map((item) => {
              if (item.genre === "mystery") {
                return (<Movie key={item.id} thumbnail={item.thumbnail} title={item.title} author={item.author} />);
              }
            })}
          </div>
        </div>
      </div>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Science Fiction</h2>
        <div className="seemore_bt"><a href="#">See More</a></div>
        <div className="movies_main">
          <div className="iamge_movies_main">
          {movie.map((item) => {
              if (item.genre === "sci-fi") {
                return (<Movie key={item.id} thumbnail={item.thumbnail} title={item.title} author={item.author} />);
              }
            })}
          </div>
        </div>
      </div>
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Romance</h2>
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
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Educational</h2>
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
      <div className="movies_section_2 layout_padding">
        <h2 className="letest_text">Theology</h2>
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

export default Catalog