import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-center">
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a href={socialImg.route} key={index} className="icon">
              <img className="w-5" src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
