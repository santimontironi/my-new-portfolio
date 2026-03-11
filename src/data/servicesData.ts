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
                icon: 'bi bi-palette',
                title: 'UI con Tailwind CSS',
                description: 'Diseño de interfaces modernas, responsivas y altamente personalizables utilizando Tailwind CSS y componentes reutilizables.'
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
                description: 'Publicación de proyectos en plataformas como Vercel y Railway, con configuración de variables de entorno, CI/CD y dominios personalizados.'
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
                icon: 'bi bi-palette',
                title: 'UI with Tailwind CSS',
                description: 'Designing modern, responsive, and highly customizable interfaces using Tailwind CSS and reusable components.'
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
                description: 'Publishing projects on platforms like Vercel and Railway, with environment variable setup, CI/CD pipelines, and custom domains.'
            },
        ]
    }
}

export default serviceData
