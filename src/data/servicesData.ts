function serviceData (language: string) {

    if (language === 'es') {
        return [
            {
                icon: 'bi bi-layers',
                title: 'Full Stack MERN',
                description: 'Desarrollo de aplicaciones completas con MongoDB, Express, React y Node.js, cubriendo tanto el frontend como el backend de forma integrada.'
            },
            {
                icon: 'bi bi-lightning-charge',
                title: 'Next.js',
                description: 'Creación de aplicaciones web modernas con Next.js, aprovechando SSR, SSG y el App Router para obtener el máximo rendimiento y SEO.'
            },
            {
                icon: 'bi bi-diagram-2',
                title: 'Clean Architecture con C#',
                description: 'Diseño de aplicaciones con C# y .NET siguiendo Clean Architecture, separando capas de dominio, aplicación, infraestructura y presentación para un código mantenible y testeable.'
            },
            {
                icon: 'bi bi-diagram-3',
                title: 'REST APIs',
                description: 'Diseño e implementación de APIs RESTful con Node.js y Express, con autenticación JWT, validación de datos y documentación clara.'
            },
            {
                icon: 'bi bi-database',
                title: 'Bases de Datos',
                description: 'Modelado y gestión de bases de datos con MongoDB y PostgreSQL, optimizando consultas y garantizando la integridad de los datos.'
            },
            {
                icon: 'bi bi-cloud-upload',
                title: 'Despliegue',
                description: 'Publicación de proyectos en plataformas cloud con configuración de variables de entorno, CI/CD y dominios personalizados.'
            },
        ]
    } else {
        return [
            {
                icon: 'bi bi-layers',
                title: 'Full Stack MERN',
                description: 'Building complete applications with MongoDB, Express, React, and Node.js, covering both frontend and backend in an integrated way.'
            },
            {
                icon: 'bi bi-lightning-charge',
                title: 'Next.js',
                description: 'Creating modern web applications with Next.js, leveraging SSR, SSG, and the App Router for maximum performance and SEO.'
            },
            {
                icon: 'bi bi-diagram-2',
                title: 'Clean Architecture with C#',
                description: 'Designing applications with C# and .NET following Clean Architecture, separating domain, application, infrastructure, and presentation layers for maintainable, testable code.'
            },
            {
                icon: 'bi bi-diagram-3',
                title: 'REST APIs',
                description: 'Designing and implementing RESTful APIs with Node.js and Express, featuring JWT authentication, data validation, and clear documentation.'
            },
            {
                icon: 'bi bi-database',
                title: 'Databases',
                description: 'Modeling and managing databases with MongoDB and PostgreSQL, optimizing queries and ensuring data integrity.'
            },
            {
                icon: 'bi bi-cloud-upload',
                title: 'Deployment',
                description: 'Publishing projects on cloud platforms with environment variable setup, CI/CD, and custom domains.'
            },
        ]
    }
}

export default serviceData
