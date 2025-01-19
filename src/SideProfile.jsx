import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SideProfile = () => {
  return (
    <div className="side-profile lg:fixed  text-center lg:col-span-1 border-2 border-black rounded-3xl p-9 mt-[6%] md:mx-28 lg:mx-20 bg-gray-600 text-white shadow-2xl shadow-teal-900">
      <img
        src="/images/photo.jpg"
        alt="Subin Shakya"
        className="photo block mx-auto mb-5 rounded-full w-48 h-auto border border-gray-800 shadow-sm shadow-teal-900 hover:shadow-lg hover:shadow-teal-900"
      />

      <h1>Subin Shakya</h1>
      <p>Currently pursuing B.Sc. CSIT in Nepal</p>
      <a href="/Subin_Shakya_CV.pdf" download="Subin_Shakya_CV.pdf">
        <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-teal-900 before:duration-500 before:ease-out hover:shadow-teal-900  hover:border hover:before:h-56 hover:before:w-56 rounded-xl mt-5 ml-14">
          <span class="relative z-10">Download Resume</span>
        </button>
      </a>

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
            className="text-black hover:text-gray-900 hover:translate-x-0.5 hover:-translate-y-0.5"
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
            className="text-blue-600 hover:text-blue-500 hover:translate-x-0.5 hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
};

export default SideProfile;
