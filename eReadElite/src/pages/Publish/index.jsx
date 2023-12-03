import Header from "../../components/Header";

const Publish = () => {
  return (
    // <div>
    //   <Header />
    //   <div className="main_content">
    //     {!showLoginForm ? (
    //       <div className="cooming_section layout_padding">
    //         <div className="col-md-6">
    //           <div className="image_17">
    //             <img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2017/06/20/00/03/14/87b6c6e0-93f5-41eb-ae68-7dc1aed816d8/bookleftalign.png" alt="Book" />
    //           </div>
    //           <div className="col-md-6">
    //             <h1 className="number_text">New!</h1>
    //             <h1 className="Cooming_soon_taital">Want to publish your own book?</h1>
    //             <p className="long_text_1">Try now and publish your book here for free.</p>
    //             <div className="paly_bt">
    //               <a href="#" onClick={handleClick}>Click here!</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ) : (
    //       <div className="login_form" style={{ margin: '250px', textAlign: 'center', marginLeft: '800px', color: 'black' }}>
    //         <h2>Enter Your Information</h2>
    //         <form>
    //           <label htmlFor="name">Name:</label><br />
    //           <input type="text" id="name" name="name" style={{ color: 'white', border: '1px solid black', backgroundColor: 'transparent'}} /><br /><br />

    //           <label htmlFor="email">Email:</label><br />
    //           <input type="email" id="email" name="email" style={{ color: 'white', border: '1px solid black', backgroundColor: 'transparent'}} /><br /><br />

    //           <label htmlFor="bookTitle">Book Title:</label><br />
    //           <input type="text" id="bookTitle" name="bookTitle" style={{ color: 'white', border: '1px solid black', backgroundColor: 'transparent' }} /><br /><br />

    //           <label htmlFor="genre">Genre:</label><br />
    //           <select id="genre" name="genre" value={selectedGenre} onChange={handleGenreChange}>
    //             <option value="">Select Genre</option>
    //             <option value="Sci-fi">Sci-fi</option>
    //             <option value="Horror">Horror</option>
    //             <option value="Thrilling">Thrilling</option>
    //             <option value="Romance">Romance</option>
    //             <option value="Comedy">Comedy</option>
    //             <option value="Drama">Drama</option>
    //           </select><br /><br />

    //           <input type="submit" value="Publish" style={{ color: 'black', border: '2px solid black'}} />
    //         </form>
    //       </div>
    //     )}
    //   </div>
    //   {/* ... Footer and other content */}
    // </div>
    <div>
      <Header />
      <div className="main_content">
        <div className="cooming_section layout_padding">
            <div className="col-md-6">
              <div className="image_17">
                <img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2017/06/20/00/03/14/87b6c6e0-93f5-41eb-ae68-7dc1aed816d8/bookleftalign.png" alt="Book" />
              </div>
              <div className="col-md-6">
                <h1 className="number_text">New!</h1>
                <h1 className="Cooming_soon_taital">Want to publish your own book?</h1>
                <p className="long_text_1">Try now and publish your book here for free.</p>
                <div className="paly_bt">
                  <a href="/publish/form">Click here!</a>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default Publish;
