import "./UngTuyen2.css";
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
<section id="ungtuyen" className="ungtuyen">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Gia nhập</h2>
      <p>Dự án "Mùa hè không hối tiếc" & CareerEmpower</p>
      {/* <h3>Dự án “Mùa hè không hối tiếc” là dự án dành riêng cho các bạn sinh viên trường Đại học Kinh tế Quốc dân do CareerEmpower tổ chức, nhằm giúp bạn khám phá năng lực cũng như định vị bản thân trong thị trường lao động hiện nay. </h3> */}
    </div>
    <div className="Ungtuyen-body">
    <div className="row gx-lg-0 gy-4">
      <div className="col-lg-6">
        <div className="info-container d-flex flex-column">
            <div className="content">
              <p className="sub-title">
              Dự án “Mùa hè không hối tiếc” là dự án dành riêng cho các bạn sinh viên trường Đại học Kinh tế Quốc dân do CareerEmpower tổ chức, nhằm giúp bạn khám phá năng lực cũng như định vị bản thân trong thị trường lao động hiện nay.
              Khi tham gia CareerEmpower, bạn còn nhận được những lợi ích sau:
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i>
                  Được định hướng chuyên môn và đào tạo kỹ năng mềm qua các khóa
                  học được thiết kế cá nhân hóa theo nhu cầu của bạn.{" "}
                </li>
                <li><i class="ri-check-double-line"></i>
                  Tạo dựng thương hiệu cùng với các bạn sinh viên NEU trên các
                  kênh truyền thông xã hội có hơn 100k thành viên của
                  CareerEmpower.
                </li>
                <li><i class="ri-check-double-line"></i>
                  Được cấp chứng nhận khi tham gia và hoàn thành các dự án thực
                  tế của CareerEmpower cùng mạng lưới các nhà tuyển dụng, doanh
                  nghiệp hàng đầu trong nhiều lĩnh vực như FPT, VNG, Vinhomes…
                </li>
                <li><i class="ri-check-double-line"></i>
                  Được mở rộng mạng lưới quan hệ với các nhà tuyển dụng và
                  chuyên gia hàng đầu trong các lĩnh vực như FPT, VNG, Vinhomes…
                </li>
                <li><i class="ri-check-double-line"></i>
                  Được tư vấn định hướng sự nghiệp chính xác và khoa học qua các
                  công cụ DISC và Sinh trắc vân tay và các buổi talkshow chia sẻ
                  kinh nghiệm.
                </li>
                <li><i class="ri-check-double-line"></i>
                  Thực tập làm việc trong môi trong chuyên nghiệp, năng động,
                  sáng tạo đa dạng về nhiều lĩnh vực.
                </li>
              </ul>
              <div className="btn-details">
              <a href="https://drive.google.com/drive/folders/1mKu0yp6oYAr0uocKpHlmBGHm4ukTpa96" target="_blank" rel="noopener noreferrer" className="button form-group mt-1 "><button type="details">CHI TIẾT CÁC VỊ TRÍ ỨNG TUYỂN</button></a>
              </div>

            </div>
        </div>
      </div>
      <div className="col-lg-6">
        
        <form onSubmit={(e) => handleLogin(e)} action="" className="ungtuyen-form text-center">
         <h2>THÔNG TIN ỨNG TUYỂN</h2>

          <div className="row form-group mt-4">
            <div class="col-md-6 form-group">
                <div className="Use-Hoten">
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
            <div className="col-md-6 form-group mt-4 mt-md-0">  
              <div className="Use-Email">
                          {/* <label htmlFor="">Email</label> */}
                          <input
                            name="email"
                            placeholder="Email"
                            type="email"
                            id="email"
                            className="form-control pd-10-14"
                            required
                            value={email}
                            onChange={(e) => onChangeEmail(e)}
                          />
                </div>
              </div>
          </div>

          <div className="row form-group mt-4">
            <div class="col-md-6 form-group">
                <div className="Use-Phone">
                    {/* <label htmlFor="">SĐT</label> */}
                    <input
                      name="sdt"
                      placeholder="Số điện thoại"
                      type="number"
                      id="sdt"
                      className="form-control pd-10-14"
                      required
                      value={sdt}
                      onChange={(e) => onChangeSdt(e)}
                    />
                  </div>
                </div>
            <div className="col-md-6 form-group mt-4 mt-md-0">  
              <div className="Use-School">
                  {/* <label htmlFor="">Ngành-Trường</label> */}
                  <input
                    name="school"
                    placeholder="Ngành - Trường"
                    type="text"
                    id="school"
                    className="form-control pd-10-14"
                    required
                    value={school}
                    onChange={(e) => onChangeSchool(e)}
                  />
                </div>
              </div>
          </div>
          <div className="row form-group mt-4">
            <div class="col-md-6 form-group">
              <div className="Use-Course">
                  {/* <label htmlFor="">Khóa</label> */}
                  <input
                    name="course"
                    placeholder="Khóa"
                    type="text"
                    id="course"
                    className="form-control pd-10-14"
                    required
                    value={course}
                    onChange={(e) => onChangeCourse(e)}
                  />
              </div>
            </div>
            <div className="col-md-6 form-group mt-4 mt-md-0">  
              <div className="Use-Linkfb">
                {/* <label htmlFor="">Link Facebook</label> */}
                <input
                  name="Linkfb"
                  placeholder="Link Facebook"
                  type="text"
                  id="Linkfb"
                  className="form-control pd-10-14"
                  required
                  value={linkfb}
                  onChange={(e) => onChangeLinkfb(e)}
                />
              </div>
            </div>
              
          </div>
          
          <div className="form-group mt-4">
          <div className="Use-Ungtuyen">
            <select className="form-select mt-4" name="Ungtuyen" id="lang-select" value={ungtuyen}
                    onChange={(e) => onChangeUngtuyen(e)}>
                <option hidden disabled selected value="">
                  Vị trí làm việc
                </option>
                <option value="Nghiên cứu và phát triển sản phẩm">
                  Nghiên cứu và phát triển sản phẩm
                </option>
                <option value="Designer">Designer</option>
                <option value="Quay dựng video tiktok">
                  Quay dựng video tiktok
                </option>
                <option value="Editor video tiktok">
                  Editor video tiktok
                </option>
                <option value="Lập trình web (Có kinh nghiệm)">
                  Lập trình web (Có kinh nghiệm)
                </option>
                <option value="Leader truyền thông (Có kinh nghiệm)">
                  Leader truyền thông (Có kinh nghiệm)
                </option>
                <option value="Content Marketing">
                  Content Marketing
                </option>
                <option value="Leader Content Tiktok (Có kinh nghiệm)">
                  Leader Content Tiktok (Có kinh nghiệm)
                </option>
                <option value="Content Tiktok">Content Tiktok</option>
                <option value="Event">Event</option>
                <option value="KOLs nhân sự">KOLs nhân sự</option>
                <option value="Employer Brading">
                  Employer Brading
                </option>
                <option value="Truyền thông nội bộ">
                  Truyền thông nội bộ
                </option>
              </select>
            </div>
          </div>
          <div className="form-group mt-4">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Link tải CV của bạn" required />
          </div>
          <div className="form-group mt-4">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Link portfolio của bạn"/>
          </div>


          <div className="button form-group mt-5 "><button type="submit">GỬI THÔNG TIN ỨNG TUYỂN</button></div>
        </form>
      </div>
    </div>
    </div>
  </div>
</section>

    );
};

export default UngTuyen;
