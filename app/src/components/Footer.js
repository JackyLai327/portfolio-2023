import { phoneYellow } from "../resources/images";

function Footer() {
    return (
        <footer className="footer">
            <div>Yu-Cheng (Jacky) Lai</div>
            <div>
                <div className="address">Melbourne, Victoria, Australia 3000</div>
                <div>•</div>
                <a href="tel:+61431178982" className="phone-number">
                    <img src={phoneYellow} alt="phone-icon" />
                    0431178982
                </a>
            </div>
        </footer>
    );
}

export default Footer;