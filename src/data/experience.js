import fsaExperience from "../assets/exp/fsa.webp";
import fptuEducation from "../assets/edu/fptu.webp";
import certEthical from "../assets/certification/ethical-it-cert.pdf";
import certPm from "../assets/certification/project-management-cert.pdf";
import certSdlc from "../assets/certification/software-development-lifecycle-cert.pdf";
import certWebDesign from "../assets/certification/web-design-cert.pdf";

export const workExp = [
  {
    role: { vi: "Java Trainee", en: "Java Trainee" },
    company: "FPT Software Academy",
    period: "05/2025 - 08/2025",
    location: "Hà Nội",
    desc: {
      vi: [
        "Hoàn thành chương trình đào tạo phát triển phần mềm chuyên sâu theo chuẩn doanh nghiệp.",
        "Xây dựng một dự án web mô phỏng, áp dụng kiến thức về Spring Framework và thiết kế cơ sở dữ liệu.",
        "Phối hợp cùng các trainee khác trong môi trường Agile mô phỏng, dùng Git/GitHub để quản lý phiên bản mã nguồn và Jira để theo dõi công việc, lập kế hoạch sprint.",
      ],
      en: [
        "Completed an intensive, enterprise-standard software development training program.",
        "Built a simulated web project applying knowledge of the Spring Framework and database design.",
        "Collaborated with fellow trainees in a simulated Agile environment, using Git/GitHub for source control and Jira for task tracking and sprint planning.",
      ],
    },
    tags: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "MySQL",
      "Git/GitHub",
      "Jira",
      "Agile",
    ],
    logo: fsaExperience,
  },
];

export const education = [
  {
    degree: {
      vi: "Cử nhân Kỹ thuật Phần mềm",
      en: "Bachelor in Software Engineering",
    },
    school: { vi: "Đại học FPT", en: "FPT University" },
    period: "2022 - 2026",
    gpa: "3.2/4.0",
    desc: {
      vi: [
        "Chuyên ngành Kỹ thuật phần mềm.",
        "Đồ án tốt nghiệp ITSeek — nền tảng tuyển dụng IT tích hợp AI (Spring Boot, Angular, Gemini).",
      ],
      en: [
        "Software Engineering major.",
        "Capstone project ITSeek — an AI-powered IT recruitment platform (Spring Boot, Angular, Gemini).",
      ],
    },
    logo: fptuEducation,
  },
];

export const certs = [
  {
    name: "Software Development Lifecycle - Coursera",
    issuer: "University of Minnesota",
    year: "2025",
    badge:
      "https://images.seeklogo.com/logo-png/48/3/university-of-minnesota-logo-png_seeklogo-486602.png",
    pdf: certSdlc,
  },
  {
    name: "Web Design for Everybody - Coursera",
    issuer: "University of Michigan",
    year: "2024",
    badge:
      "https://images.higheredjobs.com/images/instProfile/logo-15349.jpg?77E2DDB2-D1B8-5005-F67F339FF4AB8F45",
    pdf: certWebDesign,
  },
  {
    name: "CertNexus Certified Ethical Emerging Technologist - Coursera",
    issuer: "CertNexus",
    year: "2025",
    badge:
      "https://trainingcamp.com/wp-content/uploads/2024/12/certnexuspartner.png",
    pdf: certEthical,
  },
  {
    name: "Project Management Principles and Practices - Coursera",
    issuer: "University of California, Irvine",
    year: "2025",
    badge:
      "https://business.time.com/wp-content/uploads/sites/2/2012/06/uci.jpg?w=360&h=240&crop=1",
    pdf: certPm,
  },
];

