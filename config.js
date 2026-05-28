/**
 * FILE CẤU HÌNH WEBSITE - PHÒNG KHÁM NHA KHOA BÁC SĨ THIÊN LÝ
 * Bác sĩ có thể chỉnh sửa các thông tin dưới đây để website tự động cập nhật.
 * Lưu ý: Giữ nguyên cấu trúc dấu ngoặc và dấu phẩy để tránh lỗi hiển thị.
 */

const CLINIC_CONFIG = {
  // --- THÔNG TIN CHUNG ---
  doctorName: "BS. Thiên Lý",
  doctorTitle: "Bác sĩ Chuyên khoa Răng Hàm Mặt",
  clinicName: "Phòng khám Nha khoa Trẻ em & Răng Hàm Mặt",
  hospital: "Khoa Răng trẻ em - Bệnh viện Răng Hàm Mặt Trung Ương",
  tagline: "Nụ cười rạng rỡ, Tương lai rạng ngời - Chuyên gia Răng Trẻ em tận tâm đồng hành cùng con.",
  logoText: "BS. Thiên Lý",
  
  // --- THÔNG TIN LIÊN HỆ ---
  phone: "0766.123.118",
  phoneFormatted: "0766 123 118",
  zaloLink: "https://zalo.me/0766123118",
  facebookPage: "https://www.facebook.com/bac.si.thien.ly",
  messengerLink: "https://m.me/bac.si.thien.ly",
  email: "bs.thienly.rhm@gmail.com",
  address: "Phòng khám BS. Thiên Lý, Khu đô thị mới, Quận Hoàn Kiếm, Hà Nội",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.09681414457!2d105.84920627588147!3d21.028825080620606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab953357c995%3A0x2f46afeb8c4749f!2zQuG7h25oIHZp4buHbiBSxINuZyBIw6BtIE3hurd0IFRydW5nIMawxqFuZw!5e0!3m2!1svi!2svn!4v1716912345678!5m2!1svi!2svn",

  // --- GIỚI THIỆU BÁC SĨ ---
  experienceYears: "Hơn 15 năm",
  experienceDetail: "Đã chăm sóc và điều trị thành công nụ cười cho hơn 10.000+ trẻ em và người lớn.",
  aboutIntro: "Tôi là Bác sĩ Thiên Lý, hiện đang công tác tại Khoa Răng trẻ em thuộc Bệnh viện Răng Hàm Mặt Trung Ương. Với tình yêu thương đặc biệt dành cho trẻ thơ và sự thấu hiểu tâm lý trẻ nhỏ, tôi luôn mong muốn mang đến những trải nghiệm chăm sóc răng miệng nhẹ nhàng, không đau đớn, giúp các bé xóa bỏ nỗi sợ hãi khi đi khám nha khoa.",
  aboutPhilosophy: "Mỗi đứa trẻ xứng đáng có một nụ cười khỏe mạnh và tự tin. Điều trị răng trẻ em không chỉ cần tay nghề chuyên môn vững vàng mà đòi hỏi sự kiên nhẫn, thấu cảm và những phương pháp tâm lý dỗ dành phù hợp với từng lứa tuổi của con.",

  // --- CHỈ SỐ THỐNG KÊ NỔI BẬT ---
  stats: [
    { number: "15+", label: "Năm kinh nghiệm chuyên sâu" },
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
