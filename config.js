/**
 * FILE CẤU HÌNH WEBSITE - PHÒNG KHÁM NHA KHOA BÁC SĨ THIÊN LÝ
 * Bác sĩ có thể chỉnh sửa các thông tin dưới đây để website tự động cập nhật.
 * Lưu ý: Giữ nguyên cấu trúc dấu ngoặc và dấu phẩy để tránh lỗi hiển thị.
 */

const CLINIC_CONFIG = {
  // --- THÔNG TIN CHUNG ---
  doctorName: "ThS. BS. Thiên Lý",
  doctorTitle: "Thạc sĩ - Bác sĩ Chuyên khoa Răng Hàm Mặt",
  clinicName: "Phòng khám Nha khoa Trẻ em & Răng Hàm Mặt",
  hospital: "Bác Sĩ Khoa Răng trẻ em - Bệnh viện Răng Hàm Mặt Trung Ương",
  tagline: "Chuyên khoa răng trẻ em — an toàn, nhẹ nhàng, thấu hiểu trẻ.",
  logoText: "Nha Khoa Thiên Lý",
  
  // --- THÔNG TIN LIÊN HỆ ---
  phone: "0766.123.118",
  phoneFormatted: "0766 123 118",
  zaloLink: "https://zalo.me/0766123118",
  facebookPage: "https://www.facebook.com/profile.php?id=61569876384395",
  messengerLink: "https://www.facebook.com/profile.php?id=61569876384395",
  email: "bs.thienly.rhm@gmail.com",
  address: "Số 2, Nhân Hoà, Thanh Xuân, Hà Nội",
  googleMapsEmbed: "https://maps.google.com/maps?q=Nha+khoa+Thi%C3%AAn+L%C3%BD,+2+P.+Nh%C3%A2n+H%C3%B2a,+Thanh+Xu%C3%A2n,+H%C3%A0+N%E1%BB%99i&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // --- GIỚI THIỆU BÁC SĨ ---
  experienceYears: "Hơn 10 năm",
  experienceDetail: "Đã chăm sóc và điều trị thành công nụ cười cho hơn 10.000+ trẻ em và người lớn.",
  aboutIntro: "Tôi là Bác sĩ Thiên Lý, hiện đang công tác tại Khoa Răng trẻ em thuộc Bệnh viện Răng Hàm Mặt Trung Ương. Với tình yêu thương đặc biệt dành cho trẻ thơ và sự thấu hiểu tâm lý trẻ nhỏ, tôi luôn mong muốn mang đến những trải nghiệm chăm sóc răng miệng nhẹ nhàng, không đau đớn, giúp các bé xóa bỏ nỗi sợ hãi khi đi khám nha khoa.",
  aboutCertificates: [
    "Nền tảng đào tạo chuyên sâu và chuẩn quốc tế: chứng chỉ chỉnh nha POS (Mỹ), Invisalign, chỉnh hình RHM-Đại học Y Hà Nội.",
    "Làm chủ đa dạng kỹ thuật chỉnh nha hiện đại: chứng chỉ khí cụ chỉnh nha sớm, khí cụ MEAW-GEAW-ToGO.",
    "Chuyên sâu kiểm soát khớp cắn và sinh học: chứng chỉ chỉnh nha sinh học, khớp thái dương hàm"
  ],

  // --- CHỈ SỐ THỐNG KÊ NỔI BẬT ---
  stats: [
    { number: "10+", label: "Năm kinh nghiệm chuyên sâu" },
    { number: "10k+", label: "Nụ cười trẻ thơ được chăm sóc" },
    { number: "99%", label: "Mức độ hài lòng của phụ huynh" },
    { number: "100%", label: "Tận tâm & Nhẹ nhàng" }
  ],

  // --- DỊCH VỤ NỔI BẬT ---
  services: [
    {
      id: "kham-dinh-ky",
      title: "Khám Răng Định Kỳ & Ngừa Sâu Răng",
      desc: "Kiểm tra răng miệng toàn diện cho bé, bôi Vecni Fluoride phòng ngừa sâu răng chuẩn quốc tế, hướng dẫn bé chải răng đúng cách tại nhà.",
      icon: "shield-check",
      badge: "Phổ biến"
    },
    {
      id: "nho-rang-sua",
      title: "Nhổ Răng Sữa Không Đau",
      desc: "Nhổ răng sữa đúng thời điểm mọc răng vĩnh viễn bằng kỹ thuật bôi tê đặc biệt siêu êm ái, giúp trẻ hoàn toàn thoải mái, không sợ sệt.",
      icon: "smile",
      badge: "Không đau"
    },
    {
      id: "tram-rang-sau",
      title: "Trám Răng Sâu Sinh Học",
      desc: "Điều trị và phục hồi răng sâu bằng chất liệu trám Composite/GIC sinh học cao cấp, lành tính, độ bền cao, bảo vệ tối đa ngà răng của bé.",
      icon: "sparkles",
      badge: "Thẩm mỹ"
    },
    {
      id: "nieng-rang-som",
      title: "Chỉnh Nha Tăng Trưởng Sớm",
      desc: "Can thiệp niềng răng sớm (giai đoạn vàng 6-12 tuổi) cho bé hô, móm, lệch lạc bằng các khí cụ tháo lắp hoặc cố định, giúp xương hàm phát triển hài hòa.",
      icon: "activity",
      badge: "Giai đoạn vàng"
    },
    {
      id: "dieu-tri-tuy",
      title: "Điều Trị Tủy Răng Sữa Bảo Tồn",
      desc: "Kỹ thuật lấy tủy buồng/tủy toàn phần răng sữa bị sâu nặng giúp giảm đau tức thì cho bé, giữ khoảng để răng vĩnh viễn sau này mọc thẳng hàng.",
      icon: "heart-pulse",
      badge: "Bảo tồn tối đa"
    },
    {
      id: "nha-khoa-nguoi-lon",
      title: "Nha Khoa Tổng Quát & Thẩm Mỹ",
      desc: "Khám, lấy cao răng, trám răng thẩm mỹ, tẩy trắng răng và phục hình răng sứ cao cấp dành cho bố mẹ và người lớn có nhu cầu chăm sóc chuyên sâu.",
      icon: "users",
      badge: "Gia đình"
    }
  ],

  // --- TRANG THIẾT BỊ PHÒNG KHÁM ---
  equipment: [
    {
      id: "itero-5d",
      name: "iTero 5D Laptop",
      desc: "Máy scan quang học 3D trong miệng thế hệ mới nhất, cho phép chụp dấu răng kỹ thuật số chính xác tuyệt đối, loại bỏ hoàn toàn vật liệu lấy dấu truyền thống. Hỗ trợ chẩn đoán sâu răng sớm và lập kế hoạch điều trị trực quan cho phụ huynh.",
      features: [
        "Scan 3D toàn hàm trong vòng vài phút",
        "Phát hiện sâu răng sớm bằng công nghệ NIRI",
        "Mô phỏng kết quả điều trị trực quan ngay tức thì",
        "Không cần vật liệu lấy dấu truyền thống"
      ],
      image: "assets/itero-5d.jpg",
      badge: "Scan 3D thế hệ mới"
    },
    {
      id: "d-laser-blue",
      name: "Laser Nha Khoa D-Laser Blue",
      desc: "Thiết bị laser nha khoa công nghệ cao ứng dụng trong nhiều thủ thuật điều trị, mang lại hiệu quả vượt trội so với phương pháp truyền thống, giảm thiểu đau đớn và rút ngắn thời gian hồi phục.",
      features: [
        "Cắt và tạo hình mô mềm nướu chính xác, không chảy máu",
        "Cầm máu tức thì trong các thủ thuật nha khoa",
        "Khử khuẩn sâu trong ống tủy và túi nha chu",
        "Giảm đau, giảm viêm sau điều trị hiệu quả"
      ],
      image: "assets/d-laser-blue.jpg",
      badge: "Công nghệ Laser"
    },
    {
      id: "woodpecker-apb",
      name: "Woodpecker AP-B",
      desc: "Hệ thống lấy cao răng & làm sạch Airflow tích hợp hiện đại, loại bỏ triệt để cao răng, mảng bám và vết ố màu tại cả vùng trên và dưới nướu, giúp răng sạch bóng và hơi thở thơm mát.",
      features: [
        "Lấy cao răng siêu âm tần số cao, không đau",
        "Airflow làm sạch mảng bám và vết ố màu bằng bột",
        "Làm sạch vùng dưới nướu an toàn, triệt để",
        "Làm sạch quanh implant và các vùng khó tiếp cận",
        "Đánh bóng và làm trắng bề mặt răng",
        "Hỗ trợ điều trị và chăm sóc nha chu chuyên sâu"
      ],
      image: "assets/woodpecker-apb.jpg",
      badge: "Lấy cao & Airflow"
    },
    {
      id: "piezotome-us3",
      name: "Máy Siêu Âm PIEZOTOME US-III",
      desc: "Máy phẫu thuật siêu âm áp điện thế hệ mới, ứng dụng trong nhổ răng khó, phẫu thuật xương hàm và điều trị nha chu. Công nghệ rung siêu âm chọn lọc chỉ tác động lên mô cứng, bảo vệ hoàn toàn mô mềm xung quanh.",
      features: [
        "Nhổ răng siêu âm: êm ái, ít chấn thương mô mềm",
        "Cắt xương và phẫu thuật xương hàm chính xác",
        "Hệ thống làm mát liên tục bằng dung dịch vô trùng",
        "Kiểm soát lực rung thông minh, an toàn tuyệt đối"
      ],
      image: "assets/piezotome-us3.jpg",
      badge: "Phẫu thuật siêu âm"
    }
  ],

  // --- LỊCH LÀM VIỆC ---
  workingHours: [
    { day: "Thứ Hai - Thứ Sáu", time: "17:00 - 20:30", note: "Khám ngoài giờ hành chính" },
    { day: "Thứ Bảy - Chủ Nhật", time: "08:00 - 18:30", note: "Khám cả ngày" },
    { day: "Ngày lễ & Tết", time: "Nghỉ làm việc", note: "Có bác sĩ trực cấp cứu" }
  ],

  // --- Ý KIẾN PHỤ HUYNH (TESTIMONIALS) ---
  testimonials: [
    {
      name: "Chị Minh Anh (Hà Nội)",
      relationship: "Mẹ bé Gia Bảo (6 tuổi)",
      text: "Bé nhà mình cực kỳ sợ nha sĩ, trước đi phòng khám khác khóc thét không chịu há miệng. Nhưng khi đến gặp cô Lý thì ngoan ngoãn lạ thường. Cô Lý dỗ dành rất ngọt, nhổ răng sữa nhanh đến mức con chưa kịp khóc đã xong rồi!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Anh Hoàng Nam (Hà Nội)",
      relationship: "Bố bé Minh Khuê (9 tuổi)",
      text: "Con gái mình bị móm nhẹ, được bác sĩ Lý tư vấn đeo hàm chỉnh nha tăng trưởng tháo lắp từ lúc 8 tuổi. Đến nay răng con đã cải thiện rõ rệt, mặt thanh thoát hơn rất nhiều. Rất biết ơn sự tận tình theo sát của bác sĩ.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      name: "Chị Thùy Dung (Hà Nội)",
      relationship: "Mẹ bé Bắp (4 tuổi)",
      text: "Phòng khám sạch sẽ, thiết bị hiện đại và đặc biệt bác sĩ cực kỳ tâm lý. Bé nhà mình trám răng sâu ở đây về cứ đòi đi gặp cô Lý tiếp. Bác sĩ làm việc tại Viện Răng Hàm Mặt Trung Ương nên mình rất yên tâm về chuyên môn.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
    }
  ]
};

// Đảm bảo dữ liệu khả dụng cho cả việc nhúng trong HTML qua script và import (nếu cần)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLINIC_CONFIG;
}
