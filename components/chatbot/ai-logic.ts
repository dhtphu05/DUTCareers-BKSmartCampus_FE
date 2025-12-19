// AI Logic for DUT AI Mentor Chatbot
import { MessageType, UserIntent, IntentAnalysis, EnhancedMessage, CompanyData, RoadmapData } from "./types"
import { searchCompanies, getRoadmap } from "./mock-data"

/**
 * Classify user intent and extract entities from query
 */
export function classifyIntent(query: string): IntentAnalysis {
    const queryLower = query.toLowerCase()

    // Keywords for different intents
    const jobKeywords = ["tìm việc", "công ty", "tuyển dụng", "vị trí", "job", "career", "làm việc", "ứng tuyển", "tuyển"]
    const roadmapKeywords = ["lộ trình", "học", "môn học", "roadmap", "học tập", "khóa học", "chương trình"]
    const cvKeywords = ["cv", "resume", "hồ sơ", "review cv", "sửa cv"]

    const hasJobIntent = jobKeywords.some((keyword) => queryLower.includes(keyword))
    const hasRoadmapIntent = roadmapKeywords.some((keyword) => queryLower.includes(keyword))
    const hasCVIntent = cvKeywords.some((keyword) => queryLower.includes(keyword))

    // Enhanced position detection with variations and aliases
    const positionPatterns = [
        {
            keywords: ["ai engineer", "ai", "artificial intelligence", "trí tuệ nhân tạo"],
            canonical: "ai engineer"
        },
        {
            keywords: ["fullstack developer", "fullstack", "full-stack", "full stack", "fullstack dev"],
            canonical: "fullstack developer"
        },
        {
            keywords: ["data scientist", "data science", "khoa học dữ liệu"],
            canonical: "data scientist"
        },
        {
            keywords: ["mobile developer", "mobile dev", "mobile", "di động"],
            canonical: "mobile developer"
        },
        {
            keywords: ["frontend developer", "frontend", "front-end", "front end", "fe dev"],
            canonical: "frontend developer"
        },
        {
            keywords: ["backend developer", "backend", "back-end", "back end", "be dev"],
            canonical: "backend developer"
        },
        {
            keywords: ["devops", "dev ops"],
            canonical: "devops"
        },
    ]

    let position: string | undefined
    let careerGoal: string | undefined

    // Try to match position patterns
    for (const pattern of positionPatterns) {
        for (const keyword of pattern.keywords) {
            if (queryLower.includes(keyword)) {
                position = pattern.canonical
                careerGoal = pattern.canonical
                break
            }
        }
        if (position) break
    }

    // Determine intent
    if (hasJobIntent && hasRoadmapIntent) {
        return {
            intent: UserIntent.COMBINED_SEARCH,
            entities: { position, careerGoal },
        }
    } else if (hasJobIntent) {
        return {
            intent: UserIntent.JOB_SEARCH,
            entities: { position },
        }
    } else if (hasRoadmapIntent) {
        return {
            intent: UserIntent.LEARNING_ROADMAP,
            entities: { careerGoal },
        }
    } else if (hasCVIntent) {
        return {
            intent: UserIntent.CV_REVIEW,
            entities: {},
        }
    }

    return {
        intent: UserIntent.GENERAL_QUESTION,
        entities: {},
    }
}

/**
 * Generate bot response based on user query
 */
export function generateResponse(query: string, messageId: number): EnhancedMessage {
    const analysis = classifyIntent(query)
    const { intent, entities } = analysis

    switch (intent) {
        case UserIntent.JOB_SEARCH: {
            const companies = searchCompanies(entities.position)

            if (companies.length === 0) {
                return {
                    id: messageId,
                    role: "bot",
                    content: `Hiện tại mình chưa tìm thấy công ty nào tuyển vị trí "${entities.position}". Bạn có thể thử tìm kiếm với từ khóa khác hoặc xem các vị trí khác nhé! 🔍`,
                    type: MessageType.TEXT,
                    timestamp: new Date(),
                }
            }

            return {
                id: messageId,
                role: "bot",
                content: `Dưới đây là ${companies.length} công ty đang tuyển vị trí ${entities.position || "phù hợp"} tại Đà Nẵng:`,
                type: MessageType.COMPANY_LIST,
                data: { companies },
                timestamp: new Date(),
            }
        }

        case UserIntent.LEARNING_ROADMAP: {
            const roadmap = getRoadmap(entities.careerGoal || "")

            if (!roadmap) {
                return {
                    id: messageId,
                    role: "bot",
                    content:
                        "Mình có lộ trình cho các vị trí: AI Engineer, Fullstack Developer, Data Scientist, và Mobile Developer. Bạn muốn xem lộ trình nào? 🎯",
                    type: MessageType.TEXT,
                    timestamp: new Date(),
                }
            }

            return {
                id: messageId,
                role: "bot",
                content: `Đây là lộ trình chi tiết để trở thành ${roadmap.careerGoal} tại ĐH Bách Khoa Đà Nẵng:`,
                type: MessageType.ROADMAP,
                data: { roadmap },
                timestamp: new Date(),
            }
        }

        case UserIntent.COMBINED_SEARCH: {
            const companies = searchCompanies(entities.position)
            const roadmap = getRoadmap(entities.careerGoal || "")

            if (companies.length === 0 && !roadmap) {
                return {
                    id: messageId,
                    role: "bot",
                    content: "Mình chưa tìm thấy thông tin phù hợp. Bạn có thể nói rõ hơn về vị trí công việc bạn quan tâm không? 😊",
                    type: MessageType.TEXT,
                    timestamp: new Date(),
                }
            }

            return {
                id: messageId,
                role: "bot",
                content: `Tuyệt vời! Mình đã tìm thấy ${companies.length} công ty và lộ trình học tập cho ${entities.careerGoal || "bạn"}:`,
                type: MessageType.COMBINED,
                data: { companies, roadmap: roadmap || undefined },
                timestamp: new Date(),
            }
        }

        case UserIntent.CV_REVIEW: {
            return {
                id: messageId,
                role: "bot",
                content:
                    "Để review CV, bạn có thể upload CV lên phần 'Hồ sơ của tôi' trong trang chủ. Mình sẽ phân tích và đưa ra góp ý cải thiện dựa trên:\n\n✅ Cấu trúc và format\n✅ Nội dung và kỹ năng\n✅ Độ phù hợp với vị trí mục tiêu\n\nBạn cần hỗ trợ gì thêm không? 📄",
                type: MessageType.TEXT,
                timestamp: new Date(),
            }
        }

        default: {
            return {
                id: messageId,
                role: "bot",
                content:
                    "Xin chào! Mình là DUT AI Mentor. Mình có thể giúp bạn:\n\n🔍 Tìm kiếm công ty và vị trí tuyển dụng\n📚 Gợi ý lộ trình học tập theo ngành\n📄 Review và cải thiện CV\n\nBạn cần hỗ trợ gì nhé? 😊",
                type: MessageType.TEXT,
                timestamp: new Date(),
            }
        }
    }
}
