import { Link } from "react-router-dom";

import './hero.css'
const Hero = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
            <div id="heroCarousel" data-bs-interval={5000} className="container carousel carousel-fade" data-bs-ride="carousel">
                {/* Slide 1 */}
                <div className="carousel-item active">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown"><span>CareerEmpower</span></h2>
                        <p className="animate__animated fanimate__adeInUp">CareerEmpower là đơn vị cung cấp các giải pháp toàn diện về định hướng nghề nghiệp, đào tạo kỹ năng và kết nối cơ hội việc làm. Tổ chức là đối tác tin cậy và đồng hành cùng sinh viên Trường Đại học Kinh tế Quốc dân trong việc xây dựng và phát triển lộ trình sự nghiệp hiệu quả.</p>
                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Về Chúng Tôi</a>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown"><span>Dự án “Mùa hè không hối tiếc”</span></h2>
                        <p className="animate__animated animate__fadeInUp">Dự án lớn nhất mùa hè 2023 nhằm khám phá năng lực cũng như định vị bản thân cho những bạn sinh viên trường Đại học Kinh tế Quốc dân. Tham gia dự án, bạn sẽ có cơ hội trải nghiệm làm việc trong môi trường chuyên nghiệp, sáng tạo và năng động, cùng với những người bạn đồng hành tài năng và nhiệt huyết. Liệu bạn có đủ can đảm để trở thành nhân tố khiến “Mùa hè không hối tiếc” trở thành ngọn lửa rực cháy trong mùa hè này?</p>
                        <Link to="/ungtuyen">
                            <a href="#" className="btn-get-started animate__animated animate__fadeInUp scrollto">Ứng tuyển ngay</a>

                        </Link>
                        
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown"><span>Group việc làm hàng đầu tại NEU</span></h2>
                        <p className="animate__animated animate__fadeInUp">CareerEmpower là đơn vị sáng lập group việc làm dành cho sinh viên Kinh tế Quốc dân với hơn 100k thành viên. Group <strong>NEU JOBS & INTERNSHIPS - Cơ hội việc làm, thực tập cho Gen Z tại NEU</strong> là cộng đồng chuyên nghiệp nơi các bạn có thể trao đổi kinh nghiệm, học hỏi kiến thức và cập nhật thông tin mới nhất về thị trường lao động, quy trình tuyển dụng và phát triển nghề nghiệp.</p>
                        <a href=" https://www.facebook.com/groups/careerempower "target="_blank" className="btn-get-started animate__animated animate__fadeInUp scrollto">Tham gia ngay</a>
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