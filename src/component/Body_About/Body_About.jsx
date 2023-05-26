import './Body_About.css'

const Body_About = () => {
    return (
        <main id="main">
            {/* ======= About Section ======= */}
            {/*  */}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="row gx-0">
                        <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay={200}>
                            <div className="content">
                                <h1 className='sumenh_title'>Sứ Mệnh</h1>
                                <div className='sumenh_content'>Career Empower cam kết cung cấp các  giải pháp toàn điện để sinh viên Đại học  Kinh tế Quốc dân có được công việc  đúng sở thích với mức lương xứng đáng  khi ra trường thông qua các sản phẩm cá  nhân hóa và sự đồng hành xuyên suốt.</div>
                            </div>
                            <div className='sumenh1'></div>
                            <div className="content">
                                <h1 className='sumenh_title'>Tầm Nhìn</h1>
                                <div className='tamnhin_content'>Career Empower sẽ là tổ chức số 1 đồng  hành cùng sinh viên Đại học Kinh tế  Quốc dân trên quá trình có được công  việc theo đúng sở thích với mức lương  xứng đáng.
                                </div>
                                <div className='tamnhin_content'>
                                    CareerEmpower cam kết đến 2026 sẽ  giúp đỡ được 20.000 sinh viên NEU
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                            {/* <img src="assets/img/about.jpg" className="img-fluid" alt="" /> */}
                            <img src="Data/Images/3.jpg" className="img-fluid" alt="" />
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
                                <div className="post-img conguoiimg"><img src="Data/Images/6xx.jpg" className="img-fluid" alt="" /></div>
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

export default Body_About
