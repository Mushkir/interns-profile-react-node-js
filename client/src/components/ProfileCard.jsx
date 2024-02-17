import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileCard = ({ img, name, instagram, linkedin, github, country }) => {
  return (
    <div className="font-Sen w-full max-w-sm  rounded-lg shadow bg-gray-800 border-gray-700">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10 mt-5">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
          src={img}
          alt={`${name}'s Profile Picture`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Intern Full-Stack Engineer
        </span>

        {/* Social Links */}
        <div className="flex space-x-5 mt-5">
          {/* Insta */}
          <Link
            to={instagram}
            target="_blank"
            className="text-white text-3xl hover:-translate-y-1 hover:transition 500 hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m-48 152a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48m60-96a12 12 0 1 1 12-12a12 12 0 0 1-12 12m-28 48a32 32 0 1 1-32-32a32 32 0 0 1 32 32"
              ></path>
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            to={linkedin}
            target="_blank"
            className="text-white text-3xl hover:-translate-y-1 hover:transition 500 hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              ></path>
            </svg>
          </Link>

          {/* GitHub */}
          <Link
            to={github}
            target="_blank"
            className="text-white text-3xl hover:-translate-y-1 hover:transition 500 hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              ></path>
            </svg>
          </Link>
        </div>

        {/* Country */}
        <div className="mt-5">
          <strong className="text-white">{country}</strong>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  country: PropTypes.string,
};

export default ProfileCard;
