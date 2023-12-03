import Header from "../../components/Header"

const Discussion2 = () => {
  return (
    <div>
        <div>
  {/* header section start */}
  <Header discussion="active"/>
  {/* header section end */}
  {/* arrival section start */}
  <header>
    <div className="search-box">
      <div>
        <select name id>
          <option value="Everything">Everything</option>
          <option value="Titles">Most Viewed</option>
          <option value="Description">Newest</option>
        </select>
        <input type="text" name="q" placeholder="search ..." />
        <button><i className="fa fa-search" /></button>
      </div>
    </div>
  </header>
  <div className="movies_section layout_padding">
  <div className="container">
    {/* Navigation */}
    <div className="navigate">
      <span><a href>Book Discussions - Forum</a> &gt;&gt; <a href /></span>
    </div>
    {/* Display book discussion posts */}
    <div className="posts-table">
      <div className="table-head">
        <div className="subjects">Book Titles</div>
        <div className="replies">Replies/Views</div>
        <div className="last-reply">Last Reply</div>
      </div>
      {/* Discussion posts start here */}
      <div className="table-row">
        <div className="subjects">
          <a href="/discussion/discussion3">Favorite Science Fiction Novels</a>
          <br />
          <span>Started by <b><a href>BookLover123</a></b>.</span>
        </div>
        <div className="replies">
          5 replies <br /> 210 views
        </div>
        <div className="last-reply">
          Nov 15, 2023
          <br />By <b><a href>ReadingEnthusiast</a></b>
        </div>
      </div>
      <div className="table-row">
        <div className="subjects">
          <a href="/discussion/discussion3">Must-read Classics: Recommendations</a>
          <br />
          <span>Started by <b><a href>ClassicReader</a></b>.</span>
        </div>
        <div className="replies">
          8 replies <br /> 315 views
        </div>
        <div className="last-reply">
          Nov 20, 2023
          <br />By <b><a href>LitExplorer</a></b>
        </div>
      </div>
      <div className="table-row">
        <div className="subjects">
          <a href="/discussion/discussion3">Fantasy Book Series Discussion</a>
          <br />
          <span>Started by <b><a href>FantasyFanatic</a></b>.</span>
        </div>
        <div className="replies">
          12 replies <br /> 420 views
        </div>
        <div className="last-reply">
          Nov 25, 2023
          <br />By <b><a href>ImaginaryWorlds</a></b>
        </div>
      </div>
      <div className="table-row">
        <div className="subjects">
          <a href="/discussion/discussion3">Book-to-Movie Adaptations: Hits and Misses</a>
          <br />
          <span>Started by <b><a href>FilmBookBuff</a></b>.</span>
        </div>
        <div className="replies">
          6 replies <br /> 180 views
        </div>
        <div className="last-reply">
          Nov 28, 2023
          <br />By <b><a href>CineLover</a></b>
        </div>
      </div>
      <div className="table-row">
        <div className="subjects">
          <a href="/discussion/discussion3">Hidden Gems: Lesser-Known Books Worth Reading</a>
          <br />
          <span>Started by <b><a href>BookExplorer</a></b>.</span>
        </div>
        <div className="replies">
          15 replies <br /> 525 views
        </div>
        <div className="last-reply">
          Dec 5, 2023
          <br />By <b><a href>CuriousReader</a></b>
        </div>
      </div>
      <div className="table-row">
        <div className="subjects">
          <a href="/discussion/discussion3">Mystery and Thriller Recommendations</a>
          <br />
          <span>Started by <b><a href>ThrillSeeker</a></b>.</span>
        </div>
        <div className="replies">
          10 replies <br /> 300 views
        </div>
        <div className="last-reply">
          Dec 10, 2023
          <br />By <b><a href>DetectiveFan</a></b>
        </div>
      </div>
      <div className="table-row">
        <div className="subjects">
          <a href="/discussion/discussion3">Book Club Selections for the Month</a>
          <br />
          <span>Started by <b><a href>BookClubLeader</a></b>.</span>
        </div>
        <div className="replies">
          7 replies <br /> 240 views
        </div>
        <div className="last-reply">
          Dec 15, 2023
          <br />By <b><a href>LiteraryEnclave</a></b>
        </div>
      </div>
      <div className="table-row">
        <div className="subjects">
          <a href="/discussion/discussion3">Science and Technology in Fiction: Recommendations</a>
          <br />
          <span>Started by <b><a href>TechReader</a></b>.</span>
        </div>
        <div className="replies">
          9 replies <br /> 400 views
        </div>
        <div className="last-reply">
          Dec 20, 2023
          <br />By <b><a href>SciFiEnthusiast</a></b>
        </div>
      </div>
      <div className="table-row">
        <div className="subjects">
          <a href="/discussion/discussion3">Autobiographies and Memoirs: Personal Favorites</a>
          <br />
          <span>Started by <b><a href>LifeStoryReader</a></b>.</span>
        </div>
        <div className="replies">
          11 replies <br /> 350 views
        </div>
        <div className="last-reply">
          Dec 25, 2023
          <br />By <b><a href>MemoirLover</a></b>
        </div>
      </div>
      {/* Add more discussion posts as needed */}
      {/* Discussion posts end here */}
    </div>
    {/* Pagination starts */}
    <div className="pagination">
      Pages: <a href>1</a><a href>2</a><a href>3</a>
    </div>
    {/* Pagination ends */}
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

export default Discussion2