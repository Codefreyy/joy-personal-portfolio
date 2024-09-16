import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import knowledgeSharingPlatformImage from '@/public/knowledge-sharing-platform.png';
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import visualizationImage from "@/public/d3.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '我的项目',
    Skills: '我的技能',
    Experiences: '我的经历',
}

export const experiencesData = [
    {
        title: "MSc in Computing and IT",
        location: "University of St Andrews, UK",
        description:
            "Achieved a Master's degree in Computing and IT, acquiring in-depth knowledge in areas such as Human Computer Interaction, Computer Communication Systems, and Information Security. Developed strong capabilities in computational thinking, user-centred design, and data visualisation, preparing for effective application in technology-driven environments",
        icon: React.createElement(LuGraduationCap),
        date: "2023 Sep - 2024 May",
    },
    {
        title: "Frontend Intern",
        location: React.createElement("span", {},
            React.createElement("a", {
                href: "https://www.nio.com/",
                style: { textDecoration: 'underline' },
                target: "_blank"
            }, "NIO Inc."),
            " Wuhan, China"
        ),
        description:
            "Developed NIO's third-generation station list and detail pages using Vue3, TypeScript, and Baidu Maps API. Implemented role-based access control for the Task Wizard page, enhancing system security. Collaborated effectively within a Jira-managed environment, utilizing Jenkins for deployment processes.",
        icon: React.createElement(FaVuejs),
        date: "2022 Aug - 2022 Dec",
    },
    {
        title: "Frontend Assistant",
        location: "Wuhan University | Wuhan, China",
        description:
            "Developed and maintained Finknow, a Financial Knowledge Graph Query and Analysis Platform using umi (React framework) and Ant Design Pro. Utilized graphin, a React toolkit for graph analysis based on G6, to develop an Equity Network Penetration Graph, enhancing data visualization capabilities.",
        icon: React.createElement(FaReact),
        date: "2022 May - 2022 July",
    },
    {
        title: "BA in Digital Publishing",
        location: "Wuhan University, China",
        description:
            "Graduated with a Bachelor of Arts in Digital Publishing, securing a GPA of 3.81/4.0. Gained foundational knowledge in digital media and publishing technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 Sep - 2023 Jun",
    },

]

export const experiencesDataZn = [
    {
        "title": "计算机与信息技术硕士",
        "location": "英国圣安德鲁斯大学",
        "description": "在人机交互、计算机通信系统和信息安全等领域深入学习。培养了计算思维、以用户为中心的设计和数据可视化方面的强大能力，预计以一等学位毕业（GPA17/20）。",
        icon: React.createElement(LuGraduationCap),
        "date": "2023年9月 - 2024年12月"
    },
    {
        "title": "前端实习生",
        "location": "蔚来汽车（中国武汉）",
        "description": `参与团队多个平台的迭代开发，独立完成内部告警平台的值班表页面开发。协助开发蔚来第三代场站列表与详情页，集成百度地图 API 实现定位与选点功能。优化任务魔棒页面，新增管理员角色，重构权限管理逻辑，用头像列表展示管理员，并整合飞书 API 实现消息发送。自定义 Element-UI 级联选择组件，解决全选德国 2000+ 城市时浏览器卡死问题，通过懒加载优化显著提升性能。遵循 Agile/Scrum 开发流程，进行两周一迭代，通过 Jira 跟进项目需求，设计技术方案，并与测试、后端、产品及 设计团队密切对接。`,
        "icon": React.createElement(FaVuejs),
        "date": "2022年8月 - 2022年12月"
    },
    {
        "title": "前端开发",
        "location": "武汉大学大数据研究院",
        "description": "使用umi（React框架）和Ant Design Pro开发和维护Finknow，一个金融知识图谱查询和分析平台。利用基于G6的React图分析工具包graphin开发了股权网络穿透图，增强了数据可视化功能。",
        "icon": React.createElement(FaReact),
        "date": "2022年5月 - 2022年8月"
    },
    {
        "title": "数字出版学士",
        "location": "武汉大学",
        "description": "以3.81/4.0的GPA毕业，获得数字出版学士学位，掌握了数字媒体和出版技术的基础知识。",
        "icon": React.createElement(LuGraduationCap),
        "date": "2019年9月 - 2023年6月"
    }
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Ethical Digital Nation Collaborative Platform",
        "title_zh": "数字道德国家协作平台",
        "description":
            "A collaborative platform enhancing cooperation among Scottish higher education institutions in digital ethics.",
        "desc_zh": "旨在促进苏格兰高校在数字道德领域合作的协作平台。该平台集成用户访谈、工作坊、OAuth登录、最新数字博客RSS feed显示、完备的事件管理系统（包含高级评分与评论功能）以及注重可访问性的响应式设计。",
        "tags": ["React", "Next.js 14", "TypeScript", "TailwindCSS", "Convex", "Clerk"],
        "imageUrl": knowledgeSharingPlatformImage,
        "projectUrl": "https://github.com/Codefreyy/Ethical-Digital-Nation",
        "demoUrl": "https://yujie-ethical-digital-nation.netlify.app/"
    },
    {
        title: "Typing Speed",
        title_zh: '打字测验',
        description:
            "A comprehensive typing speed test application that tracks your overall typing performance. It provides detailed statistics, including total words typed, errors made, and accuracy rate, allowing users to monitor their progress and improve their typing efficiency.",
        desc_zh: "一个打字速度测试应用。敲击即开始打字，计时结束后将显示总敲击单词数、正确率、错误率等。该应用UI简洁现代，支持Dark Mode切换。",
        tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://github.com/Codefreyy/typing-speed-game',
        demoUrl: 'https://joy-typing-speed.netlify.app/',
    },
    {
        title: "Breddit",
        title_zh: "社交新闻论坛",
        description:
            `A modern full-stack Reddit clone with infinite scrolling, secure NextAuth Google authentication, and a custom feed for authenticated users. It uses Upstash Redis for caching and React-Query for efficient, responsive data fetching with optimistic updates.
            `,
        desc_zh: "一个现代且简洁的Reddit克隆项目，使用Next.js、TypeScript和Tailwind CSS构建。项目功能包括无限滚动动态加载帖子、NextAuth与Google认证、为认证用户提供自定义Feed、高级缓存、乐观更新、React-Query数据获取、美观的帖子编辑器、图片上传和链接预览、以及完整的评论功能。",
        tags: ["Next.js", "TypeScript", "Upstash", "React-Query", "TailwindCSS"],
        imageUrl: breadditImage,
        projectUrl: 'https://github.com/Codefreyy/Breddit',
        demoUrl: 'https://joy-breddit.vercel.app/',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_zh: '世界财富可视化光谱',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_zh: "交互式可视化图表探讨了税收政策如何影响财富、不同行业对不同性别的财富的影响以及这些影响在各大洲之间的差异。深入了解我们的数据，揭示全球财富的复杂层次。",
        tags: ["d3.js", "HTML", "CSS", "Vanilla JavaScript"],
        imageUrl: visualizationImage,
        projectUrl: 'https://github.com/Codefreyy/d3-evolution-visualisation',
        demoUrl: 'https://global-wealth-spectrum.netlify.app/',
    },


]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "Vue2",
    "Vue3",
    "Node",
    "Express",
    "Git",
    "Github",
    "Tailwind",
    "Chakra UI",
    "Boostrap",
    "Prisma",
    "MongoDB",
    "Framer Motion",
    "d3",
    "UI/UX"
] 
