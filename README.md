This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

📁 proyect
├── 📁 prisma
├── 📄 scheme.prisma
└── 📄 seed.ts
├── 📁 public
└── 📄 ...
└── 📁 app
├── 📁 (home)
├── 📄 Tech.tsx
├── 📄 Travel.tsx
└── 📄 Trending.tsx
├── 📁 (shared)
├── 📄 Cards.tsx
├── 📄 Footer.tsx
├── 📄 Navbar.tsx
├── 📄 Other.tsx
├── 📄 Sidebar.tsx
└── 📄 Subscribe.tsx
├── 📁 api
├── 📁 openai
└── 📄 route.ts
└── 📁 post
├── 📁 [id]
└── 📄 route.ts
└── 📄 client.ts
├── 📁 post
├── 📁 [id]
├── 📄 Article.tsx
├── 📄 CategoryAndEdit.tsx
├── 📄 Content.tsx
├── 📄 EditorMenuBar.tsx
└── 📄 page.tsx
└── 📄 loading.tsx
├── 📄 global.css
├── 📄 layout.tsx
├── 📄 loading.tsx
├── 📄 types.ts
└── 📄 page.tsx
├── 📄 .env
├── 📄 next.config.js
├── 📄 tailwind.config.js
├── 📄 postcss.config.js
├── 📄 tsconfig.json
└── 📄 package.json

1. 📁 proyect: La carpeta principal del proyecto.

   - 📁 prisma: Contiene archivos relacionados con Prisma, un ORM para bases de datos.
     - 📄 scheme.prisma: Define el esquema de la base de datos.
     - 📄 seed.ts: Contiene el script de seeding para poblar la base de datos con datos iniciales.
   - 📁 public: Almacena archivos estáticos como imágenes, CSS, y JavaScript que se utilizarán en la aplicación.
   - 📁 app: Contiene la lógica y componentes principales de la aplicación.
     - 📁 (home): Almacena componentes específicos de la página de inicio.
       - 📄 Tech.tsx, Travel.tsx, Trending.tsx: Componentes que podrían estar relacionados con diferentes categorías en la página de inicio.
     - 📁 (shared): Contiene componentes compartidos utilizados en múltiples partes de la aplicación.
       - 📄 Cards.tsx, Footer.tsx, Navbar.tsx, Other.tsx, Sidebar.tsx, Subscribe.tsx: Componentes reutilizables como tarjetas, pie de página, barra de navegación, etc.
     - 📁 api: Contiene archivos relacionados con las rutas de la API y la lógica del lado del servidor.
       - 📁 openai: Podría contener rutas de API relacionadas con OpenAI.
         - 📄 route.ts: Define las rutas de la API para OpenAI.
       - 📁 post: Contiene archivos relacionados con las operaciones de publicación.
         - 📁 [id]: Rutas dinámicas para acceder a publicaciones individuales.
           - 📄 route.ts: Define las rutas de la API para una publicación específica.
         - 📄 client.ts: Contiene funciones para interactuar con la API y realizar operaciones CRUD en publicaciones.
     - 📁 post: Contiene archivos relacionados con la visualización y edición de publicaciones.
       - 📁 [id]: Componentes para una publicación específica.
         - 📄 Article.tsx, CategoryAndEdit.tsx, Content.tsx, EditorMenuBar.tsx, page.tsx: Componentes relacionados con la visualización y edición de una publicación.
       - 📄 loading.tsx: Componente de carga que se muestra mientras se cargan los datos.
     - 📄 global.css: Estilos globales de la aplicación.
     - 📄 layout.tsx: Contiene el diseño básico de la aplicación que se utiliza en todas las páginas.
     - 📄 loading.tsx: Componente de carga general para la aplicación.
     - 📄 types.ts: Define tipos y/o interfaces TypeScript utilizados en toda la aplicación.
     - 📄 page.tsx: Componente de la página principal que renderiza las diferentes páginas y rutas.

2. Archivos de configuración y herramientas:
   - 📄 .env: Almacena variables de entorno para la aplicación.
   - 📄 next.config.js: Configuración personalizada para Next.js.
   - 📄 tailwind.config.js: Configuración personalizada para Tailwind CSS. Puedes modificar los valores predeterminados, agregar tus propias clases, configurar variantes y más.
   - 📄 postcss.config.js: Configuración de PostCSS, que es una herramienta para transformar CSS con plugins de JavaScript. Next.js utiliza PostCSS por defecto y se integra con Tailwind CSS.
   - 📄 tsconfig.json: Configuración de TypeScript para el proyecto. Puedes personalizar las opciones del compilador, especificar rutas de inclusión y exclusión, y más.
   - 📄 package.json: Contiene información sobre el proyecto y sus dependencias. Incluye metadatos como el nombre del proyecto, la versión y las dependencias de los paquetes utilizados en el proyecto.
