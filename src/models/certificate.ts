export interface Certificate {
    titleCertification: string;
    linkCertification: string;
    date?: string;
    icon?: string;
}

export const Certificates: Certificate[] = [
    {
        titleCertification:
            "Patrones de diseño en C# Aplicados en ASP .Net",
        linkCertification:
            "https://www.udemy.com/certificate/UC-0847eee4-ce0a-4114-993f-98a20f38d22a/",
        icon: "heroPuzzlePiece"
    },
    {
        titleCertification:
            "Construyendo Web APIs RESTful con ASP.NET Core 6",
        linkCertification:
            "https://www.udemy.com/certificate/UC-30852cca-0406-44a9-9bd3-5c7fff0e283d/",
        icon: "heroCodeBracket"
    },
    {
        titleCertification:
            "Responsive Web Design",
        linkCertification:
            "https://www.freecodecamp.org/certification/alejofontao/responsive-web-design",
        icon: "heroComputerDesktop"
    },
    {
        titleCertification:
            "JavaScript Algorithms and Data Structures",
        linkCertification:
            "https://www.freecodecamp.org/certification/alejofontao/javascript-algorithms-and-data-structures",
        icon: "heroCodeBracket"
    },
]


