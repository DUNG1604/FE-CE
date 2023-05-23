import './Footer.css'
const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="footer_icon"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    © Chúng tôi <strong><span>Cảm ơn</span></strong>. Vì bạn đã quan tâm.
                </div>
                <div className="credits">
                    Designed by
                    <a href=""> AndrewNgo</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer