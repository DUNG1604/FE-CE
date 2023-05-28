import './Body_About.css'

const BodyAbout = () => {
    return (
        <main id="main">
            {/* ======= About Section ======= */}
            <section id="about" class="about">
                <div class="container">

                    <div class="section-title" data-aos="zoom-out">
                    <h2>về chúng tôi</h2>
                    <p>Sứ mệnh & tầm nhìn</p>
                    </div>

                    <div class="row content" data-aos="fade-up">
                    <div class="col-lg-6">
                        <p>
                        Career Empower mang sứ mệnh đưa ra các giải pháp toàn diện giúp sinh viên
                        Đại học Kinh tế Quốc dân có được việc làm đúng ngành nghề với mức lương xứng
                        đáng thông qua các sản phẩm mang tính cá nhân hóa và gắn bó xuyên suốt. Career
                        Empower nỗ lực phát triên với tầm nhìn:
                        </p>
                        <ul>
                        <li><i class="ri-check-double-line"></i> Trở thành đơn vị cung cấp giải pháp kết nối và phát triển nguồn nhân lực.</li>
                        <li><i class="ri-check-double-line"></i> Kiếm việc làm cho 20.000 sinh viên đến năm 2026.</li>
                        <li><i class="ri-check-double-line"></i> Trở thành đơn vị số một đồng hành cùng sinh viên ĐH Kinh tế Quốc dân.</li>
                        <li><i class="ri-check-double-line"></i> Là đơn vị top đầu đào tạo kĩ năng gắn bó với sinh viên.</li>
                        </ul>
                        <a href="#" class="btn-learn-more">Tìm hiểu thêm</a>
                    </div>
                        <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                            <img src="./assets/img/home/3.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </section>
            <section id="our-value" className="our-value">
            <div className="container">
                <div className="section-title"> 
                <h2>Giá trị</h2>
                <p>Giá trị chúng tôi mang lại</p>
                </div>
                <div className="row gy-4">
                <div className="col-lg-2">
                    <ul className="nav nav-tabs flex-column">
                    <li className="nav-item">
                        <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Nội bộ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Cho khách hàng</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Đối tác</a>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-10">
                    <div className="tab-content">
                        <div className="tab-pane active show" id="tab-1">
                            <div className="row gy-4">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="member">
                                        <div className="member-info">
                                            <h3>Đào Tạo</h3>
                                            <p className='noibo_content'>Tôn trọng và đề cao giá trị của đào tạo và phát triển năng lực cho nhân viên.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="member">
                                        <div className="member-info">
                                            <h3>Phát Triển</h3>
                                            <p className='noibo_content'>Giúp nhân sự xây dựng kế hoạch phát triển sự nghiệp để họ đạt được mục tiêu.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="member">
                                        <div className="member-info">
                                            <h3>Sáng Tạo</h3>
                                            <p className='noibo_content'>Khuyến khích sự sáng tạo và động lực của nhân sự thông qua những dự án thực tế.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="member">
                                        <div className="member-info">
                                            <h3>Cân Bằng</h3>
                                            <p className='noibo_content'>Chú trọng sự cân bằng trong cuộc sống với tinh thần “Làm hết mình, chơi hêt sức”.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="tab-pane" id="tab-2">
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Cá Nhân Hóa</h3>
                                        <p className='noibo_content'>Thấu hiểu về khách hàng và đưa ra các sản phẩm cá nhân hóa phù hợp với nhu cầu.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Đồng Hành</h3>
                                        <p className='noibo_content'>Tối đa hóa đầu ra bằng việc xây dựng lộ trình và đồng hành xuyên suốt quá trình.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Tiết Kiệm</h3>
                                        <p className='noibo_content'>Tiết kiệm thời gian và chi phí thông qua công nghệ và mạng lưới đối tác sâu rộng.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Chất Lượng</h3>
                                        <p className='noibo_content'>Cam kết chất lượng hàng đầu có tính thực tiễn cao cho từng sản phẩm và dịch vụ.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab-3">
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Uy Tín</h3>
                                        <p className='noibo_content'>Luôn giữ uy tín và đảm bảo thực hiện cam kết tuyệt đối đối với đối tác.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Sáng Tạo</h3>
                                        <p className='noibo_content'>Sáng tạo và đổi mới trong việc cung cấp sản phẩm và dịch vụ cho đối tác.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Chất Lượng</h3>
                                        <p className='noibo_content'>Cung cấp sản phẩm và dịch vụ chất lượng đáp ứng các tiêu chuẩn chặt chẽ.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Chuyên Nghiệp</h3>
                                        <p className='noibo_content'>Luôn giữ một tinh thần chuyên nghiệp trong mọi giao dịch và tương tác.</p>
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

 
            {/* ======= Team Section ======= */}
            <section id="team" className="team">
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h1 className='GTCL_title'>Giá Trị Cốt Lõi</h1>
                    </header>
                    <div className='GTCL_noibo'>Giá Trị Cho Nội Bộ</div>
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Đào Tạo</h4>
                                    <p className='noibo_content'>Tôn trọng và đề cao giá trị của đào tạo và phát triển năng lực cho nhân viên.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Phát Triển</h4>
                                    <p className='noibo_content'>Giúp nhân sự xây dựng kế hoạch phát triển sự nghiệp để họ đạt được mục tiêu.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Sáng Tạo</h4>
                                    <p className='noibo_content'>Khuyến khích sự sáng tạo và động lực của nhân sự thông qua những dự án thực tế.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Cân Bằng</h4>
                                    <p className='noibo_content'>Chú trọng sự cân bằng trong cuộc sống với tinh thần “Làm hết mình, chơi hêt sức”.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='GTCL_noibo'>Giá Trị Cho Khách Hàng</div>
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Cá Nhân Hóa</h4>
                                    <p className='noibo_content'>Thấu hiểu về khách hàng và đưa ra các sản phẩm cá nhân hóa phù hợp với nhu cầu.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Đồng Hành</h4>
                                    <p className='noibo_content'>Tối đa hóa đầu ra bằng việc xây dựng lộ trình và đồng hành xuyên suốt quá trình.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Tiết Kiệm</h4>
                                    <p className='noibo_content'>Tiết kiệm thời gian và chi phí thông qua công nghệ và mạng lưới đối tác sâu rộng.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Chất Lượng</h4>
                                    <p className='noibo_content'>Cam kết chất lượng hàng đầu có tính thực tiễn cao cho từng sản phẩm và dịch vụ.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='GTCL_noibo'>Giá Trị Cho Đối Tác</div>
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Uy Tín</h4>
                                    <p className='noibo_content'>Luôn giữ uy tín và đảm bảo thực hiện cam kết tuyệt đối đối với đối tác.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Sáng Tạo</h4>
                                    <p className='noibo_content'>Sáng tạo và đổi mới trong việc cung cấp sản phẩm và dịch vụ cho đối tác.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Chất Lượng</h4>
                                    <p className='noibo_content'>Cung cấp sản phẩm và dịch vụ chất lượng đáp ứng các tiêu chuẩn chặt chẽ.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="member">
                                <div className="member-info">
                                    <h4>Chuyên Nghiệp</h4>
                                    <p className='noibo_content'>Luôn giữ một tinh thần chuyên nghiệp trong mọi giao dịch và tương tác.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Team Section */}
            {/* ======= Values Section ======= */}
            <section id="testimonials" className="testimonials">
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h1 className='trietly'>Triết Lý Thương Hiệu</h1>
                    </header>
                    <div className="testimonial-item">
                        <div className="stars">
                            <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                        <p className='trietly1'>
                            "Tại CareerEmpower, nếu cảm thấy phù hợp, đây sẽ là sự nghiệp của bạn. Nếu không, CareerEmpower sẽ là bệ phóng của bạn trên con đường sự nghiệp."
                        </p>
                        <div className='trietly_icon'></div>
                    </div>
                    {/* <div className="testimonials-slider swiper" > */}
                    {/* <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="stars">
                                    <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                                </div>
                                <p>
                                    Tại CareerEmpower, nếu cảm thấy phù hợp, đây sẽ là sự nghiệp của bạn. Nếu không, CareerEmpower sẽ là bệ phóng của bạn trên con đường sự nghiệp.
                                </p>
                                <div className="profile mt-auto">
                                    <h3>Saul Goodman</h3>
                                </div>
                            </div>

                        </div>
                    </div> */}
                </div>
            </section>{/* End Testimonials Section */}
            <section id="recent-blog-posts" className="recent-blog-posts">
                <div className="container" data-aos="fade-up">
                    {/* <header className="section-header">
                        <h1 className='connguoi_title'>Con Người</h1>
                    </header> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="post-box">
                                <div className="post-img conguoiimg"><img src="./assets/img/home/7.jpg" className="img-fluid" alt="" /></div>
                                <span className="post-date">Tue, September 15</span>
                                <div className='connguoi_title'>ĐỘI NGŨ CAREEREMPOWER LÀ NHỮNG CON NGƯỜI ĐAM MÊ, TÀI NĂNG VÀ KHÔNG NGẠI THỬ THÁCH</div>
                                <p>Không ngừng học hỏi, khám phá những  điều mới mẻ để nâng cao kỹ năng và phục vụ khách hàng tốt nhất. Đến với CE, bạn sẽ được hỗ trợ bởi chuyên gia và cũng là người bạn thân thiết, đáng tin cậy, sẵn sàng đồng hành cùng bạn trong hành trình phát triển nghề nghiệp. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Recent Blog Posts Section */}

        </main>
    )
}

export default BodyAbout
