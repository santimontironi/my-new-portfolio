# Santiago Montironi — Portfolio en desarrollo

Portfolio personal de **Santiago Montironi**, Desarrollador Fullstack especializado en el stack MERN. Sitio web de una sola página (landing page) con soporte bilingüe **Español / Inglés**.

---

## Tecnologías

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | 16.1.6 | Framework principal (App Router) |
| React | 19.2.3 | UI |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 4 | Estilos |
| Bootstrap Icons | 1.13.1 | Íconos |
| typewriter-effect | 2.22 | Animación de texto en la sección Hero |
| react-hook-form | 7.71 | Formulario de contacto |
| react-toastify | 11.0.5 | Notificaciones toast (loading, éxito, error) |
| axios | 1.13.6 | Cliente HTTP para llamadas a la API interna |
| nodemailer | 8.0 | Envío de emails desde la API de contacto |

---

## Estructura del proyecto

```
src/
├── app/
│   ├── globals.css             → Estilos globales
│   ├── hover.css               → Estilos de hover personalizados
│   ├── layout.tsx              → Layout raíz con providers
│   ├── page.tsx                → Página principal (todas las secciones)
│   └── api/
│       └── contact/
│           └── route.js        → Endpoint POST /api/contact (envío de emails)
├── components/
│   ├── layout/                 → Secciones de la página (Home, About, Services, Skills, Projects, Contact)
│   └── ui/                     → Componentes reutilizables (Header, NavItem, ServiceCard, etc.)
├── config/
│   └── mail.config.js          → Configuración de nodemailer (Gmail)
├── context/
│   └── LanguageContext.tsx     → Estado global del idioma activo (ES/EN)
├── data/
│   ├── skillsData.ts           → Tecnologías organizadas por categoría
│   └── servicesData.ts         → Datos de servicios ofrecidos, con soporte bilingüe
├── hooks/
│   └── useLanguage.ts          → Hook para consumir el LanguageContext
├── services/
│   ├── apiService.ts           → Cliente axios con instancia base y función sendMailService
│   └── skillsServices.ts       → Lógica relacionada a las habilidades
└── types/
    └── index.ts                → Tipos TypeScript compartidos
```

---

## Secciones

| ID de ancla | Sección | Descripción |
|---|---|---|
| `#inicio` | Home | Hero con nombre, efecto typewriter y CTAs |
| `#sobre-mi` | Sobre mí | Presentación, stack, estadísticas y descarga de CV |
| `#servicios` | Servicios | Cards con los servicios ofrecidos |
| `#habilidades` | Habilidades | Tecnologías agrupadas por categoría |
| `#proyectos` | Proyectos | Grid de proyectos |
| `#contacto` | Contacto | Formulario de contacto |

---

## Funcionalidades clave

- **Bilingüe (ES / EN):** El idioma se gestiona globalmente mediante `LanguageContext`. Todos los componentes consumen `useLanguage()` para renderizar el texto correcto.
- **Header responsivo:** Navegación con anclas y switcher de idioma. En mobile se despliega un menú hamburguesa animado.
- **One-page scroll:** Toda la app se renderiza en `page.tsx` como secciones apiladas con IDs de ancla.
- **Formulario de contacto funcional:** Envía emails reales usando la API route `/api/contact` con nodemailer y Gmail como proveedor SMTP. Las peticiones se hacen con axios desde `apiService.ts`. Los estados de envío (cargando, éxito, error) se notifican al usuario con toast de `react-toastify`.

---

## Variables de entorno

Para que el formulario de contacto funcione, creá un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
```

> **Nota:** `EMAIL_PASS` debe ser una **contraseña de aplicación** de Google (no tu contraseña de cuenta). Generala desde [Seguridad de tu cuenta de Google](https://myaccount.google.com/security) activando la verificación en dos pasos.

---

## Comandos

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm run start

# Lint
npm run lint
```

Servidor de desarrollo disponible en [http://localhost:3000](http://localhost:3000).

