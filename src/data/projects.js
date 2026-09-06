import shotItseek from "../assets/projects/itseek.png";
import shotSlotify from "../assets/projects/slotify.png";
import shotWasteToWorth from "../assets/projects/wastetoworth.png";
import shotStaybook from "../assets/projects/staybook.png";

/**
 * Dự án thật, dữ liệu rút ra trực tiếp từ codebase của từng repo.
 *
 * Mỗi dự án gồm:
 *  - cats      : dùng cho bộ lọc (khớp với tr.projects.filters, bỏ mục "Tất cả")
 *  - role      : vai trò + quy mô team
 *  - scope     : phần việc mình trực tiếp làm chủ
 *  - highlights: các điểm kỹ thuật đáng nói (đây là phần được highlight trên card)
 *  - stack     : icon lấy từ `tech-stack-icons`; thiếu icon thì để `icon: null` -> chip chữ
 *  - links     : có thể nhiều repo (FE/BE tách riêng) + link demo nếu đã deploy.
 *                Link demo bỏ `label` -> dùng nhãn đã dịch (tr.projects.demo).
 */

export const projects = [
  {
    id: "itseek",
    title: {
      vi: "ITSeek — Nền tảng tuyển dụng IT tích hợp AI",
      en: "ITSeek — AI-powered IT recruitment platform",
    },
    cats: ["Backend", "Frontend"],
    accent: ["#7c3aed", "#2563eb"],
    monogram: "IS",
    image: shotItseek,
    period: "05/2026 – 09/2026",
    role: { vi: "Full-stack", en: "Full-stack" },
    scope: {
      vi: "Module Application + CV, tích hợp AI Gemini và toàn bộ tầng testing",
      en: "Application and CV modules, Gemini AI integration, and end-to-end testing",
    },
    desc: {
      vi: "Đồ án tốt nghiệp quy mô lớn: Spring Boot 3.5 / Java 21 với ~57 REST controller, ~55 JPA entity, realtime qua SSE + Socket.IO, và AI Gemini chạy xuyên suốt luồng CV – matching – phỏng vấn thử.",
      en: "Capstone-scale system: Spring Boot 3.5 / Java 21 with ~57 REST controllers, ~55 JPA entities, realtime over SSE + Socket.IO, and Gemini AI integrated across the CV review, job matching, and mock-interview workflows.",
    },
    highlights: [
      {
        vi: "Tích hợp Spring AI + Google Gemini: phân tích/chấm CV, sinh câu hỏi và chấm điểm phỏng vấn thử theo rubric — tách ChatClient riêng cho từng use case (model, temperature, maxOutputTokens cấu hình qua YAML, không hardcode).",
        en: "Spring AI + Google Gemini: CV analysis/scoring, mock-interview question generation and rubric-based grading — a dedicated ChatClient per use case (model, temperature, maxOutputTokens configured via YAML, never hardcoded).",
      },
      {
        vi: "Semantic search & job matching bằng vector embeddings lưu trên PostgreSQL + pgvector, kết hợp scorer có trọng số (JobMatchScorer, CriteriaWeightConfig) thay vì chỉ dựa vào LLM.",
        en: "Semantic search & job matching on vector embeddings stored in PostgreSQL + pgvector, combined with a weighted scorer (JobMatchScorer, CriteriaWeightConfig) rather than relying solely on the LLM.",
      },
      {
        vi: "CV builder end-to-end: editor autosave + version history/rollback, share token công khai, và pipeline render một nguồn dữ liệu ra 3 định dạng HTML / PDF (Flying Saucer) / DOCX (Apache POI).",
        en: "End-to-end CV builder: autosaving editor with version history/rollback, public share tokens, and a render pipeline rendering a single data model into HTML, PDF (Flying Saucer), and DOCX (Apache POI).",
      },
      {
        vi: "Module Application phục vụ 2 phía: ứng viên (nộp, kiểm tra eligibility, rút hồ sơ) và nhà tuyển dụng (đổi trạng thái, hold/unhold, ghi chú, tạo hồ sơ ngoài luồng từ CV) — mọi biến động trạng thái phát event cho hub thông báo.",
        en: "Two-sided Application module: seeker side (submit, eligibility check, withdraw) and recruiter side (status transitions, hold/unhold, notes, external application from a CV) — each state transition publishes an event to the notification hub.",
      },
      {
        vi: "Testing nhiều tầng: unit (JUnit 5 + Mockito) cho scorer/util, integration MockMvc trên ~45 controller, e2e Playwright theo business flow, và bộ load test k6 đo p95 theo từng NFR.",
        en: "Layered testing: JUnit 5 + Mockito unit tests for scorers/utils, ~45 MockMvc controller integration tests, Playwright end-to-end tests covering key business flows, and a k6 load-test suite measuring p95 against each NFR.",
      },
    ],
    stack: [
      { name: "Java 21", icon: "java" },
      { name: "Spring Boot 3.5", icon: "spring" },
      { name: "Spring AI", icon: null },
      { name: "Gemini", icon: "gemini" },
      { name: "PostgreSQL + pgvector", icon: "postgresql" },
      { name: "Angular 21", icon: "angular17" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind 4", icon: "tailwindcss" },
      { name: "Socket.IO", icon: "socketio" },
      { name: "MinIO", icon: null },
      { name: "MapStruct", icon: null },
      { name: "Docker", icon: "docker" },
      { name: "Playwright", icon: "playwright" },
      { name: "k6", icon: null },
      { name: "GitLab CI", icon: "gitlab" },
    ],
    links: [
      { url: "https://itseek.vn", kind: "demo" },
      { label: "Backend", url: "https://gitlab.com/sep4908144215/sep490_be", kind: "code" },
      { label: "Frontend", url: "https://gitlab.com/sep4908144215/sep490_fe", kind: "code" },
    ],
    featured: true,
    teamSize: 5,
  },
  {
    id: "slotify",
    title: {
      vi: "Slotify — Hệ thống đặt vé xem phim",
      en: "Slotify — Cinema ticket booking system",
    },
    cats: ["Backend", "Frontend"],
    accent: ["#ec4899", "#f59e0b"],
    monogram: "SL",
    image: shotSlotify,
    period: "01/2026 – 03/2026",
    role: { vi: "Full-stack", en: "Full-stack" },
    scope: {
      vi: "Module Auth (FE + BE) và các module quản lý ở màn hình Admin",
      en: "Auth module (FE + BE) and the admin-side management modules",
    },
    desc: {
      vi: "Backend .NET 8 tách 3 tầng Presentation / BusinessLogic / DataAccess, frontend React 19 + TypeScript. Mình phụ trách xuyên suốt luồng xác thực và khu vực quản trị.",
      en: "A .NET 8 backend split into Presentation / BusinessLogic / DataAccess layers with a React 19 + TypeScript frontend. I implemented the authentication flow and the complete admin portal.",
    },
    highlights: [
      {
        vi: "Auth JWT + refresh token xoay vòng: access token ngắn hạn ở phía client, refresh token đặt trong HttpOnly cookie, axios interceptor tự retry request 401 đúng một lần rồi mới ép logout.",
        en: "JWT auth with refresh-token rotation: a short-lived access token client-side, the refresh token in an HttpOnly cookie, and an axios interceptor that retries a 401 exactly once before forcing logout.",
      },
      {
        vi: "Bổ sung Google OAuth (Google.Apis.Auth), băm mật khẩu BCrypt, và luồng quên/đặt lại mật khẩu qua email — chuẩn hoá toàn bộ response 401/403 về một wrapper ApiResponse thống nhất.",
        en: "Added Google OAuth (Google.Apis.Auth), BCrypt password hashing and a forgot/reset-password email flow — standardizing all 401/403 responses into a single ApiResponse wrapper.",
      },
      {
        vi: "Xây các màn quản trị (phim, rạp, phòng chiếu, sơ đồ ghế, suất chiếu, người dùng) trên React 19 + Radix UI, form validate bằng React Hook Form + Zod, state auth dùng Zustand persist.",
        en: "Built the admin screens (movies, cinemas, auditoriums, seat maps, showtimes, users) on React 19 + Radix UI, with React Hook Form + Zod validation and Zustand persist for auth state.",
      },
      {
        vi: "Chặn truy cập bằng route guard theo vai trò ở FE, đồng bộ với phân quyền JWT ở BE — không để màn admin chỉ được bảo vệ ở một phía.",
        en: "Role-based route guards on the frontend kept in sync with JWT authorisation on the backend, keeping authorization consistent across both sides.",
      },
      {
        vi: "Phía hạ tầng: EF Core + SQL Server, AutoMapper, Cloudinary cho ảnh poster, BackgroundService tự huỷ booking quá hạn, GlobalExceptionHandler và Swagger cho toàn bộ API.",
        en: "Built on EF Core and SQL Server, with AutoMapper, Cloudinary for poster storage, a BackgroundService for expiring stale bookings, centralized exception handling, and Swagger documentation across the API.",
      },
    ],
    stack: [
      { name: ".NET 8", icon: "netcore" },
      { name: "C#", icon: "csharp" },
      { name: "EF Core", icon: null },
      { name: "SQL Server", icon: null },
      { name: "JWT / OAuth2", icon: "oauth" },
      { name: "React 19", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Zustand", icon: "zustand" },
      { name: "Radix UI", icon: "radixui" },
      { name: "Zod", icon: "zod" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "Swagger", icon: "swagger" },
      { name: "Docker", icon: "docker" },
    ],
    links: [
      { url: "https://slotify232.onrender.com", kind: "demo" },
      { label: "Frontend", url: "https://github.com/dungken1103/Slotify", kind: "code" },
      { label: "Backend", url: "https://github.com/linhvodanh2004/movie-slotify-be", kind: "code" },
    ],
    featured: true,
    teamSize: 2,
  },
  {
    id: "waste-to-worth",
    title: {
      vi: "Waste To Worth — E-commerce bản đồ gỗ tái chế",
      en: "Waste To Worth — Reclaimed-wood map store",
    },
    cats: ["Backend", "Frontend"],
    accent: ["#10b981", "#0ea5e9"],
    monogram: "WW",
    image: shotWasteToWorth,
    period: "02/2026",
    role: { vi: "Full-stack", en: "Full-stack" },
    scope: {
      vi: "Tự làm toàn bộ backend NestJS và frontend React",
      en: "Built the entire NestJS backend and React frontend myself",
    },
    desc: {
      vi: "Cửa hàng bán mô hình bản đồ Việt Nam 3D từ gỗ tái chế. Backend NestJS modular 12 module, Prisma + PostgreSQL; frontend React với khu vực khách hàng và dashboard quản trị.",
      en: "A shop selling 3D Vietnam map models made from reclaimed wood. A modular 12-module NestJS backend on Prisma + PostgreSQL, and a React frontend covering both the storefront and the admin dashboard.",
    },
    highlights: [
      {
        vi: "Kiến trúc NestJS module-per-domain (auth, product, cart, order, category, wood-type, admin-dashboard…), tách guard/decorator dùng chung — thêm domain mới không phải đụng vào code cũ.",
        en: "Module-per-domain NestJS architecture (auth, product, cart, order, category, wood-type, admin-dashboard…) with shared guards/decorators — making it easy to add new domains with minimal changes to existing modules.",
      },
      {
        vi: "Phân quyền bằng JWT strategy + RolesGuard và `@Roles()` decorator; đăng nhập Google qua Passport google-oauth20 với luồng callback trả token về FE.",
        en: "Authorisation via a JWT strategy plus RolesGuard and a `@Roles()` decorator; Google sign-in through Passport google-oauth20 with a callback flow returning the authentication token to the frontend.",
      },
      {
        vi: "Prisma schema quan hệ đầy đủ (User, Product, WoodType, Category, CartItem, Order/OrderItem, Review) với enum trạng thái đơn hàng và phương thức thanh toán — type-safe từ DB lên tới controller.",
        en: "A complete relational Prisma schema (User, Product, WoodType, Category, CartItem, Order/OrderItem, Review) with order-status and payment-method enums — maintaining type safety from the database through the API layer.",
      },
      {
        vi: "Validation bằng class-validator/class-transformer trên DTO, tài liệu API tự sinh bằng Swagger, upload ảnh qua Multer + Cloudinary, gửi mail giao dịch bằng Nodemailer/Brevo và job định kỳ với @nestjs/schedule.",
        en: "DTO validation with class-validator/class-transformer, Swagger-generated API documentation, image upload through Multer + Cloudinary, transactional email via Nodemailer/Brevo, and scheduled jobs with @nestjs/schedule.",
      },
      {
        vi: "Frontend React 18 + React Router 7: dashboard doanh thu bằng Chart.js, soạn mô tả sản phẩm bằng React Quill, SEO meta cho trang public và protected/public route theo vai trò.",
        en: "React 18 + React Router 7 frontend: a Chart.js revenue dashboard, React Quill for product descriptions, SEO meta on public pages, and role-aware protected/public routes.",
      },
    ],
    stack: [
      { name: "NestJS 11", icon: "nestjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Prisma", icon: "prisma" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Passport / JWT", icon: "passport" },
      { name: "React 18", icon: "react" },
      { name: "Bootstrap 5", icon: "bootstrap5" },
      { name: "Chart.js", icon: null },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "Swagger", icon: "swagger" },
      { name: "Render", icon: "render" },
    ],
    links: [
      { url: "https://wastetoworth.onrender.com", kind: "demo" },
      { label: "Frontend", url: "https://github.com/dungken1103/EXEJ1_FE", kind: "code" },
      { label: "Backend", url: "https://github.com/dungken1103/EXEJ1_BE", kind: "code" },
    ],
    featured: false,
    teamSize: 1,
  },
  {
    id: "staybook",
    title: {
      vi: "StayBook — App đặt phòng theo giờ",
      en: "StayBook — Hourly room booking app",
    },
    cats: ["Mobile"],
    accent: ["#0ea5e9", "#7c3aed"],
    monogram: "SB",
    image: shotStaybook,
    imageFit: "contain",
    period: "01/2026 – 03/2026",
    role: { vi: "Mobile full-stack", en: "Mobile full-stack" },
    scope: {
      vi: "Tự làm toàn bộ app Flutter và tầng dữ liệu Firebase",
      en: "Built the entire Flutter app and Firebase data layer myself",
    },
    desc: {
      vi: "Ứng dụng Flutter tìm và đặt phòng theo giờ với 3 vai trò User / Host / Admin, dùng Firebase làm backend: Auth, Firestore, Cloud Messaging.",
      en: "A Flutter app for discovering and booking rooms by the hour across three roles — User / Host / Admin — with Firebase as the backend: Auth, Firestore and Cloud Messaging.",
    },
    highlights: [
      {
        vi: "Tách tầng rõ ràng trong Flutter: models (fromMap/toMap) – DTOs cho mọi thao tác ghi – services đóng gói toàn bộ truy vấn Firestore, screens không gọi thẳng Firestore.",
        en: "Clear layering inside Flutter: models (fromMap/toMap), DTOs for every write, and services wrapping all Firestore queries — UI screens never access Firestore directly.",
      },
      {
        vi: "Tìm phòng theo bán kính bằng geohash (geoflutterfire_plus) kết hợp geolocator/geocoding — truy vấn không gian trên Firestore vốn không hỗ trợ sẵn.",
        en: "Radius search with geohashes (geoflutterfire_plus) plus geolocator/geocoding — despite Firestore lacking native spatial-query support.",
      },
      {
        vi: "Push notification hai lớp: Firebase Cloud Messaging cho background và flutter_local_notifications cho foreground, kèm badge đếm số chưa đọc cho chat và thông báo.",
        en: "Two-layer push notifications: Firebase Cloud Messaging for background and flutter_local_notifications for foreground, with unread-count badges for chat and notifications.",
      },
      {
        vi: "Điều hướng và quyền theo vai trò trên cùng một app: User (khám phá, đặt, voucher), Host (quản lý phòng, lịch, giá theo ngày, doanh thu) và Admin (duyệt phòng, người dùng, báo cáo).",
        en: "Role-based navigation and access control in a single app: User (explore, book, vouchers), Host (rooms, calendar, per-day pricing, revenue) and Admin (approvals, users, reports).",
      },
      {
        vi: "Upload ảnh trực tiếp lên Cloudinary bằng HTTP request ký SHA-1 phía client, chat realtime qua Firestore stream, biểu đồ doanh thu fl_chart và lịch đặt phòng table_calendar.",
        en: "Direct Cloudinary uploads using client-side SHA-1–signed HTTP requests, realtime chat on Firestore streams, fl_chart revenue charts and a table_calendar booking calendar.",
      },
    ],
    stack: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart 3", icon: "dart" },
      { name: "Firebase Auth", icon: "firebase" },
      { name: "Cloud Firestore", icon: "firebase" },
      { name: "FCM", icon: "firebase" },
      { name: "Geohash / Geolocator", icon: null },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "fl_chart", icon: null },
      { name: "PayOS", icon: null },
    ],
    links: [
      { label: "Source", url: "https://github.com/linhvodanh2004/prm393-project", kind: "code" },
    ],
    featured: false,
    teamSize: 1,
  },
  {
    id: "fsa-online-shop",
    title: {
      vi: "GOS Shop — E-commerce Spring Boot MVC",
      en: "GOS Shop — Spring Boot MVC e-commerce",
    },
    cats: ["Backend", "Frontend"],
    accent: ["#f59e0b", "#ef4444"],
    monogram: "GS",
    image: null,
    period: "05/2025 – 08/2025",
    role: { vi: "Full-stack", en: "Full-stack" },
    scope: {
      vi: "Đồ án cá nhân trong kỳ thực tập tại FPT Software Academy",
      en: "Individual project during the FPT Software Academy internship",
    },
    desc: {
      vi: "Web bán hàng Spring Boot MVC + Thymeleaf, tự làm từ tầng bảo mật, thanh toán VNPay tới chatbot AI Gemini có nhớ ngữ cảnh hội thoại.",
      en: "A Spring Boot MVC + Thymeleaf storefront built solo, covering everything from security and VNPay integration to a Gemini chatbot with conversational memory.",
    },
    highlights: [
      {
        vi: "Chatbot Gemini có bộ nhớ hội thoại tự viết: lưu lịch sử vào DB cho user đã đăng nhập và vào session cho khách, giới hạn cửa sổ ngữ cảnh và tóm tắt khi vượt ngưỡng để kiểm soát token.",
        en: "A Gemini chatbot with a custom conversation memory layer: history in the database for signed-in users and in the session for guests, a sliding context window, and summarisation past a threshold to keep tokens in check.",
      },
      {
        vi: "Spring Security đa luồng đăng nhập: form login + Google OAuth2 qua CustomOAuth2UserService, remember-me, phân quyền theo role, và giới hạn 1 phiên/tài khoản kèm ForceLogoutFilter.",
        en: "Multi-path Spring Security: form login plus Google OAuth2 through a CustomOAuth2UserService, remember-me, role-based authorisation, and single-session enforcement per account backed by a ForceLogoutFilter.",
      },
      {
        vi: "Tích hợp cổng thanh toán VNPay: tự ký HMAC-SHA512 cho request, xử lý return URL và đối chiếu chữ ký khi callback trước khi cập nhật trạng thái đơn hàng.",
        en: "VNPay payment integration: HMAC-SHA512 request signing, return-URL handling, and signature verification on callback before any order-status update.",
      },
      {
        vi: "Session tập trung bằng Spring Session JDBC (giỏ hàng và phiên sống sót qua restart), gửi email xác thực/đặt lại mật khẩu bằng Spring Mail, và URL sản phẩm dạng slug thân thiện SEO.",
        en: "Centralised sessions with Spring Session JDBC, allowing carts and sessions to persist across application restarts, verification/reset emails through Spring Mail, and SEO-friendly slug URLs for products.",
      },
      {
        vi: "Tách interface/implement cho toàn bộ service layer, DTO + mapper riêng, admin dashboard thống kê doanh thu theo tháng và CRUD sản phẩm/danh mục/đơn hàng/người dùng trên 36 template Thymeleaf.",
        en: "Interface/implementation split across the entire service layer, dedicated DTOs and mappers, an admin dashboard with monthly revenue reporting, and CRUD for products/categories/orders/users across 36 Thymeleaf templates.",
      },
    ],
    stack: [
      { name: "Java 17", icon: "java" },
      { name: "Spring Boot 3.2", icon: "spring" },
      { name: "Spring Security", icon: "spring" },
      { name: "Thymeleaf", icon: "thymeleaf" },
      { name: "MySQL", icon: "mysql" },
      { name: "Gemini API", icon: "gemini" },
      { name: "VNPay", icon: null },
      { name: "OAuth2", icon: "oauth" },
      { name: "Bootstrap 5", icon: "bootstrap5" },
      { name: "Maven", icon: null },
    ],
    links: [
      { label: "Source", url: "https://github.com/linhvodanh2004/fsa-online-shop", kind: "code" },
    ],
    featured: false,
    teamSize: 1,
  },
];
