import "./UngTuyen.css";
import React, { useState } from "react";
import $ from "jquery";
const UngTuyen = () => {
    const [hovaten, setHovaten] = useState("");
    const [email, setEmail] = useState("");
    const [sdt, setSdt] = useState("");
    const [school, setSchool] = useState("");
    const [course, setCourse] = useState("");
    const [linkfb, setLinkfb] = useState("");
    const [ungtuyen, setUngtuyen] = useState("");

    function onChangeHovaten(e) {
        setHovaten(e.target.value);
    }
    function onChangeEmail(e) {
        setEmail(e.target.value);
    }
    function onChangeSdt(e) {
        setSdt(e.target.value);
    }
    function onChangeSchool(e) {
        setSchool(e.target.value);
    }
    function onChangeCourse(e) {
        setCourse(e.target.value);
    }
    function onChangeLinkfb(e) {
        setLinkfb(e.target.value);
    }
    function onChangeUngtuyen(e) {
        setUngtuyen(e.target.value);
    }
    function handleLogin(e) {
        e.preventDefault();
        const newUse = {
            hovaten: hovaten,
            email: email,
            sdt: sdt,
            school: school,
            course: course,
            linkfb: linkfb,
            ungtuyen: ungtuyen,
        };
        var url =
            "https://script.google.com/macros/s/AKfycbxqb7x0p0Y9pZk9-eP9tfwavnT0OdO6ETOOI1kPBOfAvZ-vDVx2yT65rHfEtf22bq-g/exec";

        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: newUse,
        });
        console.log(newUse);
        alert("Gửi thành công !");
        setCourse("");
        setEmail("");
        setHovaten("");
        setLinkfb("");
        setSchool("");
        setSdt("");
        setUngtuyen("");
    }
    return (
        <main id="main">
            <section id="ungtuyen" class="ungtuyen">
                <div class="container">
                    <div class="row mt-5 row-content">
                        <div class="col-lg-6">
                            <div className="title">
                                <p className="sub-title">Gia nhập</p>
                                <h1>Dự án "Mùa hè không hối tiếc" & CareerEmpower</h1>
                            </div>
                            <div className="content">
                                <p className="sub-title">
                                    Khi tham gia CareerEmpower, bạn còn nhận được những lợi ích
                                    sau:
                                </p>
                                <ul>
                                    <li>
                                        Được định hướng chuyên môn và đào tạo kỹ năng mềm qua các
                                        khóa học được thiết kế cá nhân hóa theo nhu cầu của bạn.{" "}
                                    </li>
                                    <li>
                                        Tạo dựng thương hiệu cùng với các bạn sinh viên NEU trên các
                                        kênh truyền thông xã hội có hơn 100k thành viên của
                                        CareerEmpower.
                                    </li>
                                    <li>
                                        Được cấp chứng nhận khi tham gia và hoàn thành các dự án
                                        thực tế của CareerEmpower cùng mạng lưới các nhà tuyển dụng,
                                        doanh nghiệp hàng đầu trong nhiều lĩnh vực như FPT, VNG,
                                        Vinhomes…
                                    </li>
                                    <li>
                                        Được mở rộng mạng lưới quan hệ với các nhà tuyển dụng và
                                        chuyên gia hàng đầu trong các lĩnh vực như FPT, VNG,
                                        Vinhomes…
                                    </li>
                                    <li>
                                        Được tư vấn định hướng sự nghiệp chính xác và khoa học qua
                                        các công cụ DISC và Sinh trắc vân tay và các buổi talkshow
                                        chia sẻ kinh nghiệm.
                                    </li>
                                    <li>
                                        Thực tập làm việc trong môi trong chuyên nghiệp, năng động,
                                        sáng tạo đa dạng về nhiều lĩnh vực.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div className="UngTuyen">
                                <h2>Gửi Thông tin ứng tuyển</h2>
                                <form onSubmit={(e) => handleLogin(e)} action="">
                                    <div class="row gy-2 gx-md-3 row-form">
                                        <div class="col-md-6 form-group">
                                            <div className="Use-Hoten">
                                                {/* <label htmlFor="">Họ và tên</label> */}
                                                <input
                                                    name="hovaten"
                                                    placeholder="Họ và Tên"
                                                    type="text"
                                                    id="hovaten"
                                                    className="form-control pd-10-14"
                                                    required
                                                    value={hovaten}
                                                    onChange={(e) => onChangeHovaten(e)}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div className="Use-Email">
                                                {/* <label htmlFor="">Email</label> */}
                                                <input
                                                    name="email"
                                                    placeholder="Địa chỉ Email"
                                                    type="text"
                                                    id="email"
                                                    className="form-control pd-10-14"
                                                    required
                                                    value={email}
                                                    onChange={(e) => onChangeEmail(e)}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div className="Use-Phone">
                                                {/* <label htmlFor="">SĐT</label> */}
                                                <input
                                                    name="sdt"
                                                    placeholder="Số điện thoại"
                                                    type="text"
                                                    id="sdt"
                                                    className="form-control pd-10-14"
                                                    required
                                                    value={sdt}
                                                    onChange={(e) => onChangeSdt(e)}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div className="Use-School">
                                                {/* <label htmlFor="">Ngành-Trường</label> */}
                                                <input
                                                    name="school"
                                                    placeholder="school"
                                                    type="text"
                                                    id="school"
                                                    className="form-control pd-10-14"
                                                    required
                                                    value={school}
                                                    onChange={(e) => onChangeSchool(e)}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div className="Use-Course">
                                                {/* <label htmlFor="">Khóa</label> */}
                                                <input
                                                    name="course"
                                                    placeholder="course"
                                                    type="text"
                                                    id="course"
                                                    className="form-control pd-10-14"
                                                    required
                                                    value={course}
                                                    onChange={(e) => onChangeCourse(e)}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div className="Use-Linkfb">
                                                {/* <label htmlFor="">Link Facebook</label> */}
                                                <input
                                                    name="Linkfb"
                                                    placeholder="Facebook"
                                                    type="text"
                                                    id="Linkfb"
                                                    className="form-control pd-10-14"
                                                    required
                                                    value={linkfb}
                                                    onChange={(e) => onChangeLinkfb(e)}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group col-12">
                                            <div className="Use-Ungtuyen">
                                                <select
                                                    name="Ungtuyen"
                                                    id="lang-select"
                                                    value={ungtuyen}
                                                    onChange={(e) => onChangeUngtuyen(e)}
                                                >
                                                    <option hidden disabled selected value="">
                                                        Vị Trí làm việc
                                                    </option>
                                                    <option value="Research and Development">
                                                        Research and Development
                                                    </option>
                                                    <option value="Designer">Designer</option>
                                                    <option value="Editor">Editor</option>
                                                    <option value="Lập trình web">Web Deverloper</option>
                                                    <option value="Communication Team Leader">
                                                        Communication Team Leader
                                                    </option>
                                                    <option value="Social Content">Social Content</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Content Tiktok Leader">
                                                        TikTok Content Team Leader
                                                    </option>
                                                    <option value="Tiktok Content Creator">
                                                        Tiktok Content Creator
                                                    </option>
                                                    <option value="Event">Event</option>
                                                    <option value="KOLs nhân sự">KOLs HR</option>
                                                    <option value="Internal Communication">
                                                        Internal Communication
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 fl">
                                            <button type="submit" className="btn_submit">
                                                Gửi
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default UngTuyen;
