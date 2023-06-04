import { select, on } from "./Head"
import { Link } from "react-router-dom"
import React, { useEffect } from 'react';
import './Header.css'
const Header = () => {
    function handleClick(event) {
        event.preventDefault();
        const ul = event.currentTarget.nextElementSibling;
        ul.classList.toggle('dropdown-active');
    }
    function clickMobie(event) {
        event.preventDefault();
        const navb = document.querySelector('.navbarr')
        navb.style.display = 'block'
    }
    function clicMoibieOut(event) {
        event.preventDefault();
        const navb = document.querySelector('.navbarr')
        navb.style.display = 'none'
    }
    useEffect(() => {
        const selectHeader = document.querySelector('#header');
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        document.addEventListener('scroll', headerScrolled)
        return () => {
            document.removeEventListener('scroll', headerScrolled)
        }
    }, []);
    return (
        <div>
            <div id="header_main">
                <header id="header" class="fixed-top d-flex align-items-center  header-transparent ">
                    <div class="container d-flex align-items-center justify-content-between">
                        <div class="logo">
                            <h1>
                                <div class="header_logo"></div>
                            </h1>
                        </div>

                        <nav id="navbar" class="navbar">
                            <ul>
                                {/* <li><Link class="nav-link scrollto active" to='/'>Trang chủ</Link></li> */}
                                <li><Link class="nav-link scrollto " to='/'>Trang chủ</Link></li>
                                <li class="dropdown"><Link to='/'><span>Về chúng tôi</span> <i class="bi bi-chevron-down"></i></Link>
                                    <ul>
                                        <li><a href="#about">Sứ mệnh</a></li>
                                        <li><a href="#about">Tầm nhìn</a></li>
                                        <li><a href="#our-value">Giá trị cốt lõi</a></li>
                                        <li><a href="#philosophy">Triết lý thương hiệu</a></li>
                                        <li><a href="#human-resource">Con người</a></li>
                                    </ul>
                                </li>
                                {/* <li class="dropdown"><a href="#"><span>Định hướng</span> <i class="bi bi-chevron-down"></i></a> */}
                                <li class="dropdown"><Link to='/dinhhuong'><span>Định hướng</span> <i class="bi bi-chevron-down"></i></Link>
                                    <ul>
                                        <li><a href="#">Công cụ</a></li>
                                        <li><a href="#">Mentor</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><Link to='/dinhhuong'><span>Đào tạo</span> <i class="bi bi-chevron-down"></i></Link>
                                    <ul>
                                        <li class="dropdown"><a href="#"><span>Định hướng sự nghiệp</span> <i
                                            class="bi bi-chevron-right"></i></a>
                                            <ul>
                                                <li><a href="#">Khóa học</a></li>
                                                <li><a href="#">Ebook</a></li>
                                                <li><a href="#">Bài viết</a></li>
                                                <li><a href="#">Video</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><a href="#"><span>Kỹ năng mềm</span> <i class="bi bi-chevron-right"></i></a>
                                            <ul>
                                                <li><a href="#">Khóa học</a></li>
                                                <li><a href="#">Ebook</a></li>
                                                <li><a href="#">Bài viết</a></li>
                                                <li><a href="#">Video</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><a href="#"><span>Kỹ năng chuyên môn</span> <i
                                            class="bi bi-chevron-right"></i></a>
                                            <ul>
                                                <li><a href="#">Khóa học</a></li>
                                                <li><a href="#">Ebook</a></li>
                                                <li><a href="#">Bài viết</a></li>
                                                <li><a href="#">Video</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Chương trình thực tế</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><Link to='/dinhhuong'><span>Việc làm</span> <i class="bi bi-chevron-down"></i></Link>
                                    <ul>
                                        <li class="dropdown"><a href="#"><span>Ứng viên</span> <i class="bi bi-chevron-right"></i></a>
                                            <ul>
                                                <li><a href="#">Tìm việc</a></li>
                                                <li><a href="#">Tạo CV</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Nhà tuyển dụng</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><Link to='/dinhhuong'><span>Tin tức</span> <i class="bi bi-chevron-down"></i></Link>
                                    <ul>
                                        <li><a href="#">Học bổng</a></li>
                                        <li><a href="#">Sự kiện</a></li>
                                        <li><a href="#">Cuộc thi</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><Link to='/dinhhuong'><span>Liên hệ</span> <i class="bi bi-chevron-down"></i></Link>
                                    <ul>
                                        <li><a href="#">Ứng tuyển</a></li>
                                        <li><a href="#">Hợp tác</a></li>
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
                    <li><a class="nav-link scrollto" href="#about">Trang chủ</a></li>
                    <li class="dropdown"><a onClick={handleClick} href="#about"><span>Về chúng tôi</span> <i class="bi bi-chevron-down"></i></a>
                        <ul className="chua">
                            <li><a href="#about">Sứ mệnh</a></li>
                            <li><a href="#about">Tầm nhìn</a></li>
                            <li><a href="#our-value">Giá trị cốt lõi</a></li>
                            <li><a href="#philosophy">Triết lý thương hiệu</a></li>
                            <li><a href="#human-resource">Con người</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a onClick={handleClick} href="#"><span>Định hướng</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="#">Công cụ</a></li>
                            <li><a href="#">Mentor</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a onClick={handleClick} href="#"><span>Đào tạo</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li class="dropdown"><a href="#"><span>Định hướng sự nghiệp</span> <i
                                class="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Khóa học</a></li>
                                    <li><a href="#">Ebook</a></li>
                                    <li><a href="#">Bài viết</a></li>
                                    <li><a href="#">Video</a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#"><span>Kỹ năng mềm</span> <i class="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Khóa học</a></li>
                                    <li><a href="#">Ebook</a></li>
                                    <li><a href="#">Bài viết</a></li>
                                    <li><a href="#">Video</a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#"><span>Kỹ năng chuyên môn</span> <i
                                class="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Khóa học</a></li>
                                    <li><a href="#">Ebook</a></li>
                                    <li><a href="#">Bài viết</a></li>
                                    <li><a href="#">Video</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Chương trình thực tế</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a onClick={handleClick} href="#"><span>Việc làm</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li class="dropdown"><a onClick={handleClick} href="#"><span>Ứng viên</span> <i class="bi bi-chevron-right"></i></a>
                                <ul>
                                    <li><a href="#">Tìm việc</a></li>
                                    <li><a href="#">Tạo CV</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Nhà tuyển dụng</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a onClick={handleClick} href="#"><span>Tin tức</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="#">Học bổng</a></li>
                            <li><a href="#">Sự kiện</a></li>
                            <li><a href="#">Cuộc thi</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a onClick={handleClick} href="#"><span>Liên hệ</span> <i class="bi bi-chevron-down"></i></a>
                        <ul>
                            <li><a href="#">Ứng tuyển</a></li>
                            <li><a href="#">Hợp tác</a></li>
                        </ul>
                    </li>
                </ul>
                <i onClick={clicMoibieOut} class="bi mobile-nav-toggle bi-x"></i>
            </nav>
        </div>
    )
}
export default Header