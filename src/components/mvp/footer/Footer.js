import './mvp-footer.sass'
const Footer = () => {
    return(
        <footer className='footer-mvp'>
            <div className="wrap">
                <div className="footer">
                    <div className="footer__left">
                        <a href="#" className="footer__title">EdenWise ©2023</a>
                        <a href="#" className="footer__item">Privacy policy</a>
                        <a href="#" className="footer__item">Terms of use</a>
                    </div>
                    <div className="footer__right">
                        <a href="mailto:info@expovision.io" className='footer__item'>info@expovision.io</a>
                        <a href="tel:+79294444095" className='footer__item'>+7 (929) 4444 095</a>
                        <div className="networks footer__item">
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
        </footer>
    )
}
export default Footer;