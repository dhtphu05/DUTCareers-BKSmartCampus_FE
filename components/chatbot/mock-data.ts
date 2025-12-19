// Mock data for DUT AI Mentor Chatbot
import { CompanyData, RoadmapData } from "./types"

export const MOCK_COMPANIES: CompanyData[] = [
    {
        id: "comp_001",
        name: "FPT Software Đà Nẵng",
        logo: "🏢",
        position: "AI Engineer",
        location: "Đà Nẵng",
        salary: "15-25 triệu",
        skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning"],
        description: "Phát triển các giải pháp AI cho khách hàng quốc tế",
        link: "/companies/fpt-software",
    },
    {
        id: "comp_002",
        name: "Enclave",
        logo: "🔒",
        position: "AI Engineer",
        location: "Đà Nẵng",
        salary: "20-30 triệu",
        skills: ["Python", "Deep Learning", "NLP", "Computer Vision"],
        description: "Startup công nghệ chuyên về AI và Blockchain",
        link: "/companies/enclave",
    },
    {
        id: "comp_003",
        name: "TMA Solutions",
        logo: "💼",
        position: "Fullstack Developer",
        location: "Đà Nẵng",
        salary: "12-20 triệu",
        skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
        description: "Công ty phần mềm hàng đầu Việt Nam",
        link: "/companies/tma-solutions",
    },
    {
        id: "comp_004",
        name: "LG CNS Vietnam",
        logo: "📱",
        position: "Fullstack Developer",
        location: "Đà Nẵng",
        salary: "15-25 triệu",
        skills: ["Java", "Spring Boot", "React", "AWS"],
        description: "Tập đoàn công nghệ hàng đầu Hàn Quốc",
        link: "/companies/lg-cns",
    },
    {
        id: "comp_005",
        name: "Gameloft Đà Nẵng",
        logo: "🎮",
        position: "Mobile Developer",
        location: "Đà Nẵng",
        salary: "15-22 triệu",
        skills: ["Unity", "C#", "iOS", "Android"],
        description: "Studio phát triển game mobile hàng đầu thế giới",
        link: "/companies/gameloft",
    },
    {
        id: "comp_006",
        name: "Niteco Vietnam",
        logo: "🌐",
        position: "Frontend Developer",
        location: "Đà Nẵng",
        salary: "10-18 triệu",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        description: "Công ty tư vấn chuyển đổi số từ Thụy Điển",
        link: "/companies/niteco",
    },
    {
        id: "comp_007",
        name: "Viettel Digital",
        logo: "📡",
        position: "Data Scientist",
        location: "Đà Nẵng",
        salary: "18-28 triệu",
        skills: ["Python", "SQL", "Machine Learning", "Statistics"],
        description: "Tập đoàn viễn thông và công nghệ số lớn nhất VN",
        link: "/companies/viettel-digital",
    },
    {
        id: "comp_008",
        name: "Fossil Group",
        logo: "⌚",
        position: "Backend Developer",
        location: "Đà Nẵng",
        salary: "12-20 triệu",
        skills: ["Java", "Spring", "Microservices", "Docker"],
        description: "Tập đoàn thời trang công nghệ Mỹ",
        link: "/companies/fossil",
    },
    {
        id: "comp_009",
        name: "Axon Active",
        logo: "🚀",
        position: "AI Engineer",
        location: "Đà Nẵng",
        salary: "18-30 triệu",
        skills: ["Python", "Machine Learning", "AWS", "Docker"],
        description: "Công ty phần mềm Thụy Sĩ chuyên về AI",
        link: "/companies/axon-active",
    },
    {
        id: "comp_010",
        name: "Duy Tan Software Park",
        logo: "🏫",
        position: "Data Scientist",
        location: "Đà Nẵng",
        salary: "10-18 triệu",
        skills: ["Python", "R", "Data Analysis", "Visualization"],
        description: "Khu công viên phần mềm Đại học Duy Tân",
        link: "/companies/dtu-software-park",
    },
]

export const MOCK_ROADMAPS: Record<string, RoadmapData> = {
    "ai engineer": {
        title: "Lộ trình AI Engineer",
        careerGoal: "AI Engineer",
        totalDuration: "4 năm",
        phases: [
            {
                phase: "Nền tảng (Năm 1-2)",
                duration: "2 năm",
                courses: [
                    { code: "IT001", name: "Nhập môn lập trình", credits: 4 },
                    { code: "IT002", name: "Lập trình hướng đối tượng", credits: 4 },
                    { code: "IT003", name: "Cấu trúc dữ liệu và giải thuật", credits: 4 },
                    { code: "IT004", name: "Cơ sở dữ liệu", credits: 4 },
                    { code: "MT001", name: "Toán cao cấp 1", credits: 3 },
                    { code: "MT002", name: "Xác suất thống kê", credits: 3 },
                    { code: "MT003", name: "Đại số tuyến tính", credits: 3 },
                ],
            },
            {
                phase: "Chuyên sâu (Năm 3)",
                duration: "1 năm",
                courses: [
                    { code: "IT089", name: "Học máy (Machine Learning)", credits: 4 },
                    { code: "IT090", name: "Xử lý ngôn ngữ tự nhiên", credits: 4 },
                    { code: "IT091", name: "Thị giác máy tính", credits: 4 },
                    { code: "IT092", name: "Học sâu (Deep Learning)", credits: 4 },
                    { code: "IT093", name: "Big Data", credits: 3 },
                ],
            },
            {
                phase: "Thực hành & Dự án (Năm 4)",
                duration: "1 năm",
                courses: [
                    { code: "IT094", name: "Đồ án AI", credits: 4 },
                    { code: "IT095", name: "Thực tập doanh nghiệp", credits: 3 },
                    { code: "IT096", name: "Khóa luận tốt nghiệp", credits: 10 },
                ],
            },
        ],
    },
    "fullstack developer": {
        title: "Lộ trình Fullstack Developer",
        careerGoal: "Fullstack Developer",
        totalDuration: "3.5 năm",
        phases: [
            {
                phase: "Nền tảng (Năm 1-2)",
                duration: "2 năm",
                courses: [
                    { code: "IT001", name: "Nhập môn lập trình", credits: 4 },
                    { code: "IT002", name: "Lập trình hướng đối tượng", credits: 4 },
                    { code: "IT003", name: "Cấu trúc dữ liệu và giải thuật", credits: 4 },
                    { code: "IT004", name: "Cơ sở dữ liệu", credits: 4 },
                    { code: "IT005", name: "Mạng máy tính", credits: 3 },
                ],
            },
            {
                phase: "Chuyên ngành Web (Năm 3)",
                duration: "1 năm",
                courses: [
                    { code: "IT070", name: "Lập trình Web", credits: 4 },
                    { code: "IT071", name: "Frontend Framework (React)", credits: 4 },
                    { code: "IT072", name: "Backend Development (Node.js)", credits: 4 },
                    { code: "IT073", name: "RESTful API Design", credits: 3 },
                    { code: "IT074", name: "DevOps cơ bản", credits: 3 },
                ],
            },
            {
                phase: "Nâng cao & Thực chiến (Năm 4)",
                duration: "6 tháng",
                courses: [
                    { code: "IT075", name: "Microservices Architecture", credits: 4 },
                    { code: "IT076", name: "Cloud Computing (AWS/Azure)", credits: 3 },
                    { code: "IT077", name: "Đồ án Fullstack", credits: 4 },
                    { code: "IT095", name: "Thực tập doanh nghiệp", credits: 3 },
                ],
            },
        ],
    },
    "data scientist": {
        title: "Lộ trình Data Scientist",
        careerGoal: "Data Scientist",
        totalDuration: "4 năm",
        phases: [
            {
                phase: "Nền tảng Toán & Lập trình (Năm 1-2)",
                duration: "2 năm",
                courses: [
                    { code: "IT001", name: "Nhập môn lập trình", credits: 4 },
                    { code: "IT002", name: "Lập trình Python", credits: 4 },
                    { code: "MT001", name: "Toán cao cấp", credits: 3 },
                    { code: "MT002", name: "Xác suất thống kê", credits: 3 },
                    { code: "MT003", name: "Đại số tuyến tính", credits: 3 },
                    { code: "IT004", name: "Cơ sở dữ liệu", credits: 4 },
                ],
            },
            {
                phase: "Phân tích dữ liệu (Năm 3)",
                duration: "1 năm",
                courses: [
                    { code: "IT080", name: "Data Mining", credits: 4 },
                    { code: "IT081", name: "Machine Learning", credits: 4 },
                    { code: "IT082", name: "Data Visualization", credits: 3 },
                    { code: "IT083", name: "SQL nâng cao", credits: 3 },
                    { code: "IT093", name: "Big Data Analytics", credits: 4 },
                ],
            },
            {
                phase: "Chuyên sâu & Ứng dụng (Năm 4)",
                duration: "1 năm",
                courses: [
                    { code: "IT084", name: "Deep Learning for Data Science", credits: 4 },
                    { code: "IT085", name: "Business Intelligence", credits: 3 },
                    { code: "IT086", name: "Đồ án Data Science", credits: 4 },
                    { code: "IT095", name: "Thực tập doanh nghiệp", credits: 3 },
                ],
            },
        ],
    },
    "mobile developer": {
        title: "Lộ trình Mobile Developer",
        careerGoal: "Mobile Developer",
        totalDuration: "3.5 năm",
        phases: [
            {
                phase: "Nền tảng (Năm 1-2)",
                duration: "2 năm",
                courses: [
                    { code: "IT001", name: "Nhập môn lập trình", credits: 4 },
                    { code: "IT002", name: "Lập trình hướng đối tượng", credits: 4 },
                    { code: "IT003", name: "Cấu trúc dữ liệu và giải thuật", credits: 4 },
                    { code: "IT004", name: "Cơ sở dữ liệu", credits: 4 },
                    { code: "IT006", name: "Thiết kế giao diện", credits: 3 },
                ],
            },
            {
                phase: "Phát triển Mobile (Năm 3)",
                duration: "1 năm",
                courses: [
                    { code: "IT060", name: "Lập trình Android", credits: 4 },
                    { code: "IT061", name: "Lập trình iOS", credits: 4 },
                    { code: "IT062", name: "React Native", credits: 4 },
                    { code: "IT063", name: "Mobile UI/UX", credits: 3 },
                    { code: "IT064", name: "Mobile Backend Integration", credits: 3 },
                ],
            },
            {
                phase: "Nâng cao & Thực chiến (Năm 4)",
                duration: "6 tháng",
                courses: [
                    { code: "IT065", name: "Mobile App Performance", credits: 3 },
                    { code: "IT066", name: "Mobile Security", credits: 3 },
                    { code: "IT067", name: "Đồ án Mobile App", credits: 4 },
                    { code: "IT095", name: "Thực tập doanh nghiệp", credits: 3 },
                ],
            },
        ],
    },
}

// Helper functions
export function searchCompanies(position?: string, skills?: string[]): CompanyData[] {
    let results = MOCK_COMPANIES

    if (position) {
        const positionLower = position.toLowerCase().trim()

        // Normalize position variations for better matching
        const normalizedPosition = positionLower
            .replace(/[-\s]+/g, " ") // Normalize hyphens and spaces
            .replace(/developer|dev/gi, "developer") // Normalize developer variations
            .trim()

        results = results.filter((company) => {
            const companyPosition = company.position.toLowerCase()

            // Exact match
            if (companyPosition.includes(normalizedPosition)) {
                return true
            }

            // Fuzzy matching for common variations
            // "fullstack" matches "Fullstack Developer"
            // "mobile" matches "Mobile Developer"
            // "ai" matches "AI Engineer"
            // "frontend" matches "Frontend Developer"
            // "backend" matches "Backend Developer"
            // "data scientist" matches "Data Scientist"

            const positionKeywords = normalizedPosition.split(" ")
            return positionKeywords.every(keyword =>
                companyPosition.includes(keyword) ||
                // Handle abbreviations
                (keyword === "ai" && companyPosition.includes("ai")) ||
                (keyword === "ml" && companyPosition.includes("machine learning"))
            )
        })
    }

    if (skills && skills.length > 0) {
        results = results.filter((company) =>
            skills.some((skill) =>
                company.skills.some((companySkill) =>
                    companySkill.toLowerCase().includes(skill.toLowerCase())
                )
            )
        )
    }

    return results
}

export function getRoadmap(careerGoal: string): RoadmapData | null {
    const key = careerGoal.toLowerCase().trim()

    // Direct match
    if (MOCK_ROADMAPS[key]) {
        return MOCK_ROADMAPS[key]
    }

    // Fuzzy matching for roadmap keys
    const normalizedKey = key
        .replace(/[-\s]+/g, " ")
        .replace(/developer|dev/gi, "developer")
        .trim()

    // Try to find a matching roadmap
    for (const [roadmapKey, roadmapData] of Object.entries(MOCK_ROADMAPS)) {
        if (roadmapKey.includes(normalizedKey) || normalizedKey.includes(roadmapKey)) {
            return roadmapData
        }
    }

    return null
}

