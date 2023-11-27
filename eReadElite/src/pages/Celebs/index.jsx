import Copyright from "../../components/Copyright"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Celebs = () => {
  return (
    <div>
       <div>
  {/* header section start */}
  <Header />
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
  <Footer />
  {/* footer  section end */}
  {/* copyright section start */}
  <Copyright />
</div>

    </div>
  )
}

export default Celebs