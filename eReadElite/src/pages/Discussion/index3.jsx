import Header from "../../components/Header"

const Discussion3 = () => {
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
    <div className="DetailDiscussion">
  <div className="container">
                    {/* Navigation */}
                    <div className="navigate">
                        <span><a href="">Book Discussion - Forums</a>  &gt;&gt;  <a href="">Theology</a>  &gt;&gt;  <a href="">Biblical Interpretation</a></span>
                    </div>

                    {/* Topic Section */}
                    <div className="topic-container">
                        {/* Original thread */}
                        <div className="head">
                            <div className="authors">Author</div>
                            <div className="content">Topic: Understanding Parables (Read 876 Times)</div>
                        </div>

                        <div className="body">
                            <div className="authors">
                                <div className="username"><a href="">FaithSeeker</a></div>
                                <div>Christian Scholar</div>
                                <img src="https://cdn.pixabay.com/photo/2016/11/14/03/01/god-1822449_960_720.jpg" alt="" />
                                <div>Posts: <u>32</u></div>
                                <div>Points: <u>2567</u></div>
                            </div>
                            <div className="content">
                                Exploring the deeper meanings behind Jesus parables.
                                <br />Which parable resonates with you the most, and why?
                                <br /><br />
                                Lets delve into the Word together.
                                <br />
                                <hr />
                                Blessings, FaithSeeker
                                <br />
                                <div className="comment">
                                    <button>Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comment Area */}
                    <div className="comment-area hide" id="comment-area">
                        <textarea name="comment" id="" placeholder="Comment here..."></textarea>
                        <input type="submit" value="Submit" />
                    </div>

                    {/* Comments Section */}
                    <div className="comments-container">
                        <div className="body">
                            <div className="authors">
                                <div className="username"><a href="">GracefulHeart</a></div>
                                <div>Bible Study Enthusiast</div>
                                <img src="https://cdn.pixabay.com/photo/2016/11/14/03/01/god-1822449_960_720.jpg" alt="" />
                                <div>Posts: <u>127</u></div>
                                <div>Points: <u>7894</u></div>
                            </div>
                            <div className="content">
                                The Parable of the Prodigal Son always speaks to me about Gods unconditional love.
                                <br />What about you, FaithSeeker?
                                <br /><br />
                                <div className="comment">
                                    <button>Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reply Area */}
                    <div className="comment-area hide" id="reply-area">
                        <textarea name="reply" id="" placeholder="Reply here..."></textarea>
                        <input type="submit" value="Submit" />
                    </div>

                    {/* Another Comment With Replies */}
                    <div className="comments-container">
                        <div className="body">
                            <div className="authors">
                                <div className="username"><a href="">SpiritLed</a></div>
                                <div>Prayer Warrior</div>
                                <img src="https://cdn.pixabay.com/photo/2016/11/14/03/01/god-1822449_960_720.jpg" alt="" />
                                <div>Posts: <u>345</u></div>
                                <div>Points: <u>9876</u></div>
                            </div>
                            <div className="content">
                                The Parable of the Mustard Seed teaches us about the power of faith, no matter how small.
                                <br /> Lets continue this enriching discussion!
                                <br /><br />
                                <div className="comment">
                                    <button>Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Reply Area */}
                    <div className="comment-area hide" id="reply-area">
                        <textarea name="reply" id="" placeholder="Reply here..."></textarea>
                        <input type="submit" value="Submit" />
                    </div>

                    {/* Add more discussions and comments as needed */}
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

export default Discussion3