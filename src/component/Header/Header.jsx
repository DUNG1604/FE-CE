const Header = () => {
    return (
        <div>
            <div id="topbar" class="d-flex align-items-center fixed-top">
                <div class="container d-flex justify-content-between">
                <div class="contact-info d-flex align-items-center">
                    <i class="bi bi-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                    <i class="bi bi-phone"></i> +1 5589 55488 55
                </div>
                <div class="d-none d-lg-flex social-links align-items-center">
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
                </div>
            </div>
            {/* ======= Header ======= */}
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    {/* <h1 class="logo me-auto"><a href="index.html">Medilab</a></h1> */}
                    {/* Uncomment below if you prefer to use an image logo */}
                    <div className="logo me-auto">
                        <a href="index.html" class="logo d-flex align-items-center">
                        <img src="./assets/img/home/logo_xanh.png" alt="">
                        </img>
                        </a>
                    </div>

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                        <li><a class="nav-link scrollto active" href="#hero">Trang chủ</a></li>
                        <li><a class="nav-link scrollto" href="#about">Về chúng tôi</a></li>
                        <li><a class="nav-link scrollto" href="#services">Định hướng</a></li>
                        <li class="dropdown"><a href="#"><span>Đào tạo</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                            <li><a href="#">Drop Down 1</a></li>
                            <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                                <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Drop Down 2</a></li>
                            <li><a href="#">Drop Down 3</a></li>
                            <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        {/* <li><a class="nav-link scrollto" href="#departments">Đào tạo</a></li> */}
                        <li><a class="nav-link scrollto" href="#doctors">Việc làm</a></li>
                        <li><a class="nav-link scrollto" href="#doctors">Tin tức</a></li>

                        <li><a class="nav-link scrollto" href="#contact">Liên hệ</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Đăng nhập</span></a>

                </div>
            </header>
        </div>
    )
}

export default Header