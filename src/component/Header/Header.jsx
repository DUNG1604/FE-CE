import './Header.css'
const Header = () => {
    return (

        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex align-items-center">

            {/* <h1 className="logo me-auto"><a href="index.html">Medilab</a></h1> */}
            {/* Uncomment below if you prefer to use an image logo */}
            <div className="logo me-auto">
                <a href="index.html" className="logo d-flex align-items-center">
                <img src="./assets/img/home/logo_trang.png" alt="">
                </img>
                </a>
            </div>

            <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                <li><a className="nav-link scrollto active" href="#hero">Trang chủ</a></li>
                <li><a className="nav-link scrollto" href="#about">Về chúng tôi</a></li>
                <li><a className="nav-link scrollto" href="#services">Định hướng</a></li>
                <li className="dropdown"><a href="#"><span>Đào tạo</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
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
                {/* <li><a className="nav-link scrollto" href="#departments">Đào tạo</a></li> */}
                <li><a className="nav-link scrollto" href="#doctors">Việc làm</a></li>
                <li><a className="nav-link scrollto" href="#doctors">Tin tức</a></li>

                <li><a className="nav-link scrollto" href="#contact">Liên hệ</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Đăng nhập</span></a>

        </div>
    </header>

    )
}

export default Header