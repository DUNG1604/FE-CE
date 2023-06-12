import './UngTuyen.css'
import React, { useState } from "react";
import $ from 'jquery'
const UngTuyen = () => {
    const [hovaten, setHovaten] = useState("")
    const [email, setEmail] = useState("")
    const [sdt, setSdt] = useState("")
    const [school, setSchool] = useState("")
    const [course, setCourse] = useState("")
    const [linkfb, setLinkfb] = useState("")
    const [ungtuyen, setUngtuyen] = useState("")

    function onChangeHovaten(e) {
        setHovaten(e.target.value)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function onChangeSdt(e) {
        setSdt(e.target.value)
    }
    function onChangeSchool(e) {
        setSchool(e.target.value)
    }
    function onChangeCourse(e) {
        setCourse(e.target.value)
    }
    function onChangeLinkfb(e) {
        setLinkfb(e.target.value)
    }
    function onChangeUngtuyen(e) {
        setUngtuyen(e.target.value)
    }
    function handleLogin(e) {
        e.preventDefault()
        const newUse = {
            hovaten: hovaten,
            email: email,
            sdt: sdt,
            school: school,
            course: course,
            linkfb: linkfb,
            ungtuyen: ungtuyen
        }
        var url = 'https://script.google.com/macros/s/AKfycbxqb7x0p0Y9pZk9-eP9tfwavnT0OdO6ETOOI1kPBOfAvZ-vDVx2yT65rHfEtf22bq-g/exec';

        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: newUse
        });
        console.log(newUse)
        alert("Gửi thành công !")
        setCourse("")
        setEmail("")
        setHovaten("")
        setLinkfb("")
        setSchool("")
        setSdt("")
        setUngtuyen("")

    }
    return (
        <div className='UngTuyen'>
            <form onSubmit={(e) => handleLogin(e)} action="">
                <div className="Use-Hoten">
                    <label htmlFor="">Họ và tên</label>
                    <input
                        name="hovaten"
                        placeholder="hovaten"
                        type="text"
                        id="hovaten"
                        className="form-control"
                        required
                        value={hovaten}
                        onChange={(e) => onChangeHovaten(e)}
                    />
                </div>
                <div className="Use-Email">
                    <label htmlFor="">Email</label>
                    <input
                        name="email"
                        placeholder="email"
                        type="text"
                        id="email"
                        className="form-control"
                        required
                        value={email}
                        onChange={(e) => onChangeEmail(e)}
                    />
                </div>
                <div className="Use-Phone">
                    <label htmlFor="">SĐT</label>
                    <input
                        name="sdt"
                        placeholder="sdt"
                        type="text"
                        id="sdt"
                        className="form-control"
                        required
                        value={sdt}
                        onChange={(e) => onChangeSdt(e)}
                    />
                </div>
                <div className="Use-School">
                    <label htmlFor="">Ngành-Trường</label>
                    <input
                        name="school"
                        placeholder="school"
                        type="text"
                        id="school"
                        className="form-control"
                        required
                        value={school}
                        onChange={(e) => onChangeSchool(e)}
                    />
                </div>
                <div className="Use-Course">
                    <label htmlFor="">Khóa</label>
                    <input
                        name="course"
                        placeholder="course"
                        type="text"
                        id="course"
                        className="form-control"
                        required
                        value={course}
                        onChange={(e) => onChangeCourse(e)}
                    />
                </div>
                <div className="Use-Linkfb">
                    <label htmlFor="">Link Facebook</label>
                    <input
                        name="Linkfb"
                        placeholder="Linkfb"
                        type="text"
                        id="Linkfb"
                        className="form-control"
                        required
                        value={linkfb}
                        onChange={(e) => onChangeLinkfb(e)}
                    />
                </div>
                <div className="Use-Ungtuyen">
                    <label htmlFor="">Vị trí ứng tuyển</label>
                    <select name="Ungtuyen" id="lang-select" value={ungtuyen} onChange={(e) => onChangeUngtuyen(e)}>
                        <option value="">---</option>
                        <option value="Nghiên cứu và phát triển sản phẩm">Nghiên cứu và phát triển sản phẩm</option>
                        <option value="Designer">Designer</option>
                        <option value="Quay dựng video tiktok">Quay dựng video tiktok</option>
                        <option value="Editor video tiktok">Editor video tiktok</option>
                        <option value="Lập trình web (Có kinh nghiệm)">Lập trình web (Có kinh nghiệm)</option>
                        <option value="Leader truyền thông (Có kinh nghiệm)">Leader truyền thông (Có kinh nghiệm)</option>
                        <option value="Content Marketing">Content Marketing</option>
                        <option value="Leader Content Tiktok (Có kinh nghiệm)">Leader Content Tiktok (Có kinh nghiệm)</option>
                        <option value="Content Tiktok">Content Tiktok</option>
                        <option value="Event">Event</option>
                        <option value="KOLs nhân sự">KOLs nhân sự</option>
                        <option value="Employer Brading">Employer Brading</option>
                        <option value="Truyền thông nội bộ">Truyền thông nội bộ</option>
                    </select>
                </div>
                <button type="submit" className="btn_submit">
                    Gửi
                </button>
            </form>
        </div>
    )
}

export default UngTuyen