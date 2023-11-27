const Header = () => {
  return (
    <div>
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
            <a className="nav-link" href="/movies">Catalog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tv">Discussion</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/celebs">Publish</a>
          </li>
        </ul>
        <div className="search_icon"><a href="#"><img src="images/notification-icon.png" /><span className="padding_left_15">Notificastion</span></a></div>
        <div className="search_icon"><a href="#"><img src="images/eye-icon.png" /><span className="padding_left_15">Viwe</span></a></div>
        <div className="search_icon"><a href="#"><img src="images/user-icon.png" /><span className="padding_left_15">login</span></a></div>
        <div className="search_icon"><a href="#"><img src="images/search-icon.png" /><span className="padding_left_15">Search...</span></a></div>
      </div>
    </nav>
  </div>
    </div>
  )
}

export default Header