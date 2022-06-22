import "./contact-style.css";
const ContactPage = () => {
  return (
    <div className="contactPage scroll-page" id="contactPage">
      <div className="pagesContainer">
      <div className="containerDiv">

        <h1>Contact</h1>

        <div className="formContainer">
          <div className="form">
            <form>
              <label>
                Nom :
                <input type="text" name="name" />
              </label>
              <label>
                Email :
                <input type="text" name="name" />
              </label>
              <label>
                Message :
                <textarea type="text" name="name" />
              </label>
            </form>{" "}
          </div>
        </div>
        <div className="contactInfo">
          Culpa minim nulla fugiat velit occaecat officia.
        </div>
        <div className="socialMedia">
          Reprehenderit magna consequat pariatur aute quis consectetur.
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
