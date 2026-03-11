import fsaExperience from "../assets/exp/fsa.webp";
import fptuEducation from "../assets/edu/fptu.webp";
import certEthical from "../assets/certification/ethical-it-cert.pdf";
import certPm from "../assets/certification/project-management-cert.pdf";
import certSdlc from "../assets/certification/software-development-lifecycle-cert.pdf";
import certWebDesign from "../assets/certification/web-design-cert.pdf";

export const workExp = [
  {
    role: { vi: "Thực Tập Sinh Java", en: "Java Intern" },
    company: "FPT Software Academy",
    period: "05/2025 - 08/2025",
    location: "Hà Nội",
    desc: {
      vi: [
        "Dẫn dắt team 5 người xây dựng nền tảng SaaS phục vụ hơn 100K người dùng.",
        "Tối ưu performance giảm 40% load time.",
      ],
      en: [
        "Led a 5-person team building a SaaS platform serving 100K+ users.",
        "Optimized performance reducing load time by 40%.",
      ],
    },
    tags: [
      "Thmeleaf",
      "Spring Boot",
      "MySQL",
      "AI Studio",
      "Jira",
      "Git",
      "Gitlab",
      "HTML/CSS/Javascript",
    ],
    logo: fsaExperience,
  },
];

export const education = [
  {
    degree: {
      vi: "Cử nhân Kỹ Thuật Phần Mềm",
      en: "Bachelor of Software Engineering",
    },
    school: { vi: "Đại học FPT", en: "FPT University" },
    period: "2022 - 2026",
    gpa: "3.0/4.0",
    desc: {
      vi: [
        "Chuyên ngành Kỹ thuật phần mềm.",
        "Tốt nghiệp xuất sắc.",
        "Đồ án tốt nghiệp về AI-powered recommendation system.",
      ],
      en: [
        "Software Engineering major.",
        "Graduated with honors.",
        "Thesis on AI-powered recommendation systems.",
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

