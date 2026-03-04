import { useState, useEffect, useRef, useCallback } from "react";
import avatar from "./assets/linhphung_avatar.png";
import chatGptLogo from "./assets/ai-logo/chatgpt-seeklogo.png";
import claudeLogo from "./assets/ai-logo/claude-seeklogo.png";
import geminiLogo from "./assets/ai-logo/google-gemini-icon-seeklogo.png";
import grokLogo from "./assets/ai-logo/grok-seeklogo.png";
import StackIcon from "tech-stack-icons";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const t = {
  vi: {
    nav: { home: "Trang chủ", about: "Về tôi", skills: "Kỹ năng", experience: "Kinh nghiệm", projects: "Dự án", services: "Dịch vụ", blog: "Blog", contact: "Liên hệ" },
    hero: {
      greeting: "Xin chào, tôi là",
      name: "Linh Phùng",
      titles: ["Full-Stack Developer", "UI/UX Enthusiast", "Open Source Contributor", "Problem Solver"],
      desc: "Tôi xây dựng những trải nghiệm kỹ thuật số đẹp, hiệu suất cao và dễ truy cập. Đam mê tạo ra những sản phẩm có tác động thực sự.",
      cta1: "Xem dự án",
      cta2: "Liên hệ tôi",
      available: "Đang tìm kiếm cơ hội mới",
      scroll: "Cuộn xuống",
    },
    stats: [
      { label: "Năm kinh nghiệm", value: "< 1" },
      { label: "Dự án hoàn thành", value: "10+" },
      { label: "Khách hàng hài lòng", value: "40+" },
      { label: "Đóng góp GitHub", value: "1000+" },
    ],
    about: {
      title: "Về tôi",
      subtitle: "Câu chuyện của tôi",
      p1: "Tôi là lập trình viên full-stack với hơn 5 năm kinh nghiệm, chuyên xây dựng ứng dụng web hiện đại và scalable. Tôi yêu thích việc biến những ý tưởng phức tạp thành những sản phẩm đơn giản, thanh lịch.",
      p2: "Ngoài công việc, tôi đam mê đóng góp cho open source, viết blog kỹ thuật và mentoring cho junior developers. Tôi tin rằng code tốt không chỉ là code chạy được, mà còn phải dễ đọc và bảo trì.",
      p3: "Khi không code, tôi thích đọc sách, leo núi và khám phá các quán cà phê mới.",
      info: { dob: "15/03/1998", location: "Hà Nội, Việt Nam", email: "dev@example.com", phone: "+84 901 234 567", degree: "Cử nhân CNTT", freelance: "Sẵn sàng" },
      labels: { dob: "Ngày sinh", location: "Địa điểm", email: "Email", phone: "Điện thoại", degree: "Bằng cấp", freelance: "Freelance" },
      download: "Tải CV",
    },
    skills: {
      title: "Kỹ năng",
      subtitle: "Công nghệ tôi sử dụng",
      categories: ["Tất cả", "Frontend", "Backend", "DevOps", "Mobile", "Database"],
    },
    experience: {
      title: "Kinh nghiệm",
      subtitle: "Hành trình sự nghiệp",
      tabs: ["Kinh nghiệm làm việc", "Học vấn", "Chứng chỉ"],
    },
    projects: {
      title: "Dự án",
      subtitle: "Những gì tôi đã xây dựng",
      filters: ["Tất cả", "Web App", "Mobile", "Open Source", "API"],
      demo: "Demo",
      code: "Mã nguồn",
      case: "Chi tiết",
    },
    services: {
      title: "Dịch vụ",
      subtitle: "Tôi có thể giúp gì cho bạn",
    },
    testimonials: {
      title: "Nhận xét",
      subtitle: "Khách hàng nói gì",
    },
    blog: {
      title: "Blog",
      subtitle: "Chia sẻ kiến thức",
      readMore: "Đọc thêm",
      minRead: "phút đọc",
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Hãy cùng làm việc",
      name: "Họ tên",
      email: "Email",
      subject: "Chủ đề",
      message: "Tin nhắn",
      send: "Gửi tin nhắn",
      or: "hoặc kết nối qua",
      info: "Thông tin liên hệ",
    },
    footer: { rights: "Bảo lưu mọi quyền", built: "Xây dựng với ❤️ và React" },
  },
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", experience: "Experience", projects: "Projects", services: "Services", blog: "Blog", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      name: "Linh Phung",
      titles: ["Full-Stack Developer", "UI/UX Enthusiast", "Open Source Contributor", "Problem Solver"],
      desc: "I build beautiful, high-performance, and accessible digital experiences. Passionate about creating products that make a real impact.",
      cta1: "View Projects",
      cta2: "Contact Me",
      available: "Open to new opportunities",
      scroll: "Scroll down",
    },
    stats: [
      { label: "Years Experience", value: "< 1" },
      { label: "Projects Completed", value: "10+" },
      { label: "Happy Clients", value: "40+" },
      { label: "GitHub Contributions", value: "1000+" },
    ],
    about: {
      title: "About Me",
      subtitle: "My Story",
      p1: "I'm a full-stack developer with 5+ years of experience, specializing in building modern, scalable web applications. I love turning complex ideas into simple, elegant products.",
      p2: "Beyond work, I'm passionate about open-source contributions, technical blogging, and mentoring junior developers. I believe good code isn't just code that works—it also needs to be readable and maintainable.",
      p3: "When not coding, I enjoy reading, hiking, and exploring new coffee shops.",
      info: { dob: "Mar 15, 1998", location: "Hanoi, Vietnam", email: "dev@example.com", phone: "+84 901 234 567", degree: "B.S. Computer Science", freelance: "Available" },
      labels: { dob: "Date of Birth", location: "Location", email: "Email", phone: "Phone", degree: "Degree", freelance: "Freelance" },
      download: "Download CV",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I Work With",
      categories: ["All", "Frontend", "Backend", "DevOps", "Mobile", "Database"],
    },
    experience: {
      title: "Experience",
      subtitle: "My Career Journey",
      tabs: ["Work Experience", "Education", "Certifications"],
    },
    projects: {
      title: "Projects",
      subtitle: "What I've Built",
      filters: ["All", "Web App", "Mobile", "Open Source", "API"],
      demo: "Demo",
      code: "Source",
      case: "Details",
    },
    services: {
      title: "Services",
      subtitle: "How I Can Help You",
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What Clients Say",
    },
    blog: {
      title: "Blog",
      subtitle: "Sharing Knowledge",
      readMore: "Read More",
      minRead: "min read",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's Work Together",
      name: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      or: "or connect via",
      info: "Contact Info",
    },
    footer: { rights: "All rights reserved", built: "Built with ❤️ and React" },
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const skillsData = [
  // Frontend
  { name: "Bootstrap", level: 80, cat: "Frontend", icon: "bootstrap5" },
  { name: "Tailwind CSS", level: 80, cat: "Frontend", icon: "tailwindcss" },
  { name: "HTML", level: 77, cat: "Frontend", icon: "html5" },
  { name: "CSS", level: 77, cat: "Frontend", icon: "css3" },
  { name: "ReactJS", level: 70, cat: "Frontend", icon: "react" },
  { name: "Vite", level: 70, cat: "Frontend", icon: "vitejs" },
  { name: "Typescript", level: 70, cat: "Frontend", icon: "typescript" },
  { name: "JavaScript", level: 70, cat: "Frontend", icon: "js" },
  { name: "Angular", level: 70, cat: "Frontend", icon: "angular17" },
  // Backend
  { name: "Thymeleaf", level: 80, cat: "Backend", icon: "thymeleaf" },
  { name: "Swagger", level: 80, cat: "Backend", icon: "swagger" },
  { name: "Spring Boot", level: 80, cat: "Backend", icon: "spring" },
  { name: ".NET", level: 80, cat: "Backend", icon: "netcore" },
  { name: "Node.js", level: 70, cat: "Backend", icon: "nodejs" },
  { name: "NestJS", level: 70, cat: "Backend", icon: "nestjs" },
  // DevOps
  { name: "Vercel", level: 75, cat: "DevOps", icon: "vercel" },
  { name: "Render", level: 75, cat: "DevOps", icon: "render" },
  { name: "Railway", level: 75, cat: "DevOps", icon: "railway" },
  { name: "Git", level: 70, cat: "DevOps", icon: "git" },
  { name: "Gitlab", level: 70, cat: "DevOps", icon: "gitlab" },
  { name: "Jira", level: 65, cat: "DevOps", icon: "jira" },
  { name: "SonarQube", level: 55, cat: "DevOps", icon: "sonarqube" },
  { name: "Kubernetes", level: 10, cat: "DevOps", icon: "kubernetes" },
  { name: "Docker", level: 36, cat: "DevOps", icon: "docker" },
  // Mobile
  { name: "Flutter", level: 65, cat: "Mobile", icon: "flutter" },
  { name: "Dart", level: 60, cat: "Mobile", icon: "dart" },
  // Database
  { name: "Firebase", level: 55, cat: "Database", icon: "firebase" },
  { name: "PostgreSQL", level: 70, cat: "Database", icon: "postgresql" },
  { name: "MySQL", level: 75, cat: "Database", icon: "mysql" },
  { name: "Prisma", level: 70, cat: "Database", icon: "prisma" },
];
const workExp = [
  {
    role: { vi: "Thực Tập Sinh Java", en: "Java Intern" },
    company: "FPT Software Academy",
    period: "05/2025 - 08/2025",
    location: "Hà Nội",
    desc: { vi: "Dẫn dắt team 5 người xây dựng nền tảng SaaS phục vụ hơn 100K người dùng. Tối ưu performance giảm 40% load time.", en: "Led a 5-person team building a SaaS platform serving 100K+ users. Optimized performance reducing load time by 40%." },
    tags: ["Thmeleaf", "Spring Boot", "MySQL", "AI Studio", "Jira", "Git", "Gitlab", "HTML/CSS/Javascript"],
    logo: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/479494601_614420181340319_3909045382237007252_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=KCi5cVYRWGwQ7kNvwE5BnqH&_nc_oc=AdnPUI-LkFzjAg2KzzLNd7w9dk7FQPyd-Nwxrgk0I3-il3LZxZmXMTDPwSVVtSomXtENfVJjYwgkmsfNrPlQYI3T&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=IM0kOi73nHedqzOEqv6Ucw&_nc_ss=8&oh=00_Afz4oJTV4QrV4AYV7bkrS9VoCKcAUknmZYYaahZzZBWvCw&oe=69AD04F4",
  },
];

const education = [
  {
    degree: { vi: "Cử nhân Kỹ Thuật Phần Mềm", en: "Bachelor of Software Engineering" },
    school: "Đại học FPT Hà Nội",
    period: "2022 - 2026",
    gpa: "3.0/4.0",
    desc: { vi: "Chuyên ngành Kỹ thuật phần mềm. Tốt nghiệp xuất sắc. Đồ án tốt nghiệp về AI-powered recommendation system.", en: "Software Engineering major. Graduated with honors. Thesis on AI-powered recommendation systems." },
    logo: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/472138550_1003410378482040_409936283574780032_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_ohc=5JlET0gPclQQ7kNvwHUs3N7&_nc_oc=Adn9UMo5SzAtjhWAUWQOuSHcppH-rVSfoIJhTD-3S_hKBiaLbgCPp_G-PydoHftOzAuD-SNfYzBJeg8I8s4OaKta&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&_nc_gid=tBncs1XhBmZlHOJuhGOj9A&_nc_ss=8&oh=00_Afw0FOkb8P4akPTimVzJAUkzAU8Zee4KAoarYbbTh41lLQ&oe=69ACFC96",
  },
];

const certs = [
  { name: "AWS Solutions Architect Associate", issuer: "Amazon Web Services", year: "2023", badge: "https://ui-avatars.com/api/?name=AWS&background=FF9900&color=fff&size=48" },
  { name: "Google Cloud Professional Developer", issuer: "Google", year: "2022", badge: "https://ui-avatars.com/api/?name=GC&background=4285F4&color=fff&size=48" },
  { name: "Meta React Developer", issuer: "Meta", year: "2022", badge: "https://ui-avatars.com/api/?name=M&background=0866FF&color=fff&size=48" },
  { name: "MongoDB Developer Certification", issuer: "MongoDB", year: "2021", badge: "https://ui-avatars.com/api/?name=MDB&background=47A248&color=fff&size=48" },
];

const projects = [
  {
    title: "DevFlow – SaaS Platform",
    cat: "Web App",
    desc: { vi: "Nền tảng quản lý dự án thông minh với AI assistant, real-time collaboration và analytics dashboard.", en: "Smart project management platform with AI assistant, real-time collaboration and analytics dashboard." },
    tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    demo: "#", code: "#",
    featured: true,
    metrics: { vi: "10K+ người dùng", en: "10K+ users" },
  },
  {
    title: "ShopNest – E-commerce",
    cat: "Web App",
    desc: { vi: "Nền tảng thương mại điện tử đa vendor với payment gateway, quản lý kho và hệ thống review.", en: "Multi-vendor e-commerce platform with payment gateway, inventory management and review system." },
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    demo: "#", code: "#",
    featured: true,
    metrics: { vi: "$2M GMV", en: "$2M GMV" },
  },
  {
    title: "HealthTrack App",
    cat: "Mobile",
    desc: { vi: "Ứng dụng theo dõi sức khỏe với AI insights, tích hợp wearables và appointment booking.", en: "Health tracking app with AI insights, wearables integration and appointment booking." },
    tags: ["React Native", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    demo: "#", code: "#",
    featured: false,
    metrics: { vi: "4.8★ App Store", en: "4.8★ App Store" },
  },
  {
    title: "OpenChat – OSS",
    cat: "Open Source",
    desc: { vi: "Thư viện chat component mã nguồn mở cho React, hỗ trợ WebSocket và đa ngôn ngữ.", en: "Open source chat component library for React with WebSocket support and i18n." },
    tags: ["React", "TypeScript", "WebSocket"],
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=80",
    demo: "#", code: "#",
    featured: false,
    metrics: { vi: "2.3K ⭐ GitHub", en: "2.3K ⭐ GitHub" },
  },
  {
    title: "PayAPI – Payment Gateway",
    cat: "API",
    desc: { vi: "RESTful API tích hợp đa cổng thanh toán với webhook, retry logic và monitoring.", en: "RESTful API integrating multiple payment gateways with webhooks, retry logic and monitoring." },
    tags: ["Node.js", "Express", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    demo: "#", code: "#",
    featured: false,
    metrics: { vi: "99.9% uptime", en: "99.9% uptime" },
  },
  {
    title: "DataViz Studio",
    cat: "Web App",
    desc: { vi: "Công cụ visualize data no-code với 50+ loại chart, export PDF và chia sẻ dashboard.", en: "No-code data visualization tool with 50+ chart types, PDF export and dashboard sharing." },
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    demo: "#", code: "#",
    featured: false,
    metrics: { vi: "500+ khách hàng", en: "500+ customers" },
  },
];

const services = [
  { icon: "🌐", title: { vi: "Phát triển Web App", en: "Web App Development" }, desc: { vi: "Xây dựng SPA, PWA và web app hiện đại với React/Next.js, tối ưu SEO và performance.", en: "Building SPAs, PWAs and modern web apps with React/Next.js, SEO and performance optimized." }, price: { vi: "Từ $500", en: "From $500" } },
  { icon: "⚙️", title: { vi: "Backend & API", en: "Backend & API" }, desc: { vi: "Thiết kế RESTful API, GraphQL, microservices với Node.js, Go hoặc Python.", en: "Designing RESTful APIs, GraphQL, microservices with Node.js, Go or Python." }, price: { vi: "Từ $600", en: "From $600" } },
  { icon: "📱", title: { vi: "Mobile App", en: "Mobile App" }, desc: { vi: "Cross-platform mobile app với React Native hoặc Flutter, tích hợp native features.", en: "Cross-platform mobile apps with React Native or Flutter, native feature integration." }, price: { vi: "Từ $800", en: "From $800" } },
  { icon: "☁️", title: { vi: "DevOps & Cloud", en: "DevOps & Cloud" }, desc: { vi: "Setup CI/CD, containerization, deploy lên AWS/GCP/Azure, monitoring và alerting.", en: "CI/CD setup, containerization, deployment on AWS/GCP/Azure, monitoring and alerting." }, price: { vi: "Từ $400", en: "From $400" } },
  { icon: "🎨", title: { vi: "UI/UX Design", en: "UI/UX Design" }, desc: { vi: "Thiết kế giao diện hiện đại, design system, prototype và user testing.", en: "Modern UI design, design systems, prototyping and user testing." }, price: { vi: "Từ $300", en: "From $300" } },
  { icon: "🔍", title: { vi: "Code Review & Audit", en: "Code Review & Audit" }, desc: { vi: "Đánh giá code quality, security audit, performance optimization và tech debt reduction.", en: "Code quality review, security audit, performance optimization and tech debt reduction." }, price: { vi: "Từ $200", en: "From $200" } },
  { icon: "🎓", title: { vi: "Mentoring & Training", en: "Mentoring & Training" }, desc: { vi: "1-on-1 mentoring, team training, technical workshops và career guidance.", en: "1-on-1 mentoring, team training, technical workshops and career guidance." }, price: { vi: "Từ $50/h", en: "From $50/h" } },
  { icon: "🤖", title: { vi: "AI Integration", en: "AI Integration" }, desc: { vi: "Tích hợp AI/ML vào ứng dụng: chatbot, recommendation, image/text processing.", en: "Integrating AI/ML into applications: chatbots, recommendations, image/text processing." }, price: { vi: "Từ $700", en: "From $700" } },
];

const testimonials = [
  { name: "Trần Minh Hoàng", role: { vi: "CEO, StartupXYZ", en: "CEO, StartupXYZ" }, text: { vi: "Làm việc với Nguyễn Dev là trải nghiệm tuyệt vời. Code chất lượng cao, deadline luôn đúng hạn và communication rất tốt.", en: "Working with Nguyen Dev was a great experience. High quality code, always on time and excellent communication." }, avatar: "https://ui-avatars.com/api/?name=TMH&background=6366f1&color=fff&size=64", rating: 5 },
  { name: "Sarah Johnson", role: { vi: "CTO, TechCorp", en: "CTO, TechCorp" }, text: { vi: "Một trong những developer giỏi nhất tôi từng làm việc cùng. Tư duy kỹ thuật xuất sắc và luôn đề xuất giải pháp sáng tạo.", en: "One of the best developers I've ever worked with. Outstanding technical thinking and always proposing creative solutions." }, avatar: "https://ui-avatars.com/api/?name=SJ&background=ec4899&color=fff&size=64", rating: 5 },
  { name: "Lê Văn Hùng", role: { vi: "Product Manager", en: "Product Manager" }, text: { vi: "Hiểu business requirement rất nhanh và translate thành technical solution hiệu quả. Sẽ tiếp tục hợp tác dài hạn.", en: "Understands business requirements quickly and translates them into effective technical solutions. Will continue long-term collaboration." }, avatar: "https://ui-avatars.com/api/?name=LVH&background=f59e0b&color=fff&size=64", rating: 5 },
  { name: "Maria Garcia", role: { vi: "Founder, HealthTrack", en: "Founder, HealthTrack" }, text: { vi: "Dev deliver app đúng vision của tôi, thậm chí còn tốt hơn kỳ vọng. Rất recommend!", en: "Dev delivered the app exactly to my vision, even exceeding expectations. Highly recommended!" }, avatar: "https://ui-avatars.com/api/?name=MG&background=0d9488&color=fff&size=64", rating: 5 },
];

const blogPosts = [
  { title: { vi: "Tối ưu React Performance: Hướng dẫn toàn diện 2024", en: "Optimizing React Performance: A Comprehensive Guide 2024" }, excerpt: { vi: "Khám phá các kỹ thuật nâng cao để tối ưu hiệu suất React app, từ memoization đến lazy loading.", en: "Explore advanced techniques to optimize React app performance, from memoization to lazy loading." }, date: "Dec 15, 2024", readTime: 12, cat: "React", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80", tags: ["React", "Performance", "JavaScript"] },
  { title: { vi: "Xây dựng Microservices với Node.js và Docker", en: "Building Microservices with Node.js and Docker" }, excerpt: { vi: "Hướng dẫn step-by-step xây dựng kiến trúc microservices production-ready với Node.js, Docker và Kubernetes.", en: "Step-by-step guide to building production-ready microservices architecture with Node.js, Docker and Kubernetes." }, date: "Nov 28, 2024", readTime: 18, cat: "Backend", image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&q=80", tags: ["Node.js", "Docker", "Microservices"] },
  { title: { vi: "TypeScript Tips & Tricks tôi ước biết sớm hơn", en: "TypeScript Tips & Tricks I Wish I Knew Earlier" }, excerpt: { vi: "15 kỹ thuật TypeScript nâng cao giúp code của bạn type-safe hơn, dễ đọc hơn và ít bug hơn.", en: "15 advanced TypeScript techniques to make your code more type-safe, readable and bug-free." }, date: "Nov 10, 2024", readTime: 10, cat: "TypeScript", image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=400&q=80", tags: ["TypeScript", "JavaScript", "Tips"] },
  { title: { vi: "Thiết kế Database Schema cho Scale", en: "Designing Database Schemas for Scale" }, excerpt: { vi: "Những nguyên tắc thiết kế database schema giúp ứng dụng của bạn scale từ 1K đến 1M người dùng.", en: "Database schema design principles to help your application scale from 1K to 1M users." }, date: "Oct 22, 2024", readTime: 15, cat: "Database", image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80", tags: ["Database", "PostgreSQL", "Architecture"] },
  { title: { vi: "CI/CD Pipeline với GitHub Actions", en: "CI/CD Pipeline with GitHub Actions" }, excerpt: { vi: "Hướng dẫn setup CI/CD pipeline hoàn chỉnh với GitHub Actions, từ testing đến auto-deploy.", en: "Guide to setting up a complete CI/CD pipeline with GitHub Actions, from testing to auto-deploy." }, date: "Oct 5, 2024", readTime: 8, cat: "DevOps", image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&q=80", tags: ["DevOps", "GitHub", "CI/CD"] },
  { title: { vi: "State Management trong 2024: Zustand vs Jotai vs Redux", en: "State Management in 2024: Zustand vs Jotai vs Redux" }, excerpt: { vi: "So sánh chi tiết các giải pháp state management phổ biến nhất và khi nào nên dùng cái nào.", en: "Detailed comparison of the most popular state management solutions and when to use each one." }, date: "Sep 18, 2024", readTime: 14, cat: "React", image: "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=400&q=80", tags: ["React", "State Management", "Zustand"] },
];

// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.15, ...options });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useTypewriter(words, speed = 100) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[wi];
    const timeout = setTimeout(() => {
      if (!del) {
        setDisplay(word.slice(0, ci + 1));
        if (ci + 1 === word.length) { setTimeout(() => setDel(true), 1500); }
        else setCi(c => c + 1);
      } else {
        setDisplay(word.slice(0, ci - 1));
        if (ci - 1 === 0) { setDel(false); setWi(w => (w + 1) % words.length); }
        else setCi(c => c - 1);
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [ci, del, wi, words, speed]);
  return display;
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────
function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)", transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center" style={{ marginBottom: "2rem" }}>
      <p className="text-sm font-bold tracking-widest uppercase" style={{ color: "#a78bfa", marginBottom: "1rem" }}>{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-black text-white" style={{ marginBottom: "1rem" }}>{title}</h2>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500"></div>
        <div className="w-2 h-2 rounded-full bg-violet-400"></div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500"></div>
      </div>
    </div>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ lang, setLang, tr }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["home", "about", "skills", "experience", "projects", "services", "blog", "contact"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <nav style={{ background: scrolled ? "rgba(5,5,15,0.9)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(139,92,246,0.2)" : "none", transition: "all 0.3s ease", position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "0 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
        {/* Logo */}
        <button onClick={() => scrollTo("home")} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "1.5rem", background: "linear-gradient(135deg, #a78bfa, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.02em" }}>
          &lt;LinhPN /&gt;
        </button>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }} className="hidden-mobile">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{ padding: "0.4rem 0.8rem", borderRadius: "8px", fontSize: "0.85rem", fontWeight: active === link ? 700 : 400, color: active === link ? "#a78bfa" : "rgba(255,255,255,0.7)", background: active === link ? "rgba(167,139,250,0.1)" : "transparent", border: "none", cursor: "pointer", transition: "all 0.2s", textTransform: "capitalize" }}>
              {tr.nav[link]}
            </button>
          ))}
        </div>

        {/* Lang Toggle + Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            style={{
              background: "rgba(167,139,250,0.15)",
              border: "1px solid rgba(167,139,250,0.3)",
              color: "#a78bfa",
              borderRadius: "20px",
              padding: "0.3rem 0.8rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <img
              src={
                lang === "vi"
                  ? "https://flagcdn.com/w20/vn.png"
                  : "https://flagcdn.com/w20/us.png"
              }
              alt="flag"
              style={{ width: "18px", height: "14px", borderRadius: "2px" }}
            />
            {lang === "vi" ? "VI" : "EN"}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile"
            style={{ background: "none", border: "none", color: "white", fontSize: "1.5rem", cursor: "pointer" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "rgba(5,5,15,0.98)", padding: "1rem 2rem 2rem", borderTop: "1px solid rgba(139,92,246,0.2)" }}>
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{ display: "block", width: "100%", textAlign: "left", padding: "0.75rem 0", color: "rgba(255,255,255,0.8)", background: "none", border: "none", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "1rem", cursor: "pointer", textTransform: "capitalize" }}>
              {tr.nav[link]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ lang, tr }) {
  const typed = useTypewriter(tr.hero.titles, 80);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "100px 2rem 4rem" }}>
      {/* BG Effects */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "10%", left: "5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", filter: "blur(40px)", animation: "pulse 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)", filter: "blur(40px)", animation: "pulse 8s ease-in-out infinite 2s" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", filter: "blur(60px)" }} />
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
        {/* Left */}
        <div>
          {/* Available badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "20px", padding: "0.4rem 1rem", marginBottom: "1.5rem", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.1s" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: "0.8rem", color: "#10b981", fontWeight: 600 }}>{tr.hero.available}</span>
          </div>

          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem", marginBottom: "0.5rem", opacity: mounted ? 1 : 0, transition: "all 0.6s ease 0.2s", transform: mounted ? "translateY(0)" : "translateY(20px)" }}>
            {tr.hero.greeting}
          </p>

          <h1
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.2, // tăng lên
              marginBottom: "0.75rem",
              opacity: mounted ? 1 : 0,
              transition: "all 0.6s ease 0.3s",
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              background: "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {tr.hero.name}
          </h1>

          <div style={{ height: "3rem", marginBottom: "1.5rem", opacity: mounted ? 1 : 0, transition: "all 0.6s ease 0.4s" }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 700, background: "linear-gradient(135deg, #a78bfa, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {typed}<span style={{ WebkitTextFillColor: "#a78bfa", animation: "blink 1s infinite" }}>|</span>
            </span>
          </div>

          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "480px", opacity: mounted ? 1 : 0, transition: "all 0.6s ease 0.5s", transform: mounted ? "translateY(0)" : "translateY(20px)" }}>
            {tr.hero.desc}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", opacity: mounted ? 1 : 0, transition: "all 0.6s ease 0.6s", transform: mounted ? "translateY(0)" : "translateY(20px)" }}>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "0.85rem 2rem", borderRadius: "12px", fontWeight: 700, fontSize: "0.95rem", background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "white", border: "none", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}
              onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
              {tr.hero.cta1} →
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "0.85rem 2rem", borderRadius: "12px", fontWeight: 700, fontSize: "0.95rem", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", transition: "all 0.3s", backdropFilter: "blur(10px)" }}
              onMouseEnter={e => { e.target.style.borderColor = "#a78bfa"; e.target.style.color = "#a78bfa"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "white"; }}>
              {tr.hero.cta2}
            </button>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", opacity: mounted ? 1 : 0, transition: "all 0.6s ease 0.7s" }}>
            {[{ icon: "⟨/⟩", label: "GitHub", href: "#" }, { icon: "in", label: "LinkedIn", href: "#" }, { icon: "𝕏", label: "Twitter", href: "#" }, { icon: "▶", label: "YouTube", href: "#" }].map(s => (
              <a key={s.label} href={s.href}
                style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 700, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(167,139,250,0.2)"; e.currentTarget.style.borderColor = "#a78bfa"; e.currentTarget.style.color = "#a78bfa"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Avatar */}
        <div style={{ display: "flex", justifyContent: "center", opacity: mounted ? 1 : 0, transition: "all 0.8s ease 0.4s", transform: mounted ? "translateY(0)" : "translateY(40px)" }}>
          <div style={{ position: "relative" }}>
            {/* Rotating rings */}
            <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", border: "1px dashed rgba(167,139,250,0.3)", animation: "spin 20s linear infinite" }} />
            <div style={{ position: "absolute", inset: "-40px", borderRadius: "50%", border: "1px dashed rgba(236,72,153,0.2)", animation: "spin 30s linear infinite reverse" }} />
            {/* Avatar */}
            <div style={{ width: "280px", height: "280px", borderRadius: "50%", overflow: "hidden", border: "3px solid rgba(167,139,250,0.4)", boxShadow: "0 0 60px rgba(124,58,237,0.3)", position: "relative" }}>
              <img src={avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(236,72,153,0.1))" }} />
            </div>
            {/* Floating badges */}
            <div style={{ position: "absolute", top: "-10px", right: "-20px", background: "#ffffff", border: "2px solid rgba(16,163,127,0.5)", borderRadius: "12px", padding: "0.5rem 0.75rem", backdropFilter: "blur(10px)", animation: "float 3s ease-in-out infinite" }}>
              <div style={{ color: "#10A37F", fontWeight: 700, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <img src={chatGptLogo} alt="ChatGPT" style={{ width: "16px", height: "16px" }} /> ChatGPT
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "10px", left: "-30px", background: "#ffffff", border: "2px solid rgba(167,139,250,0.5)", borderRadius: "12px", padding: "0.5rem 0.75rem", backdropFilter: "blur(10px)", animation: "float 3s ease-in-out infinite 1.5s" }}>
              <div style={{ color: "#000000", fontWeight: 700, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <img src={geminiLogo} alt="Gemini" style={{ width: "16px", height: "16px" }} /> Gemini
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "-60px",
                background: "#ffffff",
                border: "2px solid rgba(217,119,87,0.5)",
                borderRadius: "12px",
                padding: "0.5rem 0.75rem",
                backdropFilter: "blur(10px)",
                animation: "float 3s ease-in-out infinite 0.8s"
              }}
            >
              <div style={{ color: "#D97757", fontWeight: 700, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <img src={claudeLogo} alt="Claude" style={{ width: "16px", height: "16px" }} /> Claude
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "60%",
                right: "-60px",
                background: "#ffffff",
                border: "2px solid rgba(239,68,68,0.5)",
                borderRadius: "12px",
                padding: "0.5rem 0.75rem",
                backdropFilter: "blur(10px)",
                animation: "float 3s ease-in-out infinite 2s"
              }}
            >
              <div style={{ color: "#000000", fontWeight: 700, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <img src={grokLogo} alt="Grok" style={{ width: "16px", height: "16px" }} /> Grok
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>
        <span>{tr.hero.scroll}</span>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(167,139,250,0.5), transparent)", animation: "pulse 2s infinite" }} />
      </div>
    </section>
  );
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function Stats({ tr }) {
  return (
    <section style={{ padding: "2rem", background: "rgba(139,92,246,0.05)", borderTop: "1px solid rgba(139,92,246,0.1)", borderBottom: "1px solid rgba(139,92,246,0.1)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }} className="stats-grid">
        {tr.stats.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "linear-gradient(135deg, #a78bfa, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About({ lang, tr }) {
  const a = tr.about;
  return (
    <section id="about" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader title={a.title} subtitle={a.subtitle} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
          {/* Image side */}
          <AnimatedSection>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/5" }}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80" alt="about" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,15,0.7) 0%, transparent 60%)" }} />
              </div>
              {/* Experience badge */}
              <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", background: "rgba(5,5,15,0.8)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "16px", padding: "1rem 1.5rem", backdropFilter: "blur(20px)" }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 900, color: "#a78bfa" }}>5+</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>{lang === "vi" ? "Năm kinh nghiệm" : "Years of Experience"}</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection delay={0.2}>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.9, marginBottom: "1.25rem" }}>{a.p1}</p>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.9, marginBottom: "1.25rem" }}>{a.p2}</p>
            <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.9, marginBottom: "2rem" }}>{a.p3}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "2rem" }}>
              {Object.keys(a.labels).map(key => (
                <div key={key} style={{ display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "#a78bfa", fontWeight: 600, fontSize: "0.85rem", minWidth: "80px" }}>{a.labels[key]}:</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{a.info[key]}</span>
                </div>
              ))}
            </div>

            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 2rem", borderRadius: "12px", fontWeight: 700, background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "white", textDecoration: "none", transition: "all 0.3s", boxShadow: "0 0 30px rgba(124,58,237,0.3)" }}>
              ↓ {a.download}
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────
function Skills({ lang, tr }) {
  const [activeCat, setActiveCat] = useState("All");
  const cats = tr.skills.categories;
  const catKeys = ["All", "Frontend", "Backend", "DevOps", "Mobile", "Database"];
  const filtered = activeCat === "All" || activeCat === "Tất cả" ? skillsData : skillsData.filter(s => s.cat === catKeys[cats.indexOf(activeCat)]);

  return (
    <section id="skills" style={{ padding: "6rem 2rem", background: "rgba(139,92,246,0.03)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader title={tr.skills.title} subtitle={tr.skills.subtitle} />

        {/* Filter */}
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          {cats.map((cat, i) => (
            <button key={cat} onClick={() => setActiveCat(cat)}
              style={{ padding: "0.5rem 1.25rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, border: activeCat === cat ? "none" : "1px solid rgba(255,255,255,0.1)", background: activeCat === cat ? "linear-gradient(135deg, #7c3aed, #ec4899)" : "rgba(255,255,255,0.05)", color: "white", cursor: "pointer", transition: "all 0.2s" }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem" }}>
          {filtered.map((skill, i) => (
            <AnimatedSection key={skill.name} delay={i * 0.05}>
              <SkillCard skill={skill} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();
  return (
    <div ref={ref} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "rgba(167,139,250,0.1)" : "rgba(255,255,255,0.03)", border: `1px solid ${hovered ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.06)"}`, borderRadius: "16px", padding: "1.25rem", transition: "all 0.3s", cursor: "default", transform: hovered ? "translateY(-4px)" : "translateY(0)" }}>
      <div style={{ width: "2rem", height: "2rem", marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
        <StackIcon name={skill.icon} />
      </div>
      <div style={{ fontWeight: 700, color: "white", fontSize: "0.9rem", marginBottom: "0.75rem" }}>{skill.name}</div>
      <div style={{ height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
        <div style={{ height: "100%", borderRadius: "2px", background: `linear-gradient(90deg, #7c3aed, #ec4899)`, width: inView ? `${skill.level}%` : "0%", transition: "width 1.2s ease 0.3s" }} />
      </div>
      <div style={{ color: "#a78bfa", fontSize: "0.75rem", fontWeight: 700, marginTop: "0.4rem", textAlign: "right" }}>{skill.level}%</div>
    </div>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
function Experience({ lang, tr }) {
  const [tab, setTab] = useState(0);
  const tabs = tr.experience.tabs;

  return (
    <section id="experience" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeader title={tr.experience.title} subtitle={tr.experience.subtitle} />

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "3rem", background: "rgba(255,255,255,0.03)", borderRadius: "12px", padding: "0.25rem", border: "1px solid rgba(255,255,255,0.06)" }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)}
              style={{ flex: 1, padding: "0.6rem 1rem", borderRadius: "10px", fontSize: "0.85rem", fontWeight: 600, background: tab === i ? "linear-gradient(135deg, #7c3aed, #ec4899)" : "transparent", color: "white", border: "none", cursor: "pointer", transition: "all 0.3s" }}>
              {t}
            </button>
          ))}
        </div>

        {/* Work */}
        {tab === 0 && (
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "23px", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #7c3aed, #ec4899, transparent)" }} />
            {workExp.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div style={{ display: "flex", gap: "2rem", marginBottom: "2.5rem" }}>
                  <div style={{ flexShrink: 0, width: "48px", height: "48px", borderRadius: "12px", overflow: "hidden", border: "2px solid rgba(167,139,250,0.3)", position: "relative", zIndex: 1 }}>
                    <img src={exp.logo} alt={exp.company} style={{ width: "100%", height: "100%" }} />
                  </div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontWeight: 800, fontSize: "1.1rem", color: "white" }}>{exp.role[lang]}</h3>
                        <p style={{ color: "#a78bfa", fontWeight: 600, fontSize: "0.9rem" }}>{exp.company} · {exp.location}</p>
                      </div>
                      <span style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: "8px", padding: "0.3rem 0.75rem", color: "#a78bfa", fontSize: "0.8rem", fontWeight: 600, height: "fit-content" }}>{exp.period}</span>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "1rem" }}>{exp.desc[lang]}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {exp.tags.map(tag => (
                        <span key={tag} style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: "6px", padding: "0.2rem 0.6rem", fontSize: "0.75rem", color: "#c4b5fd", fontWeight: 600 }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Education */}
        {tab === 1 && (
          <div>
            {education.map((edu, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "1.5rem" }}>
                  <img src={edu.logo} alt={edu.school} style={{ width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontWeight: 800, color: "white", fontSize: "1rem" }}>{edu.degree[lang]}</h3>
                        <p style={{ color: "#a78bfa", fontSize: "0.9rem", fontWeight: 600 }}>{edu.school}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: "8px", padding: "0.3rem 0.75rem", color: "#a78bfa", fontSize: "0.8rem", fontWeight: 600 }}>{edu.period}</span>
                        {edu.gpa && <p style={{ color: "#10b981", fontSize: "0.8rem", marginTop: "0.25rem", fontWeight: 600 }}>GPA: {edu.gpa}</p>}
                      </div>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.7, marginTop: "0.5rem" }}>{edu.desc[lang]}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Certs */}
        {tab === 2 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
            {certs.map((cert, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "1.25rem", textAlign: "center", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <img src={cert.badge} alt={cert.name} style={{ width: "56px", height: "56px", borderRadius: "12px", marginBottom: "0.75rem" }} />
                  <h4 style={{ color: "white", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{cert.name}</h4>
                  <p style={{ color: "#a78bfa", fontSize: "0.78rem" }}>{cert.issuer} · {cert.year}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects({ lang, tr }) {
  const [filter, setFilter] = useState(0);
  const filters = tr.projects.filters;
  const filterKeys = ["All", "Web App", "Mobile", "Open Source", "API"];
  const filtered = filter === 0 ? projects : projects.filter(p => p.cat === filterKeys[filter]);

  return (
    <section id="projects" style={{ padding: "6rem 2rem", background: "rgba(139,92,246,0.03)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader title={tr.projects.title} subtitle={tr.projects.subtitle} />

        {/* Filters */}
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          {filters.map((f, i) => (
            <button key={f} onClick={() => setFilter(i)}
              style={{ padding: "0.5rem 1.25rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, border: filter === i ? "none" : "1px solid rgba(255,255,255,0.1)", background: filter === i ? "linear-gradient(135deg, #7c3aed, #ec4899)" : "rgba(255,255,255,0.05)", color: "white", cursor: "pointer", transition: "all 0.2s" }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {filtered.map((proj, i) => (
            <AnimatedSection key={proj.title} delay={i * 0.1}>
              <ProjectCard proj={proj} lang={lang} tr={tr} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ proj, lang, tr }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${hovered ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.06)"}`, borderRadius: "20px", overflow: "hidden", transition: "all 0.3s", transform: hovered ? "translateY(-6px)" : "translateY(0)", boxShadow: hovered ? "0 20px 60px rgba(124,58,237,0.15)" : "none" }}>
      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
        <img src={proj.image} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s", transform: hovered ? "scale(1.05)" : "scale(1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,15,0.9) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", gap: "0.5rem" }}>
          <span style={{ background: "rgba(167,139,250,0.2)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "6px", padding: "0.2rem 0.6rem", fontSize: "0.72rem", color: "#c4b5fd", fontWeight: 600, backdropFilter: "blur(10px)" }}>{proj.cat}</span>
          {proj.featured && <span style={{ background: "rgba(251,191,36,0.2)", border: "1px solid rgba(251,191,36,0.3)", borderRadius: "6px", padding: "0.2rem 0.6rem", fontSize: "0.72rem", color: "#fbbf24", fontWeight: 600, backdropFilter: "blur(10px)" }}>⭐ Featured</span>}
        </div>
        <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
          <span style={{ color: "#10b981", fontWeight: 700, fontSize: "0.8rem" }}>📈 {proj.metrics[lang]}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem" }}>
        <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "white", marginBottom: "0.5rem" }}>{proj.title}</h3>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1rem" }}>{proj.desc[lang]}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
          {proj.tags.map(tag => (
            <span key={tag} style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: "5px", padding: "0.15rem 0.5rem", fontSize: "0.72rem", color: "#c4b5fd", fontWeight: 600 }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a href={proj.demo} style={{ flex: 1, textAlign: "center", padding: "0.55rem", borderRadius: "10px", background: "linear-gradient(135deg, #7c3aed, #ec4899)", color: "white", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700 }}>↗ {tr.projects.demo}</a>
          <a href={proj.code} style={{ flex: 1, textAlign: "center", padding: "0.55rem", borderRadius: "10px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "white", textDecoration: "none", fontSize: "0.8rem", fontWeight: 700 }}>⟨/⟩ {tr.projects.code}</a>
        </div>
      </div>
    </div>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function Services({ lang, tr }) {
  return (
    <section id="services" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader title={tr.services.title} subtitle={tr.services.subtitle} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {services.map((svc, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <ServiceCard svc={svc} lang={lang} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ svc, lang }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.08))" : "rgba(255,255,255,0.03)", border: `1px solid ${hovered ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.06)"}`, borderRadius: "20px", padding: "2rem", transition: "all 0.3s", cursor: "default", transform: hovered ? "translateY(-4px)" : "translateY(0)" }}>
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{svc.icon}</div>
      <h3 style={{ fontWeight: 800, color: "white", fontSize: "1rem", marginBottom: "0.5rem" }}>{svc.title[lang]}</h3>
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{svc.desc[lang]}</p>
      <div style={{ color: "#a78bfa", fontWeight: 800, fontSize: "0.9rem" }}>{svc.price[lang]}</div>
    </div>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials({ lang, tr }) {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: "6rem 2rem", background: "rgba(139,92,246,0.03)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionHeader title={tr.testimonials.title} subtitle={tr.testimonials.subtitle} />
        <div style={{ position: "relative" }}>
          <AnimatedSection>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", padding: "3rem", textAlign: "center" }}>
              <div style={{ fontSize: "4rem", marginBottom: "1.5rem", opacity: 0.2, fontFamily: "serif", color: "#a78bfa" }}>"</div>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: "2rem" }}>{testimonials[active].text[lang]}</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                <img src={testimonials[active].avatar} alt={testimonials[active].name} style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid rgba(167,139,250,0.3)" }} />
                <div style={{ textAlign: "left" }}>
                  <div style={{ color: "white", fontWeight: 700 }}>{testimonials[active].name}</div>
                  <div style={{ color: "#a78bfa", fontSize: "0.85rem" }}>{testimonials[active].role[lang]}</div>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  {"★".repeat(testimonials[active].rating).split("").map((_, i) => (
                    <span key={i} style={{ color: "#fbbf24", fontSize: "1.1rem" }}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2rem" }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{ width: i === active ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === active ? "linear-gradient(90deg, #7c3aed, #ec4899)" : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── BLOG ─────────────────────────────────────────────────────────────────────
function Blog({ lang, tr }) {
  return (
    <section id="blog" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader title={tr.blog.title} subtitle={tr.blog.subtitle} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
          {blogPosts.map((post, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <BlogCard post={post} lang={lang} tr={tr} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, lang, tr }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${hovered ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.06)"}`, borderRadius: "20px", overflow: "hidden", transition: "all 0.3s", cursor: "pointer", transform: hovered ? "translateY(-4px)" : "translateY(0)" }}>
      <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
        <img src={post.image} alt={post.title[lang]} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s", transform: hovered ? "scale(1.05)" : "scale(1)" }} />
      </div>
      <div style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
          <span style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: "6px", padding: "0.2rem 0.6rem", fontSize: "0.72rem", color: "#a78bfa", fontWeight: 700 }}>{post.cat}</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>{post.date} · {post.readTime} {tr.blog.minRead}</span>
        </div>
        <h3 style={{ fontWeight: 800, color: "white", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "0.6rem" }}>{post.title[lang]}</h3>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.83rem", lineHeight: 1.6, marginBottom: "1rem" }}>{post.excerpt[lang]}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} style={{ background: "rgba(124,58,237,0.1)", borderRadius: "4px", padding: "0.15rem 0.4rem", fontSize: "0.7rem", color: "#c4b5fd" }}>{tag}</span>
            ))}
          </div>
          <span style={{ color: "#a78bfa", fontSize: "0.83rem", fontWeight: 700 }}>{tr.blog.readMore} →</span>
        </div>
      </div>
    </div>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact({ lang, tr }) {
  const c = tr.contact;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" style={{ padding: "6rem 2rem", background: "rgba(139,92,246,0.03)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader title={c.title} subtitle={c.subtitle} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
          {/* Info */}
          <AnimatedSection>
            <h3 style={{ color: "white", fontWeight: 800, fontSize: "1.3rem", marginBottom: "1rem" }}>{c.info}</h3>
            {[
              { icon: "📍", label: "Hanoi, Vietnam" },
              { icon: "📧", label: "dev@example.com" },
              { icon: "📱", label: "+84 901 234 567" },
              { icon: "🌐", label: "www.nguyendev.com" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{item.label}</span>
              </div>
            ))}

            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginTop: "1.5rem", marginBottom: "1rem" }}>{c.or}</p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[{ n: "GitHub", i: "⟨/⟩", c: "#333" }, { n: "LinkedIn", i: "in", c: "#0A66C2" }, { n: "Twitter", i: "𝕏", c: "#1DA1F2" }, { n: "YouTube", i: "▶", c: "#FF0000" }].map(s => (
                <a key={s.n} href="#"
                  style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(167,139,250,0.15)"; e.currentTarget.style.borderColor = "#a78bfa"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  {s.i}
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                {[{ key: "name", label: c.name }, { key: "email", label: c.email }].map(f => (
                  <div key={f.key}>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", marginBottom: "0.4rem", fontWeight: 600 }}>{f.label}</label>
                    <input type={f.key === "email" ? "email" : "text"} value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      style={{ width: "100%", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "white", fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", marginBottom: "0.4rem", fontWeight: 600 }}>{c.subject}</label>
                <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                  style={{ width: "100%", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "white", fontSize: "0.9rem", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", marginBottom: "0.4rem", fontWeight: 600 }}>{c.message}</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5}
                  style={{ width: "100%", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "white", fontSize: "0.9rem", outline: "none", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={handle}
                style={{ width: "100%", padding: "0.9rem", borderRadius: "12px", fontWeight: 800, fontSize: "1rem", background: sent ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #7c3aed, #ec4899)", color: "white", border: "none", cursor: "pointer", transition: "all 0.3s", boxShadow: "0 0 30px rgba(124,58,237,0.3)" }}>
                {sent ? "✓ Sent!" : `✉ ${c.send}`}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ lang, tr }) {
  return (
    <footer style={{ padding: "3rem 2rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "1.5rem", background: "linear-gradient(135deg, #a78bfa, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "1rem" }}>&lt;LinhPN /&gt;</div>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{tr.footer.built}</p>
      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>© 2024 Nguyen Dev. {tr.footer.rights}.</p>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [lang, setLang] = useState("vi");
  const tr = t[lang];

  return (
    <div style={{ background: "#05050f", color: "white", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #05050f; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 3px; }

        @keyframes pulse { 0%, 100% { opacity: 0.7; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus { border-color: rgba(167,139,250,0.5) !important; }

        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none; }
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child { display: none; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>

      <Navbar lang={lang} setLang={setLang} tr={tr} />
      <Hero lang={lang} tr={tr} />
      <Stats tr={tr} />
      <About lang={lang} tr={tr} />
      <Skills lang={lang} tr={tr} />
      <Experience lang={lang} tr={tr} />
      <Projects lang={lang} tr={tr} />
      <Services lang={lang} tr={tr} />
      <Testimonials lang={lang} tr={tr} />
      <Blog lang={lang} tr={tr} />
      <Contact lang={lang} tr={tr} />
      <Footer lang={lang} tr={tr} />
    </div>
  );
}