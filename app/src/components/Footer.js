import { phoneYellow } from "../resources/images";
import { githubYellow, linkedinYellow, emailYellow } from "../resources/images";

function Footer() {
    return (
        <footer className="footer">
            <span>. . .</span>
            <div>Yu-Cheng (Jacky) Lai</div>

            <div className="d-flex m-2">
                <a href="https://github.com/JackyLai327" target="_blank" rel="noreferrer"><img src={githubYellow} alt="github icon" /></a>
                <a href="https://www.linkedin.com/in/yu-cheng-jacky-lai/" target="_blank" rel="noreferrer"><img src={linkedinYellow} alt="linkedin icon" /></a>
                <a href="mailto:jackylai327@gmail.com" target="_blank" rel="noreferrer"><img src={emailYellow} alt="email icon" /></a>
            </div>

            <div className="d-flex">
                <a className="address" target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Melbourne+VIC+3000/@-37.8113831,144.9425517,14z/data=!3m1!4b1!4m6!3m5!1s0x6ad642b8c21cb29b:0x1c045678462e3510!8m2!3d-37.8152065!4d144.963937!16s%2Fm%2F03bn332?entry=ttu">
                    Melbourne, Victoria, Australia 3000
                </a>
                <div className="mx-2">•</div>
                <a href="tel:+61431178982" className="phone-number">
                    <img src={phoneYellow} alt="phone-icon" />
                    0431178982
                </a>
            </div>
        </footer>
    );
}

export default Footer;