import './hero.css'
const Hero = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
            <div id="heroCarousel" data-bs-interval={5000} className="container carousel carousel-fade" data-bs-ride="carousel">
                {/* Slide 1 */}
                <div className="carousel-item active">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown"><span>CareerEmpower</span></h2>
                        <p className="animate__animated fanimate__adeInUp">Đơn vị cung cấp giải pháp kết nối và phát triển nguồn nhân lực. Là đơn vị hàng đầu gắn bó với sự phát triển của sinh viên Trường Đại học Kinh tế Quốc dân.</p>
                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Về Chúng Tôi</a>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown"><span>Dự án “Mùa hè không hối tiếc”</span></h2>
                        <p className="animate__animated animate__fadeInUp">Dự án dành riêng cho các bạn sinh viên trường Đại học Kinh tế Quốc dân, với nhiều vị trí hấp dẫn như: Content Marketing, Designer, Event, KOLs Nhân sự, Leader Truyền thông, Quay, dựng video Tiktok,... Bạn sẽ có cơ hội trải nghiệm làm việc trong môi trường chuyên nghiệp, sáng tạo và năng động, cùng với những người bạn đồng hành tài năng và nhiệt huyết. Liệu bạn có đủ can đảm để trở thành nhân tố khiến “Mùa hè không hối tiếc” trở thành ngọn lửa rực cháy trong mùa hè này?</p>
                        <a href="/ungtuyen" className="btn-get-started animate__animated animate__fadeInUp scrollto">Tìm hiểu ngay!</a>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown"><span>NEU JOBS & INTERNSHIPS <br></br>Cơ hội việc làm, thực tập cho Gen Z tại NEU</span></h2>
                        <p className="animate__animated animate__fadeInUp">Group việc làm lớn nhất NEU với hơn 100k thành viên dành riêng cho sinh viên trường Đại học Kinh tế Quốc dân được thành lập bởi CareerEmpower với sứ mệnh kết nối việc làm đúng sở thích với mức lương xứng đáng. Đây là nơi chia sẻ kinh nghiệm, kiến thức và thông tin hữu ích về thị trường lao động, quy trình tuyển dụng và phát triển nghề nghiệp.</p>
                        <a href=" https://www.facebook.com/groups/careerempower "target="_blank" className="btn-get-started animate__animated animate__fadeInUp scrollto">Tham gia ngay!</a>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
                </a>
                <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-prev-icon bi bi-chevron-right" aria-hidden="true" />
                </a>
            </div>
            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
                    </path></defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x={50} y={3} fill="rgba(255,255,255, .1)">
                    </use></g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x={50} y={0} fill="rgba(255,255,255, .2)">
                    </use></g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x={50} y={9} fill="#fff">
                    </use></g>
            </svg>
        </section>

    )
}

export default Hero