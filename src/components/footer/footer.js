import './footer.sass';

const Footer = () => {
    return(
        <footer>
            <div className="wrap">
            <div className="footer">
                <div className="footer__item">
                    <img src="./img/full-logo.png" alt="" />
                </div>
                <div className="footer__item">
                    <div className="footer__title">Landing</div>
                    <div className="footer__link">
                        <a href="#">About us</a>
                    </div>
                    <div className="footer__link">
                        <a href="#">Features</a>
                    </div>
                    <div className="footer__link">
                        <a href="#">Deals</a>
                    </div>
                </div>
                <div className="footer__item">
                <div className="footer__title">Service</div>
                    <div className="footer__link">
                        <a href="#">Privacy policy</a>
                    </div>
                    <div className="footer__link">
                        <a href="#">Terms of use</a>
                    </div>
                </div>
                <div className="footer__item">
                <div className="footer__title">Contacts</div>
                    <div className="footer__link">
                        <a href="mailto:info@expovision.io">info@expovision.io</a>
                    </div>
                    <div className="footer__link">
                        <a href="tel:+79284444095" >+7 (929) 4444 095</a>
                    </div>
                    <div className="footer__link">
                        <div className="networks">
                            <div className="networks__item">
                                <img src="./img/inst.svg" alt="" />
                            </div>
                            <div className="networks__item">
                                <img src="./img/telegram.svg" alt="" />
                            </div>
                            <div className="networks__item">
                                <img src="./img/ln.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;