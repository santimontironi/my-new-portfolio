

const projectsData = (language: string) => {
  if (language === 'es') {
    return [
      {
        projectImage: '/images/proyectoClonSlack.jpeg',
        projectTitle: "Clon de Slack",
        projectDescription: "TP final de la Diplomatura Full Stack de UTN Bs. As. Clon de Slack con autenticación, canales de chat en tiempo real y stack MERN + TailwindCSS. Backend testeado con Jest.",
        githubUrl: 'https://github.com/santimontironi/clon-slack-UTN',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://clon-slack-utn-frontend.vercel.app/',
      },
      {
        projectImage: '/images/proyectoMpComponentes.png',
        projectTitle: "MP Componentes - e-commerce",
        projectDescription: "E-commerce de componentes electrónicos desarrollado con MERN. Incluye catálogo, carrito de compras e integración con la API de MercadoPago.",
        githubUrl: 'https://github.com/santimontironi/ecommerce-mpComponentes',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://www.mpcomponentes.com',
      },
      {
        projectImage: '/images/proyectoNunoDeportes.png',
        projectTitle: "Nuno Deportes",
        projectDescription: "Tienda de artículos deportivos con catálogo, panel de administrador y pagos online via MercadoPago. Desarrollada con MERN.",
        githubUrl: 'https://github.com/santimontironi/ecommerce-express',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://nunodeportes.netlify.app/',
      },
      {
        projectImage: '/images/proyectoGarsonic.png',
        projectTitle: "Garsonic (Aplicación de música)",
        projectDescription: "Plataforma musical estilo Spotify con roles de Artista y Usuario. Gestión de canciones, playlists y reproductor. Stack MERN + TailwindCSS.",
        githubUrl: 'https://github.com/santimontironi/ecommerce-express',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://garsonic.netlify.app/',
      },
      {
        projectImage: '/images/proyectoMorfiBot.png',
        projectTitle: 'MorfiBot - Generador de recetas',
        projectDescription: "Generador de recetas impulsado por la API de OpenAI. Ingresás ingredientes y la IA crea la receta. Stack MERN + TailwindCSS.",
        githubUrl: 'https://github.com/santimontironi/aplicacion-recetas-IA',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://morfibot.netlify.app/',
      },
      {
        projectImage: '/images/proyectoClonWhatsapp.png',
        projectTitle: "Clon de Whatsapp",
        projectDescription: "Clon de WhatsApp con lista de chats, búsqueda y agregado de contactos. Proyecto final de Frontend en UTN. Desarrollado con ReactJS y CSS.",
        githubUrl: 'https://github.com/santimontironi/clon-whatsapp',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://clon-whatsapp-sm.vercel.app/',
      },
      {
        projectImage: '/images/proyectoFulboApp.png',
        projectTitle: "Organizador de partidos de fútbol",
        projectDescription: "Herramienta para organizar partidos de fútbol. Ingresá los jugadores y los equipos se generan de forma aleatoria al instante.",
        githubUrl: 'https://github.com/santimontironi/fulboApp',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://fulboapp.netlify.app/',
      },
      {
        projectImage: '/images/proyectoWebFullWeb.png',
        projectTitle: "Mi emprendimiento",
        projectDescription: "Sitio web de mi agencia de desarrollo. Muestra servicios, tecnologías y formulario de contacto para potenciales clientes.",
        githubUrl: 'https://github.com/santimontironi/sitio-web-agencia',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://fullwebportfolio.com/',
      },
      {
        projectImage: '/images/proyectoCRUDtareas.png',
        projectTitle: "Gestor de tareas Next.js",
        projectDescription: "Gestor de tareas con Next.js, PostgreSQL, Prisma ORM y autenticación con NextAuth. CRUD completo de tareas por usuario.",
        githubUrl: "https://github.com/santimontironi/crud-nextjs-prisma",
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://crud-nextjs-prisma-navy.vercel.app/',
      },
      {
        projectImage: '/images/proyectoQuizCapitales.png',
        projectTitle: "Quiz de capitales",
        projectDescription: "Quiz interactivo de opción múltiple sobre capitales del mundo. Ponés a prueba tu geografía con preguntas aleatorias.",
        githubUrl: 'https://github.com/santimontironi/quiz-de-capitales',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://quizcapitales.netlify.app/',
      },
      {
        projectImage: '/images/proyectoWordle.png',
        projectTitle: "Juego Wordle",
        projectDescription: "Clon del famoso juego Wordle. Tenés 5 intentos para adivinar la palabra; cada intento revela qué letras son correctas.",
        githubUrl: 'https://github.com/santimontironi/wordle-game',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://wordlegamebysm.netlify.app/',
      }
    ]

  } else {
    return [
      {
        projectImage: '/images/proyectoClonSlack.jpeg',
        projectTitle: "Slack Clone",
        projectDescription: "Final project of the Full Stack Diploma at UTN Bs. As. Slack clone with authentication, real-time chat channels and MERN + TailwindCSS. Backend unit-tested with Jest.",
        githubUrl: 'https://github.com/santimontironi/clon-slack-UTN',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://clon-slack-utn-frontend.vercel.app/',
      },
      {
        projectImage: '/images/proyectoMpComponentes.png',
        projectTitle: "MP Componentes - e-commerce",
        projectDescription: "E-commerce for electronic components built with MERN. Features product catalog, shopping cart and MercadoPago payment integration.",
        githubUrl: 'https://github.com/santimontironi/ecommerce-mpComponentes',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://www.mpcomponentes.com',
      },
      {
        projectImage: '/images/proyectoNunoDeportes.png',
        projectTitle: "Nuno Deportes",
        projectDescription: "Sports store with product catalog, admin panel and online payments via MercadoPago. Built with MERN stack.",
        githubUrl: 'https://github.com/santimontironi/ecommerce-express',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://nunodeportes.netlify.app/',
      },
      {
        projectImage: '/images/proyectoGarsonic.png',
        projectTitle: "Garsonic (Music Application)",
        projectDescription: "Spotify-like music platform with Artist and User roles. Manage songs, playlists and playback. Built with MERN + TailwindCSS.",
        githubUrl: 'https://github.com/santimontironi/ecommerce-express',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://garsonic.netlify.app/',
      },
      {
        projectImage: '/images/proyectoMorfiBot.png',
        projectTitle: 'MorfiBot - Recipes generator',
        projectDescription: "AI-powered recipe generator using the OpenAI API. Enter your ingredients and get a full recipe instantly. Built with MERN + TailwindCSS.",
        githubUrl: 'https://github.com/santimontironi/aplicacion-recetas-IA',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://morfibot.netlify.app/',
      },
      {
        projectImage: '/images/proyectoClonWhatsapp.png',
        projectTitle: "WhatsApp Clone",
        projectDescription: "WhatsApp clone with chat list, contact search and add features. Final Frontend project at UTN. Built with ReactJS and CSS.",
        githubUrl: 'https://github.com/santimontironi/clon-whatsapp',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://clon-whatsapp-sm.vercel.app/',
      },
      {
        projectImage: '/images/proyectoFulboApp.png',
        projectTitle: "Soccer Match Organizer",
        projectDescription: "Tool to organize soccer matches. Enter players' names and balanced teams are generated randomly in an instant.",
        githubUrl: 'https://github.com/santimontironi/fulboApp',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://fulboapp.netlify.app/',
      },
      {
        projectImage: '/images/proyectoWebFullWeb.png',
        projectTitle: "My Startup Website",
        projectDescription: "Website for my web development agency. Showcases services, tech stack and a contact form for potential clients.",
        githubUrl: 'https://github.com/santimontironi/sitio-web-agencia',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://fullwebportfolio.com/',
      },
      {
        projectImage: '/images/proyectoCRUDtareas.png',
        projectTitle: "Tasks manager Next.js",
        projectDescription: "Task manager built with Next.js, PostgreSQL, Prisma ORM and NextAuth authentication. Full CRUD per user.",
        githubUrl: "https://github.com/santimontironi/crud-nextjs-prisma",
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://crud-nextjs-prisma-navy.vercel.app/',
      },
      {
        projectImage: '/images/proyectoQuizCapitales.png',
        projectTitle: "World Capitals Quiz",
        projectDescription: "Interactive multiple-choice quiz about world capitals. Test your geography knowledge with random questions.",
        githubUrl: 'https://github.com/santimontironi/quiz-de-capitales',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://quizcapitales.netlify.app/',
      },
      {
        projectImage: '/images/proyectoWordle.png',
        projectTitle: "Wordle Game",
        projectDescription: "Clone of the famous Wordle game. You have 5 attempts to guess the word; each try reveals which letters are correct.",
        githubUrl: 'https://github.com/santimontironi/wordle-game',
        githubIcon: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        deployUrl: 'https://wordlegamebysm.netlify.app/',
      }
    ]
  }
}

export default projectsData
