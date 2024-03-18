export interface Project {
    titleProject: string;
    imgProject: string;
    descriptionProject: string;
    url?: string;
    github?: string;
    position: string;
    area: string;
    tecnologies: string[];
}

export const Projects: Project[] = [
    {
        titleProject:
            "Wofory",
        imgProject:
            "./assets/wofory.png",
        descriptionProject: "El proyecto es una página web que sirve como intermediario entre trabajadores del hogar (como plomeros, electricistas, etc.) y usuarios que necesitan soluciones rápidas para sus hogares. La plataforma cuenta con funciones como registro de usuarios, un calendario para gestionar citas, búsqueda por proximidad, chat en tiempo real, entre otras características.",
        url: "https://www.wofory.com",
        position: "",
        area: "FrontEnd - BackEnd",
        tecnologies: ["Angular", "SCSS", "HTML", "ASP.NET", "SQL Server", "MongoDb"]
    }, {
        titleProject:
            "Sistema gestión gimnasio",
        imgProject:
            "./assets/gymSystem.png",
        descriptionProject: "Sistema desarrollado para dos gimnasios ubicados en Córdoba. El sistema cuenta con distintos apartados necesarios para la correcta gestión del negocio como: inscripciones, facturación, estadísticas, visitas, calls de renovación y más.",
        position: "",
        area: "FrontEnd - BackEnd",
        tecnologies: ["C#", "WinForms", "SQLServer"]
    },
    {
        titleProject:
            "Buscador",
        imgProject:
            "./assets/indexador.png",
        descriptionProject: "El proyecto consiste en la indexación de una cantidad determinada de archivos de texto, para luego permitir la búsqueda de palabras o conjuntos de palabras específicas dentro de dichos archivos. Este proceso se lleva a cabo de manera similar a un buscador convencional que utilizamos a diario. El proyecto ha sido desarrollado utilizando JAVA/SpringBoot en la parte del servidor, y Bootstrap en la interfaz de usuario (FrontEnd). La aplicación es fácil de usar y se basa en una tecnología robusta que garantiza una búsqueda rápida y precisa en los archivos indexados.",
        github: "https://github.com/AleFontao/BUSCADOR-DLC",
        position: "",
        area: "FrontEnd",
        tecnologies: ["JAVA", "SprinBoot", "Bootstrap", "CSS", "HTML"]
    }, {
        titleProject:
            "RaveLink",
        imgProject:
            "./assets/ravelink.png",
        descriptionProject: "El proyecto es una plataforma para encontrar eventos de música electronica.",
        position: "",
        area: "FrontEnd",
        tecnologies: ["React", "SCSS", "HTML"]
    },
    {
        titleProject:
            "NetflixClone",
        imgProject:
            "./assets/netflixClone.png",
        descriptionProject: "El proyecto es una interfaz visual similar a la de Netflix, desarrollada en Angular. Los usuarios pueden navegar por diferentes categorías de contenido y ver detalles de cada elemento. Es altamente interactiva y responsiva, proporcionando una experiencia de usuario fluida y envolvente.",
        url: "https://alefontao.github.io/NetflixClone/",
        github: "https://github.com/AleFontao/NetflixClone",
        position: "",
        area: "FrontEnd",
        tecnologies: ["Angular", "SCSS", "HTML"]
    },
    {
        titleProject:
            "IPAdressTracker",
        imgProject:
            "./assets/iPAdressTracker.png",
        descriptionProject: "El proyecto es una interfaz visual desarrollada con Angular que te permite localizar en un mapa la ubicación asociada a una dirección IP pública. Esta aplicación es útil para obtener información geográfica sobre una dirección IP, lo que puede ser útil en el análisis de datos o en la identificación de problemas de seguridad. La interfaz es sencilla e intuitiva",
        url: "https://alefontao.github.io/IPAddressTracker/",
        github: "https://github.com/AleFontao/IPAddressTracker",
        position: "",
        area: "FrontEnd",
        tecnologies: ["Angular", "SCSS", "HTML"]
    },
]


