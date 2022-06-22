const NavBar = () => {

  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        {/* <div className="nav-bar-logo">
                <img src={logo} alt="logo" />
            </div> */}
        <nav className="navbar">
          <a href="#homePage" className="nav__link ">
            Home
          </a>{" "}
          <a href="#persoPage" className="nav__link ">
            Perso
          </a>{" "}
          <a href="#worksPage" className="nav__link ">
            Works
          </a>{" "}
          <a href="#contactPage" className="nav__link ">
            Contact
          </a>{" "}
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
