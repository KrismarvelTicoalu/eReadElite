/* eslint-disable react/prop-types */
const Movie = (props) => {
  return (
    <div>
        <div className="iamge_movies">
              <div className="image_3">
                <img src="images/img-3.png" className="image" style={{width: '100%'}} />
                <div className="middle">
                  <div className="playnow_bt">Play Now</div>
                </div>
              </div>
              <h1 className="code_text">{props.title}</h1>
              <p className="there_text">{props.desc}</p>
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
  )
}

export default Movie