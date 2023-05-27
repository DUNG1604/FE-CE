import './Footer.css'
const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>CAREEREMPOWER</h3>
                    <p>
                        Số 1 Đại Cồ Việt <br />
                        Hai Bà Trưng, Hà Nội<br />
                        {/* United States <br /><br /> */}
                        <strong>Phone:</strong> +1 5589 55488 55<br />
                        <strong>Email:</strong> info@example.com<br />
                    </p>
                    </div>
                    <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Về CareerEmpower</h4>
                    <ul>
                        <li><i className="bx bx-chevron-right" /> <a href="#about">Giới thiệu</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Liên hệ chi tiết</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Hỏi đáp</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Dịch vụ</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Điều khoản và dịch vụ</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Chính sách bảo mật</a></li>
                    </ul>
                    <h4></h4>
                    <h4> Đối tác</h4>
                    <ul>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Đối tác 1</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Đối tác 2</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Đối tác 3</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Dịch vụ</h4>
                    <ul>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Đào tạo kĩ năng</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Khóa học tiếng Anh</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Hướng dẫn viết CV</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Thư viện CV</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#">Dịch vụ ...</a></li>
                    </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Ý kiến phản hồi</h4>
                    <p>Form phản hồi, form dành cho đăng kí hoặc mục đích khác. Hãy note lại thêm tính năng này nhé !</p>
                    <form action method="post">
                        <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="container d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                <div className="copyright">
                    © Copyright 2023 <strong><span>CareerEmpower</span></strong>. All Rights Reserved
                </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
            </div>
        </footer>



    )
}
export default Footer