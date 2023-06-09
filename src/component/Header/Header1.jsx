import { select, on } from "./Head";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./Header.css";
const Header1 = () => {
  function handleClick(event) {
    event.preventDefault();
    const ul = event.currentTarget.nextElementSibling;
    ul.classList.toggle("dropdown-active");
  }
  function clickMobie(event) {
    event.preventDefault();
    const navb = document.querySelector(".navbarr");
    navb.style.display = "block";
  }
  function clicMoibieOut(event) {
    event.preventDefault();
    const navb = document.querySelector(".navbarr");
    navb.style.display = "none";
  }
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
            <div id="header_main1">
              <header id="header" class="fixed-top d-flex align-items-center">

                    <div class="container d-flex align-items-center justify-content-between">
                        <div class="logo">
                            <Link onClick={scrollToTop} to="/">
                                <div class="header_logo">
                                </div>
                            </Link>
                        </div>

                        <nav id="navbar" class="navbar">
                            <ul>
                                {/* <li><Link class="nav-link scrollto active" to='/'>Trang chủ</Link></li> */}
                                <li>
                                    <Link onClick={scrollToTop} class="nav-link scrollto " to="/">
                                        Trang chủ
                                    </Link>
                                </li>
                                <li class="dropdown">
                                    <a href="#mission">
                                        <span href="#mission">Về chúng tôi</span> <i class="bi bi-chevron-down"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#mission">Sứ mệnh</a>
                                        </li>
                                        <li>
                                            <a href="#vision">Tầm nhìn</a>
                                        </li>
                                        <li>
                                            <a href="#our-value">Giá trị cốt lõi</a>
                                        </li>
                                        <li>
                                            <a href="#philosophy">Triết lý thương hiệu</a>
                                        </li>
                                        <li>
                                            <a href="#human-resource">Con người</a>
                                        </li>
                                    </ul>
                                </li>
                                {/* <li class="dropdown"><a href="#"><span>Định hướng</span> <i class="bi bi-chevron-down"></i></a> */}
                                <li class="dropdown">
                                    <Link to="/dinhhuong">
                                        <span>Định hướng</span> <i class="bi bi-chevron-down"></i>
                                    </Link>
                                    <ul>
                                        <li>
                                        <Link to="/Commingsoon">Công cụ</Link>
                                        </li>
                                        <li>
                                            <Link to="/Commingsoon">Mentor</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <Link to="/dinhhuong">
                                        <span>Đào tạo</span> <i class="bi bi-chevron-down"></i>
                                    </Link>
                                    <ul>
                                        <li class="dropdown">
                                            <a href="#">
                                                <span>Kỹ năng mềm</span>{" "}
                                                <i class="bi bi-chevron-right"></i>
                                            </a>
                                            <ul>
                                                <li><Link to="/Commingsoon">Khóa học</Link></li>
                                                <li><Link to="/Commingsoon">Ebook</Link></li>
                                                <li><Link to="/Commingsoon">Bài viết</Link></li>
                                                <li><Link to="/Commingsoon">Video</Link></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="#">
                                                <span>Kỹ năng chuyên môn</span>{" "}
                                                <i class="bi bi-chevron-right"></i>
                                            </a>
                                            <ul>
                                                <li><Link to="/Commingsoon">Khóa học</Link></li>
                                                <li><Link to="/Commingsoon">Ebook</Link></li>
                                                <li><Link to="/Commingsoon">Bài viết</Link></li>
                                                <li><Link to="/Commingsoon">Video</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Chương trình thực tế</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <Link to="/dinhhuong">
                                        <span>Việc làm</span> <i class="bi bi-chevron-down"></i>
                                    </Link>
                                    <ul>
                                        <li class="dropdown">
                                            <a href="#">
                                                <span>Ứng viên</span>{" "}
                                                <i class="bi bi-chevron-right"></i>
                                            </a>
                                            <ul>
                                            <li><Link to="/Commingsoon">Tìm việc</Link></li>
                                            <li><Link to="/Commingsoon">Tạo CV</Link></li>
                                            </ul>
                                        </li>                                    
                                        <li>
                                            <Link to="/Commingsoon">Nhà tuyển dụng</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="#">
                                        <span>Tin tức</span> <i class="bi bi-chevron-down"></i>
                                    </a>
                                    <ul>                            
                                        <li><Link to="/Commingsoon">Học bổng</Link></li>
                                        <li><Link to="/Commingsoon">Sự kiện</Link></li>
                                        <li><Link to="/Commingsoon">Cuộc thi</Link></li>

                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <Link to="/dinhhuong">
                                        <span>Liên hệ</span> <i class="bi bi-chevron-down"></i>
                                    </Link>
                                    <ul>
                                        <li><Link to="/ungtuyen">Ứng tuyển</Link></li>
                                        <li><Link to="/Commingsoon">Hợp tác</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <i onClick={clickMobie} class="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </header>
            </div>
            <nav id="navbar" className="navbarr navbar navbar-mobile">
                <ul>
                    <li>
                        <a class="nav-link scrollto" href="#about">
                            Trang chủ
                        </a>
                    </li>
                    <li class="dropdown">
                        <a onClick={handleClick} href="#about">
                            <span>Về chúng tôi</span> <i class="bi bi-chevron-down"></i>
                        </a>
                        <ul className="chua">
                            <li>
                                <a href="#about">Sứ mệnh</a>
                            </li>
                            <li>
                                <a href="#about">Tầm nhìn</a>
                            </li>
                            <li>
                                <a href="#our-value">Giá trị cốt lõi</a>
                            </li>
                            <li>
                                <a href="#philosophy">Triết lý thương hiệu</a>
                            </li>
                            <li>
                                <a href="#human-resource">Con người</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a onClick={handleClick} href="#">
                            <span>Định hướng</span> <i class="bi bi-chevron-down"></i>
                        </a>
                        <ul>
                            <li>
                            <Link to="/Commingsoon"><a href="#">Công cụ</a></Link>
                            </li>
                            <li>
                                <Link to="/Commingsoon">
                                    <a href="#">Mentor</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a onClick={handleClick} href="#">
                            <span>Đào tạo</span> <i class="bi bi-chevron-down"></i>
                        </a>
                        <ul>
                            <li class="dropdown">
                                <a href="#">
                                    <span>Kỹ năng mềm</span> <i class="bi bi-chevron-right"></i>
                                </a>
                                <ul>
                                    <li>
                                        <Link to="/Commingsoon">
                                            <a href="#">Khóa học</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Commingsoon">
                                            <a href="#">Ebook</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Commingsoon">
                                            <a href="#">Bài viết</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Commingsoon">
                                            <a href="#">Video</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#">
                                    <span>Kỹ năng chuyên môn</span>{" "}
                                    <i class="bi bi-chevron-right"></i>
                                </a>
                                <ul>
                                    <li>
                                        <Link to="/Commingsoon">
                                            <a href="#">Khóa học</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Commingsoon">
                                            <a href="#">Ebook</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Commingsoon">
                                            <a href="#">Bài viết</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Commingsoon">
                                            <a href="#">Video</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Chương trình thực tế</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a onClick={handleClick} href="#">
                            <span>Việc làm</span> <i class="bi bi-chevron-down"></i>
                        </a>
                        <ul>
                            <li class="dropdown">
                                <a onClick={handleClick} href="#">
                                    <span>Ứng viên</span> <i class="bi bi-chevron-right"></i>
                                </a>
                                <ul>
                                    <li>
                                        <Link to="/Commingsoon">
                                        <a href="#">Tìm việc</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Commingsoon">
                                        <a href="#">Tạo CV</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/Commingsoon">
                                <a href="#">Nhà tuyển dụng</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a onClick={handleClick} href="#">
                            <span>Tin tức</span> <i class="bi bi-chevron-down"></i>
                        </a>
                        <ul>
                            <li>
                                <Link to="/Commingsoon">
                                    <a href="#">Học bổng</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Commingsoon">
                                    <a href="#">Sự kiện</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Commingsoon">
                                    <a href="#">Cuộc thi</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a onClick={handleClick} href="#">
                            <span>Liên hệ</span> <i class="bi bi-chevron-down"></i>
                        </a>
                        <ul>
                            <li>
                                <Link to="/ungtuyen">Ứng tuyển</Link>
                            </li>
                            <li>
                                <Link to="/Commingsoon">
                                <a href="#">Hợp tác</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <i onClick={clicMoibieOut} class="bi mobile-nav-toggle bi-x"></i>
            </nav>
        </div>
  );
};
export default Header1;
