/**
 * LOGIC HOẠT ĐỘNG WEBSITE - PHÒNG KHÁM NHA KHOA BÁC SĨ THIÊN LÝ
 * Hỗ trợ tự động kết nối dữ liệu, đặt lịch hẹn nhanh, và bộ tùy chỉnh trực quan Live Customizer.
 */

// 1. KHỞI TẠO BẢN ĐỒ ICON SVG ĐỂ TẢI DỮ LIỆU ĐỘNG CHẤT LƯỢNG CAO
const ICON_PATHS = {
  'shield-check': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 11 2 2 4-4"></path></svg>`,
  'smile': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
  'sparkles': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z"></path><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z"></path></svg>`,
  'activity': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  'heart-pulse': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h3.17"></path></svg>`,
  'users': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  'phone': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  'map-pin': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  'clock': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  'calendar': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  'facebook': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
  'mail': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  'arrow-right': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  'check-circle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  'settings': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  /* === ICON THIẾT BỊ PHÒNG KHÁM === */
  'scan': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>`,
  'smile-seat': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9.09 10a3 3 0 0 0 5.83 0"/><line x1="9" y1="7" x2="9.01" y2="7"/><line x1="15" y1="7" x2="15.01" y2="7"/><path d="M5 20h14M7 20v-4a5 5 0 0 1 10 0v4"/></svg>`,
  'zap': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  'sun': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  'monitor': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
};

function getSvgIcon(name) {
  return ICON_PATHS[name] || '';
}

// 2. TỰ ĐỘNG KHỚP VÀ RENDER DỮ LIỆU TỪ CONFIG.JS LÊN GIAO DIỆN
function renderContent() {
  // --- THÀNH PHẦN CHỮ ĐƠN GIẢN ---
  document.title = `${CLINIC_CONFIG.clinicName} - ${CLINIC_CONFIG.doctorName}`;
  
  // Tên Bác sĩ
  document.querySelectorAll('[data-bind="doctorName"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.doctorName;
  });
  
  // Danh xưng / Học hàm
  document.querySelectorAll('[data-bind="doctorTitle"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.doctorTitle;
  });

  // Tên phòng khám
  document.querySelectorAll('[data-bind="clinicName"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.clinicName;
  });

  // Khẩu hiệu / Slogan
  document.querySelectorAll('[data-bind="tagline"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.tagline;
  });

  // Nơi công tác chính
  document.querySelectorAll('[data-bind="hospital"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.hospital;
  });

  // Số điện thoại hiển thị
  document.querySelectorAll('[data-bind="phoneFormatted"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.phoneFormatted;
  });

  // Số năm kinh nghiệm
  document.querySelectorAll('[data-bind="experienceYears"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.experienceYears;
  });

  // Chi tiết kinh nghiệm
  document.querySelectorAll('[data-bind="experienceDetail"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.experienceDetail;
  });

  // Giới thiệu bản thân
  document.querySelectorAll('[data-bind="aboutIntro"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.aboutIntro;
  });

  // Triết lý y đức
  document.querySelectorAll('[data-bind="aboutPhilosophy"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.aboutPhilosophy;
  });

  // Địa chỉ phòng khám
  document.querySelectorAll('[data-bind="address"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.address;
  });

  // Email
  document.querySelectorAll('[data-bind="email"]').forEach(el => {
    el.textContent = CLINIC_CONFIG.email;
    if (el.tagName === 'A') {
      el.href = `mailto:${CLINIC_CONFIG.email}`;
    }
  });

  // --- LIÊN KẾT ĐƯỜNG DẪN (HREF) ---
  // Gọi điện
  document.querySelectorAll('[data-bind-href="phone"]').forEach(el => {
    el.href = `tel:${CLINIC_CONFIG.phone.replace(/\./g, '')}`;
  });

  // Link Zalo
  document.querySelectorAll('[data-bind-href="zaloLink"]').forEach(el => {
    el.href = CLINIC_CONFIG.zaloLink;
  });

  // Link Facebook Page
  document.querySelectorAll('[data-bind-href="facebookPage"]').forEach(el => {
    el.href = CLINIC_CONFIG.facebookPage;
  });

  // Link Messenger
  document.querySelectorAll('[data-bind-href="messengerLink"]').forEach(el => {
    el.href = CLINIC_CONFIG.messengerLink;
  });

  // Bản đồ nhúng Google Maps
  const mapIframe = document.querySelector('#mapIframe');
  if (mapIframe && CLINIC_CONFIG.googleMapsEmbed) {
    mapIframe.src = CLINIC_CONFIG.googleMapsEmbed;
  }

  // --- RENDER DANH SÁCH PHỨC TẠP ---
  
  // 1. Chỉ số thống kê (Stats Section)
  const statsGrid = document.querySelector('#statsGrid');
  if (statsGrid && CLINIC_CONFIG.stats) {
    statsGrid.innerHTML = CLINIC_CONFIG.stats.map(stat => `
      <div class="stat-item">
        <h3>${stat.number}</h3>
        <p>${stat.label}</p>
      </div>
    `).join('');
  }

  // 2. Danh sách dịch vụ (Services Section)
  const servicesGrid = document.querySelector('#servicesGrid');
  if (servicesGrid && CLINIC_CONFIG.services) {
    servicesGrid.innerHTML = CLINIC_CONFIG.services.map(svc => `
      <div class="service-card">
        ${svc.badge ? `<span class="service-card-badge">${svc.badge}</span>` : ''}
        <div class="service-icon-box">
          ${getSvgIcon(svc.icon)}
        </div>
        <h3>${svc.title}</h3>
        <p>${svc.desc}</p>
        <a href="#dat-lich" class="service-link" onclick="selectServiceInForm('${svc.id}')">
          Đăng ký khám ${getSvgIcon('arrow-right')}
        </a>
      </div>
    `).join('');

    // Đổ dịch vụ vào select-option của Form Đặt lịch
    const bookingServiceSelect = document.querySelector('#bookingService');
    if (bookingServiceSelect) {
      bookingServiceSelect.innerHTML = `
        <option value="" disabled selected>Chọn dịch vụ nha khoa...</option>
        ${CLINIC_CONFIG.services.map(svc => `<option value="${svc.title}">${svc.title}</option>`).join('')}
      `;
    }
  }

  // 3. Lịch làm việc (Timing Section)
  const workingHoursList = document.querySelector('#workingHoursList');
  if (workingHoursList && CLINIC_CONFIG.workingHours) {
    workingHoursList.innerHTML = CLINIC_CONFIG.workingHours.map(hour => `
      <li class="working-hours-item">
        <div class="working-day">${hour.day}</div>
        <div class="working-time">
          <span>${hour.time}</span>
          <small>${hour.note}</small>
        </div>
      </li>
    `).join('');
  }

  // 4. Ý kiến phụ huynh (Testimonials Section)
  const testimonialsSlider = document.querySelector('#testimonialsSlider');
  if (testimonialsSlider && CLINIC_CONFIG.testimonials) {
    testimonialsSlider.innerHTML = CLINIC_CONFIG.testimonials.map(item => `
      <div class="testimonial-card">
        <div class="testimonial-content">
          <div class="testimonial-stars">
            ${Array(item.rating).fill(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`).join('')}
          </div>
          <p class="testimonial-text">"${item.text}"</p>
        </div>
        <div class="testimonial-user">
          <img class="testimonial-avatar" src="${item.avatar}" alt="${item.name}">
          <div class="testimonial-info">
            <h4>${item.name}</h4>
            <p>${item.relationship}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 5. Trang thiết bị phòng khám (Equipment Section)
  const equipmentGrid = document.querySelector('#equipmentGrid');
  if (equipmentGrid && CLINIC_CONFIG.equipment) {
    equipmentGrid.innerHTML = CLINIC_CONFIG.equipment.map((eq) => `
      <div class="equipment-card" id="eq-${eq.id}">
        <div class="equipment-img-wrap">
          <img src="${eq.image}" alt="${eq.name}" class="equipment-img" loading="lazy">
          <span class="equipment-badge">${eq.badge}</span>
        </div>
        <div class="equipment-content">
          <h3>${eq.name}</h3>
          <p class="equipment-desc">${eq.desc}</p>
          ${eq.features && eq.features.length ? `
            <ul class="equipment-features">
              ${eq.features.map(f => `
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M20 6 9 17l-5-5"/></svg>
                  ${f}
                </li>
              `).join('')}
            </ul>
          ` : ''}
        </div>
      </div>
    `).join('');
  }

  // 6. Danh sách chứng chỉ (About Certificates)
  const aboutCertificatesList = document.querySelector('#aboutCertificatesList');
  if (aboutCertificatesList && CLINIC_CONFIG.aboutCertificates) {
    aboutCertificatesList.innerHTML = CLINIC_CONFIG.aboutCertificates.map(cert => `
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 11 2 2 4-4"/></svg>
        <span>${cert}</span>
      </li>
    `).join('');
  }
}

// Hàm bổ trợ chọn sẵn dịch vụ trong form khi ấn nút từ thẻ dịch vụ
window.selectServiceInForm = function(serviceId) {
  const service = CLINIC_CONFIG.services.find(s => s.id === serviceId);
  if (service) {
    const bookingServiceSelect = document.querySelector('#bookingService');
    if (bookingServiceSelect) {
      bookingServiceSelect.value = service.title;
    }
  }
};


// 3. CHỨC NĂNG XÁC ĐỊNH TRẠNG THÁI MỞ CỬA THỜI GIAN THỰC (REAL-TIME STATUS)
function updateClinicStatus() {
  const statusContainer = document.querySelector('#clinicStatusContainer');
  if (!statusContainer) return;

  const now = new Date();
  const day = now.getDay(); // 0: Chủ nhật, 1: Thứ hai,..., 6: Thứ bảy
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeVal = hours * 60 + minutes; // Quy đổi ra số phút trong ngày để so sánh dễ dàng

  let isOpen = false;

  if (day >= 1 && day <= 5) {
    // Thứ hai đến Thứ sáu: 17:00 - 20:30 (Khám ngoài giờ)
    const openTimeVal = 17 * 60; // 17:00
    const closeTimeVal = 20 * 60 + 30; // 20:30
    if (currentTimeVal >= openTimeVal && currentTimeVal < closeTimeVal) {
      isOpen = true;
    }
  } else if (day === 6 || day === 0) {
    // Thứ Bảy & Chủ Nhật: 08:00 - 18:30 (Khám cả ngày)
    const openTimeVal = 8 * 60; // 08:00
    const closeTimeVal = 18 * 60 + 30; // 18:30
    if (currentTimeVal >= openTimeVal && currentTimeVal < closeTimeVal) {
      isOpen = true;
    }
  }

  if (isOpen) {
    statusContainer.innerHTML = `
      <div class="clinic-status open">
        <span class="status-dot"></span> ĐANG MỞ CỬA
      </div>
    `;
  } else {
    statusContainer.innerHTML = `
      <div class="clinic-status closed">
        <span class="status-dot"></span> ĐÃ ĐÓNG CỬA
      </div>
    `;
  }
}


// 4. XỬ LÝ LỚP MÀN HÌNH CHUNG & ĐIỀU HƯỚNG DI ĐỘNG (NAV & HEADER)
function setupNavigation() {
  const header = document.querySelector('#header');
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Đổi trạng thái header khi cuộn chuột
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Hamburger toggle di động
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
  }

  // Đóng menu khi bấm vào link liên kết (Mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger && navMenu) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
      }
    });
  });

  // Intersection Observer làm nổi bật tab đang cuộn tới
  const sections = document.querySelectorAll('section, header');
  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Kích hoạt khi chiếm 50% khung nhìn
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => {
    if (sec.getAttribute('id')) {
      observer.observe(sec);
    }
  });
}


// 5. HỆ THỐNG ĐẶT LỊCH HẸN THÔNG MINH - ĐẶC BIỆT KẾT NỐI ZALO TIỆN LỢI
function setupBookingForm() {
  const bookingForm = document.querySelector('#bookingForm');
  if (!bookingForm) return;

  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Thu thập dữ liệu
    const parentName = document.querySelector('#parentName').value.trim();
    const phone = document.querySelector('#bookingPhone').value.trim();
    const childName = document.querySelector('#childName').value.trim();
    const childAge = document.querySelector('#childAge').value.trim();
    const service = document.querySelector('#bookingService').value;
    const date = document.querySelector('#bookingDate').value;
    const time = document.querySelector('#bookingTime').value;
    const note = document.querySelector('#bookingNote').value.trim();

    // Xác thực cơ bản
    if (!parentName || !phone || !childName || !service || !date || !time) {
      alert("Vui lòng điền đầy đủ các thông tin bắt buộc có dấu (*).");
      return;
    }

    // 1. Soạn tin nhắn tự động cực kỳ chi tiết, lịch sự
    const textMsg = `Chào Bác sĩ Thiên Lý, tôi muốn đăng ký lịch khám răng tại phòng khám:\n\n` + 
                    `- Phụ huynh: ${parentName}\n` +
                    `- Số điện thoại: ${phone}\n` + 
                    `- Bé: ${childName} (${childAge ? childAge + ' tuổi' : 'Chưa rõ tuổi'})\n` +
                    `- Dịch vụ khám: ${service}\n` +
                    `- Lịch hẹn: ngày ${formatDateString(date)} vào lúc ${time}\n` +
                    `${note ? `- Ghi chú thêm: ${note}` : ''}`;

    // 2. COPY TIN NHẮN TỰ ĐỘNG VÀO CLIPBOARD CỦA BỆNH NHÂN (Giải pháp cực kỳ chuyên nghiệp)
    navigator.clipboard.writeText(textMsg).then(() => {
      // 3. Tạo hiệu ứng modal / thông báo nổi bật tuyệt đẹp trước khi chuyển tiếp
      showBookingSuccessModal(textMsg);
    }).catch(err => {
      // Trường hợp trình duyệt chặn clipboard
      showBookingSuccessModal(textMsg, false);
    });
  });
}

// Bổ trợ format ngày tháng YYYY-MM-DD sang DD/MM/YYYY
function formatDateString(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

// Hiển thị modal đặt lịch thành công tích hợp mở Zalo
function showBookingSuccessModal(messageContent, copiedSuccess = true) {
  // Tạo modal động bằng Vanilla JS
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
  modal.style.backdropFilter = 'blur(8px)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zindex = '10000';
  modal.style.padding = '20px';
  modal.style.opacity = '0';
  modal.style.transition = 'opacity 0.3s ease';

  const modalContent = document.createElement('div');
  modalContent.style.background = '#ffffff';
  modalContent.style.borderRadius = '24px';
  modalContent.style.padding = '40px 30px';
  modalContent.style.maxWidth = '500px';
  modalContent.style.width = '100%';
  modalContent.style.textAlign = 'center';
  modalContent.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
  modalContent.style.transform = 'scale(0.9)';
  modalContent.style.transition = 'transform 0.3s ease';

  modalContent.innerHTML = `
    <div style="width: 80px; height: 80px; border-radius: 50%; background-color: var(--success-light); color: var(--success); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 24px;">
      ${getSvgIcon('check-circle').replace('viewBox="0 0 24 24"', 'viewBox="0 0 24 24" width="40" height="40"')}
    </div>
    <h3 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--secondary);">Đăng ký đặt lịch thành công!</h3>
    <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 24px; line-height: 1.6;">
      ${copiedSuccess ? 'Thông tin đặt lịch của bạn <b>đã được tự động sao chép</b>.' : 'Vui lòng nhấn nút bên dưới để gửi tin nhắn đặt lịch cho Bác sĩ.'}
      Chúng tôi đang kết nối bạn tới kênh Zalo riêng của Bác sĩ Thiên Lý để xác nhận lịch khám.
    </p>
    <div style="background-color: var(--bg); border: 1.5px dashed var(--primary-medium); border-radius: 12px; padding: 16px; font-size: 0.85rem; text-align: left; color: var(--text-main); margin-bottom: 24px; white-space: pre-line; max-height: 150px; overflow-y: auto;">
      ${messageContent}
    </div>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <a href="${CLINIC_CONFIG.zaloLink}" target="_blank" id="btnOpenZaloDirect" style="background-color: #0068ff; color: white; text-decoration: none; padding: 14px; border-radius: 12px; font-family: var(--font-title); font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 1rem; box-shadow: 0 4px 15px rgba(0, 104, 255, 0.3);">
        Mở Zalo & Gửi tin nhắn ngay
      </a>
      <button id="btnCloseModal" style="background: none; border: none; color: var(--text-muted); padding: 8px; cursor: pointer; font-size: 0.9rem; font-weight: 600;">
        Đóng thông báo
      </button>
    </div>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Trigger hoạt ảnh mượt
  setTimeout(() => {
    modal.style.opacity = '1';
    modalContent.style.transform = 'scale(1)';
  }, 10);

  // Logic đóng modal
  const closeModalFn = () => {
    modal.style.opacity = '0';
    modalContent.style.transform = 'scale(0.9)';
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  };

  modal.querySelector('#btnCloseModal').addEventListener('click', closeModalFn);
  
  // Tự động mở link Zalo sau 2.5 giây để tăng trải nghiệm tự động hóa
  const autoRedirect = setTimeout(() => {
    window.open(CLINIC_CONFIG.zaloLink, '_blank');
  }, 2500);

  modal.querySelector('#btnOpenZaloDirect').addEventListener('click', () => {
    clearTimeout(autoRedirect);
    closeModalFn();
  });
}


// 6. BỘ TÙY CHỈNH THÔNG TIN TRỰC QUAN (LIVE CUSTOMIZER)
function setupLiveCustomizer() {
  const toggle = document.querySelector('#customizerToggle');
  const panel = document.querySelector('#customizerPanel');
  const closeBtn = document.querySelector('#customizerClose');
  const overlay = document.querySelector('#customizerOverlay');
  const exportBtn = document.querySelector('#btnExportConfig');

  if (!toggle || !panel || !closeBtn || !overlay) return;

  // Mở Customizer Panel
  toggle.addEventListener('click', () => {
    panel.classList.add('open');
    overlay.classList.add('open');
  });

  // Đóng Customizer Panel
  const closePanel = () => {
    panel.classList.remove('open');
    overlay.classList.remove('open');
  };

  closeBtn.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);

  // ĐỔ DỮ LIỆU HIỆN TẠI VÀO CÁC INPUT TRONG FORM CHỈNH SỬA
  const fields = {
    'czDoctorName': CLINIC_CONFIG.doctorName,
    'czDoctorTitle': CLINIC_CONFIG.doctorTitle,
    'czClinicName': CLINIC_CONFIG.clinicName,
    'czHospital': CLINIC_CONFIG.hospital,
    'czTagline': CLINIC_CONFIG.tagline,
    'czPhone': CLINIC_CONFIG.phone,
    'czPhoneFormatted': CLINIC_CONFIG.phoneFormatted,
    'czZaloLink': CLINIC_CONFIG.zaloLink,
    'czFacebookPage': CLINIC_CONFIG.facebookPage,
    'czMessengerLink': CLINIC_CONFIG.messengerLink,
    'czEmail': CLINIC_CONFIG.email,
    'czAddress': CLINIC_CONFIG.address,
    'czAboutIntro': CLINIC_CONFIG.aboutIntro,
    'czAboutPhilosophy': CLINIC_CONFIG.aboutPhilosophy,
    'czMapsEmbed': CLINIC_CONFIG.googleMapsEmbed
  };

  // Điền dữ liệu vào form
  Object.keys(fields).forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.value = fields[id];
    }
  });

  // LẮNG NGHE THAY ĐỔI TRÊN MỖI INPUT VÀ RENDER REAL-TIME (TWO-WAY BINDING)
  const inputMappings = [
    { inputId: 'czDoctorName', configKey: 'doctorName', selector: '[data-bind="doctorName"]' },
    { inputId: 'czDoctorTitle', configKey: 'doctorTitle', selector: '[data-bind="doctorTitle"]' },
    { inputId: 'czClinicName', configKey: 'clinicName', selector: '[data-bind="clinicName"]' },
    { inputId: 'czHospital', configKey: 'hospital', selector: '[data-bind="hospital"]' },
    { inputId: 'czTagline', configKey: 'tagline', selector: '[data-bind="tagline"]' },
    { inputId: 'czPhoneFormatted', configKey: 'phoneFormatted', selector: '[data-bind="phoneFormatted"]' },
    { inputId: 'czEmail', configKey: 'email', selector: '[data-bind="email"]' },
    { inputId: 'czAddress', configKey: 'address', selector: '[data-bind="address"]' },
    { inputId: 'czAboutIntro', configKey: 'aboutIntro', selector: '[data-bind="aboutIntro"]' },
    { inputId: 'czAboutPhilosophy', configKey: 'aboutPhilosophy', selector: '[data-bind="aboutPhilosophy"]' }
  ];

  inputMappings.forEach(mapping => {
    const input = document.getElementById(mapping.inputId);
    if (input) {
      input.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        // Cập nhật biến global config
        CLINIC_CONFIG[mapping.configKey] = val;
        // Cập nhật DOM trực tiếp để thấy thay đổi ngay lập tức
        document.querySelectorAll(mapping.selector).forEach(el => {
          el.textContent = val;
        });

        // Riêng trường email cập nhật href
        if (mapping.configKey === 'email') {
          document.querySelectorAll('a[data-bind="email"]').forEach(el => {
            el.href = `mailto:${val}`;
          });
        }
      });
    }
  });

  // Một số trường đặc biệt cần xử lý phức tạp hơn
  
  // SĐT thay đổi => Cập nhật các thẻ <a> href="tel:..."
  const phoneInput = document.getElementById('czPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      CLINIC_CONFIG.phone = val;
      const strippedPhone = val.replace(/\./g, '');
      document.querySelectorAll('[data-bind-href="phone"]').forEach(el => {
        el.href = `tel:${strippedPhone}`;
      });
    });
  }

  // Cập nhật Zalo Link trực tiếp
  const zaloInput = document.getElementById('czZaloLink');
  if (zaloInput) {
    zaloInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      CLINIC_CONFIG.zaloLink = val;
      document.querySelectorAll('[data-bind-href="zaloLink"]').forEach(el => {
        el.href = val;
      });
    });
  }

  // Cập nhật Facebook Page Link
  const fbInput = document.getElementById('czFacebookPage');
  if (fbInput) {
    fbInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      CLINIC_CONFIG.facebookPage = val;
      document.querySelectorAll('[data-bind-href="facebookPage"]').forEach(el => {
        el.href = val;
      });
    });
  }

  // Cập nhật Messenger Link
  const messInput = document.getElementById('czMessengerLink');
  if (messInput) {
    messInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      CLINIC_CONFIG.messengerLink = val;
      document.querySelectorAll('[data-bind-href="messengerLink"]').forEach(el => {
        el.href = val;
      });
    });
  }

  // Cập nhật Nhúng bản đồ
  const mapInput = document.getElementById('czMapsEmbed');
  if (mapInput) {
    mapInput.addEventListener('change', (e) => {
      const val = e.target.value.trim();
      CLINIC_CONFIG.googleMapsEmbed = val;
      const mapIframe = document.querySelector('#mapIframe');
      if (mapIframe) {
        mapIframe.src = val;
      }
    });
  }

  // XUẤT FILE CAU HINH CONFIG.JS
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const fileContent = generateConfigJSString();
      
      // Tạo file tải về trực tiếp từ trình duyệt
      const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'config.js');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      alert("Đã tạo file config.js mới thành công!\n\nHướng dẫn: Bác sĩ hãy copy file vừa tải về và lưu đè lên file 'config.js' cũ trong thư mục website trên máy tính của mình, sau đó upload lên GitHub để cập nhật website vĩnh viễn.");
    });
  }
}

// Bổ trợ sinh chuỗi mã nguồn file config.js từ object CLINIC_CONFIG
function generateConfigJSString() {
  return `/**
 * FILE CẤU HÌNH WEBSITE - PHÒNG KHÁM NHA KHOA BÁC SĨ THIÊN LÝ
 * Được cập nhật tự động qua Bộ Tùy Chỉnh Trực Quan (Live Customizer)
 * Ngày cập nhật: ${new Date().toLocaleDateString('vi-VN')}
 */

const CLINIC_CONFIG = ${JSON.stringify(CLINIC_CONFIG, null, 2)};

// Đảm bảo dữ liệu khả dụng cho cả việc nhúng trong HTML qua script và import (nếu cần)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLINIC_CONFIG;
}
`;
}


// 7. KHỞI CHẠY HỆ THỐNG KHI TRANG TẢI XONG
document.addEventListener('DOMContentLoaded', () => {
  renderContent();
  updateClinicStatus();
  setupNavigation();
  setupBookingForm();
  setupLiveCustomizer();

  // Cập nhật trạng thái mở cửa cứ sau 1 phút
  setInterval(updateClinicStatus, 60000);
});
