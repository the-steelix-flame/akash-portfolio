import { socialImgs } from "../constants";

const Footer = () => {
  // --- ⬇️ BHAI YAHAN APNE LINKS DAAL DO ⬇️ ---
  // (Yeh 'linkedin' aur 'github' names aapke constants/index.js file ke 'socialImgs' array ke 'name' property se match hone chahiye)
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/ak-a-sh/",
    github: "https://github.com/the-steelix-flame",
    insta: "https://www.instagram.com/goku_x_akash.5/",
  };
  // --- ⬆️ BAS UPAR WALI LINES EDIT KARNI HAIN ⬆️ ---

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            // --- ⬇️ YAHAN <div
            // ko <a> (link) BANA DIYA HAI ⬇️ ---
            <a
              key={index}
              className="icon"
              href={socialLinks[socialImg.name]} // Link yahaan se aa raha hai
              target="_blank"
              rel="noopener noreferrer"
              title={socialImg.name} // Optional: hover pe naam dikhayega
            >
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
            // --- ⬆️ YAHAN <a> TAG BAND HO RAHA HAI ⬆️ ---
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Akash Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;