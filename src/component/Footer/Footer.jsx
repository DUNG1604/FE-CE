import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              {/* <h3>CAREEREMPOWER</h3> */}
              <div className="footer_img"></div>
              <p>
                207 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội
                <br />
                {/* United States <br /><br /> */}
                <strong>Phone:</strong> 0888844426
                <br />
                <strong>Email:</strong> careerempower.neu@gmail.com
                <br />
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Về chúng tôi</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#about">Sứ mệnh</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Tầm nhìn</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Giá trị cốt lõi</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Triết lý thương hiệu</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">
                    Con người
                    <span class="sub"> (Tìm hiểu thêm - Page Life at CE)</span>
                  </a>
                </li>
              </ul>
              <h4></h4>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Giải pháp</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Định hướng (Coming soon)</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Đào tạo (Coming soon)</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Kết nối việc làm (Coming soon)</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Tin tức</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Học bổng (Coming soon)</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Sự kiện (Coming soon)</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Cuộc thi (Coming soon)</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Liên hệ</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Ứng tuyển (Coming soon)</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a href="#">Hợp tác (Coming soon)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            © Copyright 2023
            <strong>
              <span>CareerEmpower</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        {/* <div className='links_social'> */}
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          {/* <a target='blank' href="" className="twitter"><i className="bx bxl-twitter" /></a> */}
          <a
            target="blank"
            href="https://www.facebook.com/CareerEmpower/ "
            className="facebook"
          >
            <i className="bx bxl-facebook" />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/careerempower.company/ "
            className="instagram"
          >
            <i className="bx bxl-instagram" />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/company/91164917/admin/ "
            className="linkedin"
          >
            <i className="bx bxl-linkedin" />
          </a>
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
};
export default Footer;
