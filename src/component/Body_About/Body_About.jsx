import "./Body_About.css";

const BodyAbout = () => {
  return (
    <main id="main">
      {/* ======= About Section ======= */}      
      <section id="mission" className="mission">
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <h2>Về chúng tôi</h2>
            <p>Sứ mệnh</p>
          </div>
            <div className="swiper-wrapper">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    CareerEmpower ra đời với sứ mệnh giúp đỡ sinh viên Đại học Kinh tế Quốc dân có được 
                    <br/> <b className="highlight">công việc đúng sở thích với mức lương xứng đáng</b>
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/home/logo_circle.png" className="testimonial-img" alt />
                  {/* <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4> */}
                  <div class="sub-mission row equal-height">
                    <div class="col-lg-4">
                      <div
                        class="icon-box aos-init aos-animate items items-1"
                        data-aos="zoom-in-left"
                      >
                        <h3 class="title">Vấn đề then chốt</h3>
                        <p class="description">
                          CareerEmpower được thành lập để giải quyết ba thách thức lớn
                          của sinh viên NEU đó là thiếu định hướng nghề nghiệp, kỹ năng
                          chuyên môn và cơ hội tiếp cận các doanh nghiệp uy tín khi mới
                          bước chân vào thị trường lao động.
                        </p>
                      </div>
                    </div>
                  <div class="col-lg-4 mt-5 mt-md-0">
                    <div
                      class="icon-box aos-init aos-animate items items-2"
                      data-aos="zoom-in-left"
                      data-aos-delay="100"
                    >
                      <h3 class="title">Giải pháp cốt lõi</h3>
                      <p class="description">
                        CareerEmpower cung cấp chuỗi giải pháp toàn diện dựa trên nền
                        tảng cá nhân hóa và sự đồng hành xuyên suốt thông qua 3 mắt
                        xích sản phẩm: Định hướng - Đào tạo - Kết nối việc làm.
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-4 mt-5 mt-lg-0 ">
                    <div
                      class="icon-box aos-init aos-animate items items-3"
                      data-aos="zoom-in-left"
                      data-aos-delay="200"
                    >
                      <h3 class="title">Lợi ích mang lại</h3>
                      <p class="description">
                        Giải pháp của CareerEmpower giúp sinh viên tiết kiệm thời gian
                        và chi phí để khám phá bản thân và thị trường. Chúng tôi cung
                        cấp cho sinh viên một bức tranh toàn cảnh, một lộ trình rõ
                        ràng và các giải pháp thực tiễn để tối ưu hóa mục tiêu sự
                        nghiệp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section id="vision" class="vision">
        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <h2>Về chúng tôi</h2>
            <p>Tầm nhìn</p>
          </div>

          <div class="row content" data-aos="fade-up">
            
            <div className="col-lg-6" data-aos="zoom-out" data-aos-delay={200}>
              {/* <img src="./assets/img/home/7.jpg" className="img-fluid" alt="" /> */}
              <img src="./assets/img/home/3.jpg" className="sumenhimg" alt="" />
            </div>
            <div class="col-lg-6">
              <p>
                <strong>
                CareerEmpower sẽ là tổ chức dẫn đầu về đồng hành cùng sinh viên Đại học Kinh tế Quốc dân trên con đường đạt được công việc đúng sở thích với mức lương xứng đáng

                </strong>
              </p>
              <p>
              CareerEmpower nỗ lực và cam kết sẽ tăng cả về chất lượng và số lượng các bạn sinh viên NEU mà CareerEmpower đồng hành. CareerEmpower cam kết đến 2026 sẽ giúp đỡ được 20.000 sinh viên Đại học Kinh tế Quốc dân              </p>
              {/* <a href="https://www.facebook.com/LifeatCareerEmpower"  target="_blank" rel="noopener noreferrer" class="btn-learn-more">
                Tìm hiểu thêm
              </a> */}
            </div>
          </div>
        </div>
      </section>
      
      <section id="our-value" className="our-value">
        <div className="container">
          <div className="section-title">
            <h2>Giá trị</h2>
            <p>Giá trị cốt lõi</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-2">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-1">
                    Nội bộ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-2"
                  >
                    Khách hàng
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Đối tác
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-10">
              <div className="tab-content">
                <div className="tab-pane" id="tab-1">
                  <div className="row gy-4">
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Đào tạo</h3>
                          <p className="noibo_content">
                            Tôn trọng và đề cao giá trị của đào tạo và phát
                            triển năng lực cho nhân viên.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Phát triển</h3>
                          <p className="noibo_content">
                            Giúp nhân sự xây dựng kế hoạch phát triển sự nghiệp
                            để họ đạt được mục tiêu.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Sáng tạo</h3>
                          <p className="noibo_content">
                            Khuyến khích sự sáng tạo và động lực của nhân sự
                            thông qua những dự án thực tế.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Cân bằng</h3>
                          <p className="noibo_content">
                            Chú trọng sự cân bằng trong cuộc sống với tinh thần
                            “Làm hết mình, chơi hết sức”.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane active show" id="tab-2">
                  <div className="row gy-4">
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Cá nhân hóa</h3>
                          <p>
                            Thấu hiểu về khách hàng và đưa ra các sản phẩm cá
                            nhân hóa phù hợp với nhu cầu.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Đồng hành</h3>
                          <p>
                            Tối đa hóa đầu ra bằng việc xây dựng lộ trình và
                            đồng hành xuyên suốt quá trình.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Tiết kiệm</h3>
                          <p>
                            Tiết kiệm thời gian và chi phí thông qua công nghệ
                            và mạng lưới đối tác sâu rộng.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Chất lượng</h3>
                          <p>
                            Cam kết chất lượng hàng đầu có tính thực tiễn cao
                            cho từng sản phẩm và dịch vụ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row gy-4">
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Uy tín</h3>
                          <p className="noibo_content">
                            Luôn giữ uy tín và đảm bảo thực hiện cam kết tuyệt
                            đối đối với đối tác.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Sáng tạo</h3>
                          <p className="noibo_content">
                            Sáng tạo và đổi mới trong việc cung cấp sản phẩm và
                            dịch vụ cho đối tác.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Chất lượng</h3>
                          <p className="noibo_content">
                            Cung cấp sản phẩm và dịch vụ chất lượng đáp ứng các
                            tiêu chuẩn chặt chẽ.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member">
                        <div className="member-info">
                          <h3>Chuyên nghiệp</h3>
                          <p className="noibo_content">
                            Luôn giữ một tinh thần chuyên nghiệp trong mọi giao
                            dịch và tương tác.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" class="philosophy">
        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <h2>Phương châm</h2>
            <p>Triết lý thương hiệu</p>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img
                src="./assets/img/home/logo_xanh.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="stars">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>

            <div className="philosophy-content">
              <p className="trietly1">
                "Tại CareerEmpower, nếu cảm thấy phù hợp, đây sẽ là sự nghiệp
                của bạn.
              </p>
              <p className="trietly1">
                Nếu không, CareerEmpower sẽ là bệ phóng của bạn trên con đường
                sự nghiệp."
              </p>
            </div>

            <div className="trietly_icon"></div>
          </div>
        </div>
      </section>

      <section id="human-resource" class="human-resource">
        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <h2>Nhân lực</h2>
            <p>Đội ngũ của chúng tôi</p>
          </div>

          <div class="row content" data-aos="fade-up">
            <div class="col-lg-5">
              <h3>
              CareerEmpower tự hào sở hữu đội ngũ nhân sự nhiệt huyết, giàu trải nghiệm và luôn sẵn sằng đón nhận thách thức.
              </h3>
              
              <p>
              Chúng tôi không ngừng cập nhật kiến thức, khai thác những xu hướng mới để nâng cao năng lực và mang đến cho khách hàng những dịch vụ chất lượng nhất. Khi đến với CareerEmpower, bạn sẽ được đồng hành bởi những người bạn tận tâm, chia sẻ và tin cậy, luôn sát cánh cùng bạn trong quá trình phát triển sự nghiệp.
              </p>
              <a href="https://www.facebook.com/LifeatCareerEmpower"  target="_blank" rel="noopener noreferrer" class="btn-learn-more">
                Tìm hiểu thêm
              </a>
            </div>
            <div className="col-lg-7" data-aos="zoom-out" data-aos-delay={200}>
              {/* <img src="./assets/img/home/7.jpg" className="img-fluid" alt="" /> */}
              <img src="./assets/img/home/6.jpg" className="sumenhimg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BodyAbout;
