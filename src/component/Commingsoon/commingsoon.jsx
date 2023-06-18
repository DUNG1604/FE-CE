import "./commingsoon.css";

const Commingsoon = () => {
  return (
    <div id="backgr" className="backgr" loading="lazy">
      <div id="commingsoon" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          <h1>ComingSoon</h1>
          <h2>
            We're working hard to improve our website and we'll ready to launch
            after
          </h2>

          <div className="social-links text-center">
            <a
              target="blank"
              href="https://www.facebook.com/CareerEmpower/"
              className="facebook"
            >
              <i className="bi bi-facebook" />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/careerempower.company/"
              className="instagram"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/company/91164917/admin/ "
              className="linkedin"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Commingsoon;
