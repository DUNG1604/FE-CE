const Header = () => {
    return (
        <div>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">AndrewNgo1604@gmail.com</a>
                        <i className="bi bi-phone" /> 0123456789
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    {/* <a href="index.html" class="logo d-flex align-items-center">
                        <img src="./Data/Images/logo-xanhArtboard 3@4x.png" alt="">
                        </img>
                    </a> */}
                    <div className="logo me-auto"><a href="index.html" class="logo d-flex align-items-center">
                        <img src="./Data/Images/logo-xanhArtboard 3@4x.png" alt="">
                        </img>
                    </a></div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto " href="#hero">Về Chúng Tôi</a></li>
                            <li><a className="nav-link scrollto" href="#about">Định Hướng</a></li>
                            <li className="dropdown"><a href="#"><span>Đào tạo</span> <i className="bi bi-chevron-down" /></a>
                                <ul>
                                    <li><a href="#">update</a></li>
                                    {/* <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a> */}
                                    {/* <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul> */}
                                    {/* </li> */}
                                    <li><a href="#">update</a></li>
                                    <li><a href="#">update</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#departments">Việc Làm</a></li>
                            <li><a className="nav-link scrollto" href="#doctors">Du Học</a></li>
                            <li><a className="nav-link scrollto" href="#doctors">Tin Tức</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                        Appointment</a> */}
                </div>
            </header>
        </div>
    )
}

export default Header