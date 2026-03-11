# Santiago Montironi — Portfolio

Portfolio personal de **Santiago Montironi**, Desarrollador Fullstack especializado en el stack MERN. Sitio web de una sola página (landing page) con soporte bilingüe **Español / Inglés**.

---

## Tecnologías

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | 16 | Framework principal (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | 4 | Estilos |
| Bootstrap Icons | 1.13 | Íconos |
| typewriter-effect | 2.22 | Animación de texto en la sección Hero |
| react-hook-form | 7.71 | Formulario de contacto |

---

## Estructura del proyecto

```
src/
├── app/                    → Layout raíz, página principal y estilos globales
├── components/
│   ├── layout/             → Secciones de la página (Home, About, Services, Skills, Projects, Contact)
│   └── ui/                 → Componentes reutilizables (Header, NavItem, ServiceCard, etc.)
├── context/
│   └── LanguageContext.tsx → Estado global del idioma activo (ES/EN)
├── data/
│   ├── skillsData.ts       → Tecnologías organizadas por categoría
│   └── servicesData.ts     → Datos de servicios ofrecidos, con soporte bilingüe
├── hooks/
│   └── useLanguage.ts      → Hook para consumir el LanguageContext
├── services/
│   └── skillsServices.ts   → Lógica relacionada a las habilidades
└── types/
    └── index.ts            → Tipos TypeScript compartidos
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

