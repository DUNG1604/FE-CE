import './Footer.css'
const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 footer-contact">
                            {/* <h3>CAREEREMPOWER</h3> */}
                            <div className='footer_img'></div>
                            <p>
                                207 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội<br />
                                {/* United States <br /><br /> */}
                                <strong>Phone:</strong> 0888844426<br />
                                <strong>Email:</strong> careerempower.neu@gmail.com<br />
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

                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Dịch vụ</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Đào tạo kĩ năng</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Khóa học tiếng Anh</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Hướng dẫn viết CV</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Thư viện CV</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Dịch vụ ...</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4> Đối tác</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Đối tác 1</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Đối tác 2</a></li>
                                <li><i className="bx bx-chevron-right" /> <a href="#">Đối tác 3</a></li>
                            </ul>
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
                {/* <div className='links_social'> */}
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    {/* <a target='blank' href="" className="twitter"><i className="bx bxl-twitter" /></a> */}
                    <a target='blank' href="https://www.facebook.com/CareerEmpower/ " className="facebook"><i className="bx bxl-facebook" /></a>
                    <a target='blank' href="https://www.instagram.com/careerempower.company/ " className="instagram"><i className="bx bxl-instagram" /></a>
                    <a target='blank' href="https://www.linkedin.com/company/91164917/admin/ " className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
                {/* </div> */}
            </div>
        </footer>



    )
}
export default Footer