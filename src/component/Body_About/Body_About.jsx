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
                                        <p>Thấu hiểu về khách hàng và đưa ra các sản phẩm cá nhân hóa phù hợp với nhu cầu.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Đồng Hành</h3>
                                        <p>Tối đa hóa đầu ra bằng việc xây dựng lộ trình và đồng hành xuyên suốt quá trình.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Tiết Kiệm</h3>
                                        <p>Tiết kiệm thời gian và chi phí thông qua công nghệ và mạng lưới đối tác sâu rộng.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="member">
                                    <div className="member-info">
                                        <h3>Chất Lượng</h3>
                                        <p>Cam kết chất lượng hàng đầu có tính thực tiễn cao cho từng sản phẩm và dịch vụ.</p>
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

            {/* Philosophy */}
            <section id="philosophy" class="philosophy">
                <div class="container">

                    <div class="section-title" data-aos="zoom-out">
                    <h2>Phương châm</h2>
                    <p>Triết lý thương hiệu</p>
                    </div>
                    <div className="testimonial-item">
                        <div className='testimonial-img'>
                        <img src="./assets/img/home/logo_xanh.png" className="img-fluid" alt="" />                        
                        </div>
                        <div className="stars">
                            <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                        </div>
                        
                        <div className='philosophy-content'>
                        <p className='trietly1'>
                            "Tại CareerEmpower, nếu cảm thấy phù hợp, đây sẽ là sự nghiệp của bạn.
                        </p>
                        <p className='trietly1'>
                            Nếu không, CareerEmpower sẽ là bệ phóng của bạn trên con đường sự nghiệp."
                        </p> 
                        </div>
                        
                        <div className='trietly_icon'></div>
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
                        Đội ngũ Career Empower là những con người có tài năng, hoài bão lớn và không ngại thử thách    
                        </h3>
                        <ul>
                        <li><i class="ri-check-double-line"></i> Có năng lực chuyên môn cao trong đào tạo và quản lý nguồn nhân lực.</li>
                        <li><i class="ri-check-double-line"></i> Thấu hiểu các bài toán khó của sinh viên, người đi làm và nhà tuyển dụng.</li>
                        <li><i class="ri-check-double-line"></i> Năng động, sáng tạo và không ngừng đổi mới.</li>
                        <li><i class="ri-check-double-line"></i> Không ngừng học hỏi, hoàn thiện, hướng đến đội ngũ chuyên nghiệp.</li>
                        </ul>
                        <p>
                        Đến với Career Empower, bạn sẽ được hỗ trợ bởi chuyên gia thân thiện,
                        đáng tin cậy, luôn sẵn sàng đồng hành cùng bạn trong hành trình phát triển nghề nghiệp
                        </p>
                    </div>
                        <div className="col-lg-7 d-flex align-items-center" data-aos="zoom-out" data-aos-delay={200}>
                            <img src="./assets/img/home/7.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>

                </div>
            </section>  
        </main>
    )
}

export default BodyAbout
