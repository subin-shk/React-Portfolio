import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SideProfile = () => {
  return (
    <>
      <img src="/images/photo.jpg" alt="Subin Shakya" className="photo" />
      <h1>Subin Shakya</h1>
      <p>Currently pursuing B.Sc. CSIT in Nepal</p>
      <button className="border border-gray-500 rounded-full px-4 py-2 my-5 hover:bg-blue-700">
        Download Resume
      </button>
      <br />
      <div className="social-links">
        <a
          href="https://github.com/subin-shk/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="text-black hover:text-gray-800"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/subinshk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="text-blue-800 hover:text-blue-600"
          />
        </a>
      </div>
    </>
  );
};

export default SideProfile;
