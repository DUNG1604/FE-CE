import './hero.css'
const Hero = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
        <div id="heroCarousel" data-bs-interval={5000} className="container carousel carousel-fade" data-bs-ride="carousel">
            {/* Slide 1 */}
            <div className="carousel-item active">
            <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown"><span>Career Empower</span></h2>
                <p className="animate__animated fanimate__adeInUp">Đơn vị cung cấp giải pháp kết nối và phát triển nguồn nhân lực. Là đơn vị hàng đầu gắn bó với sự phát triển của sinh viên Trường Đại học Kinh tế Quốc dân.</p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Về Chúng Tôi</a>
            </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item">
            <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item">
            <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
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