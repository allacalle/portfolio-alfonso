// --- El Contrato / La Regla ---
// Aquí definimos qué campos tendrá cada uno de nuestros proyectos.
export interface Project {
  // --- Información para la Tarjeta ---
  slug: string; // Identificador único para la URL
  title: string;
  tag: string;
  imgSrc: string;
  description: string;
  liveUrl?: string; // El '?' significa que este campo es opcional
  codeUrl: string;
  isWip?: boolean; // También opcional

  // --- Información para la Página de Detalle ---
  challenge: string;
  solution: string;
  gallery: string[]; // Una lista (array) de rutas a imágenes
  
  // --- Información para el Informe del Arquitecto ---
  architecture: string[]; // Una lista de puntos sobre la arquitectura
  techStack: string[]; // Una lista de tecnologías usadas
  technicalChallenge: string;
}

// --- Nuestra "Base de Datos" de Proyectos ---
// Creamos una lista llamada ALL_PROJECTS que sigue las reglas de nuestra interface.
export const ALL_PROJECTS: Project[] = [
  // --- Proyecto 1: Parques Naturales de Jaén ---
   {
    slug: 'parques-naturales-jaen',
    title: 'Parques Naturales de Jaén',
    tag: 'HTML & JS',
    imgSrc: '/images/parques-jaen.jpg',
    description: 'Guía interactiva de los espacios naturales de Jaén, con mapas y fichas detalladas.',
    liveUrl: 'https://parquesnaturalesjaen.es/',
    codeUrl: 'https://github.com/allacalle/parquesnaturalesjaen',
    
    // --- La historia que escribimos juntos ---
    challenge: "Este proyecto nació de una doble necesidad: una personal y una profesional. Recién trasladado a un pueblo de Jaén y con una profunda pasión por la naturaleza, descubrí que la información sobre los parques de la región estaba fragmentada y poco accesible. Al mismo tiempo, como parte de mi formación en diseño web, buscaba un proyecto real que fuera más allá de un simple ejercicio; un reto que me permitiera aplicar y consolidar mis habilidades como ingeniero en una solución útil y tangible para otros amantes de la naturaleza.",
    solution: "Mi enfoque fue directo y centrado en la utilidad. La solución se articuló en torno a una estructura de 'artículos', uno por cada zona de interés, para presentar la información de forma clara. El punto de inflexión fue encontrar un mapa detallado de la región, el cual transformé en un mapa de enlaces SVG. Esta pieza se convirtió en el corazón de la web: un mapa interactivo y responsive que sirve como índice principal. Para enriquecer la experiencia, añadí una sección de 'Actividades' con datos cargados desde un fichero JSON, y un formulario de contacto funcional que se comunica con un servicio externo mediante la API Fetch.",
    
    // --- La galería con 6 imágenes ---
    gallery: [
      '/images/parques/parques-1.JPG',
      '/images/parques/parques-2.JPG',
      '/images/parques/parques-3.JPG',
      '/images/parques/parques-4.JPG',
      '/images/parques/parques-5.JPG',
      '/images/parques/parques-6.JPG'
    ],
    
    // --- El Informe del Arquitecto DEFINITIVO ---
    architecture: [
      'Arquitectura de Aplicación Dinámica (SPA-like): La sección de "Actividades" renderiza el contenido del lado del cliente, obteniendo los datos de un fichero JSON y construyendo la interfaz con JavaScript nativo.',
      'Sistema de Plantillas Nativas: Se desarrolló un sistema de componentes reutilizables (menú, pie de página) usando funciones de JavaScript para inyectar HTML, evitando la repetición de código sin necesidad de un framework.',
      'Integración de Servicios Externos (Backendless): El formulario de contacto utiliza la API Fetch para enviar datos de forma asíncrona a Formspree, una práctica estándar en el desarrollo web moderno.',
      'Mapa Vectorial Interactivo: El índice de parques se basa en un mapa SVG manipulado con Inkscape para definir zonas clicables, una solución creativa y de alto rendimiento.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'JSON', 'Formspree API', 'Inkscape'],
    technicalChallenge: "El desafío más apasionante fue diseñar y construir una arquitectura de aplicación dinámica desde cero, utilizando únicamente las herramientas base de la web. Esto me obligó a entender los fundamentos de cómo frameworks como React gestionan el estado, renderizan componentes y manejan eventos. Implementar la carga de datos desde un JSON y gestionar el envío de un formulario de forma asíncrona fue un profundo aprendizaje práctico sobre cómo funcionan las librerías modernas por dentro."
  },
  
  // --- Proyecto 2: Bar de Tapas Virtual ---
  {
    slug: 'bar-de-tapas',
    title: 'Bar de Tapas Virtual',
    tag: 'React',
    imgSrc: '/images/bar-tapas.jpg',
    description: 'Catálogo digital conceptual para un bar de tapas, con imágenes generadas por IA.',
    codeUrl: 'https://github.com/allacalle/bar-de-tapas',
    
    challenge: "Tras consolidar mis conocimientos en desarrollo web nativo, mi siguiente objetivo profesional fue dominar React. Buscaba un proyecto que no solo me permitiera explorar a fondo su arquitectura, sino que también tuviera una aplicación real en un mercado que conozco bien: la hostelería de Córdoba. La idea era simular un encargo profesional, pero con un giro innovador: ¿podría construir el catálogo digital de un bar de tapas que no existe, utilizando imágenes generadas por IA para crear un concepto y una carta completamente virtuales?",
    solution: "Para dar vida a este concepto, diseñé y construí una Single-Page Application (SPA) completa utilizando React. La meta era replicar la estructura de un sitio web corporativo real. La aplicación cuenta con una navegación fluida entre distintas secciones (Inicio, Sobre Nosotros, Contacto) gracias a la implementación de React Router. La arquitectura se basa en componentes modulares y reutilizables, una de las principales fortalezas de React, lo que permitió construir una interfaz de usuario consistente y fácil de mantener.",
    
    gallery: [
      '/images/bar/bar-1.jpg',
      '/images/bar/bar-2.jpg',
      '/images/bar/bar-3.jpg',
      '/images/bar/bar-4.jpg',
      '/images/bar/bar-5.jpg',
      '/images/bar/bar-6.jpg'
    ],
    
    architecture: [
      'Arquitectura SPA (Single-Page Application) para una experiencia de usuario fluida, utilizando React Router para gestionar las rutas del lado del cliente.',
      'Gestión de Estado Local y Flujo de "Props": Se tomó la decisión deliberada de manejar el estado a nivel de componente (useState) y a través del flujo de "props", manteniendo el código limpio y de alto rendimiento para la escala del proyecto.',
      'Interfaz de Usuario Enriquecida: Se integraron librerías de terceros como React-Slick y FontAwesome para crear una UI dinámica y visualmente atractiva.',
      'Datos Desacoplados: Toda la información de los platos y testimonios se almacenó en ficheros JSON, separando limpiamente los datos de la lógica de la aplicación.'
    ],
    techStack: ['React', 'React Router', 'React-Slick', 'FontAwesome', 'Vite', 'ESLint', 'JSON'],
    technicalChallenge: "El principal desafío fue construir una aplicación React completa gestionando el estado de forma nativa. Me centré en dominar el flujo de datos unidireccional de React, utilizando 'props' y 'useState' para comunicar y manejar el estado. Este enfoque me obligó a pensar cuidadosamente en la jerarquía de los componentes y me proporcionó una comprensión fundamental de los principios básicos de React, base para escalar a herramientas más complejas cuando el proyecto realmente lo requiere."
  },

  // --- Proyecto 3: Soluciones Tácticas ---
  {
    slug: 'soluciones-tacticas',
    title: 'Soluciones Tácticas',
    tag: 'React + WP Headless',
    imgSrc: '/images/soluciones-tacticas.jpg',
    description: 'Escaparate digital de alto rendimiento con una arquitectura Headless: React SPA + WordPress Backend.',
    liveUrl: 'https://soluciones-tacticas-frontend-allacalles-projects.vercel.app/',
    codeUrl: 'https://github.com/allacalle/soluciones-tacticas-frontend',
    isWip: true,
    
    challenge: "La historia de este proyecto es la de un ingeniero buscando la solución perfecta a la rigidez de los CMS tradicionales. La pregunta que me obsesionaba era: '¿Cómo puedo combinar la potencia de un backend como WordPress para el cliente con la total libertad de un frontend moderno?'. El antiguo proyecto de un amigo se convirtió en el campo de pruebas ideal, con un matiz clave: su necesidad no era un e-commerce completo, sino un 'escaparate digital' de alto rendimiento centrado en la experiencia de usuario y la navegación intuitiva.",
    solution: "La solución fue una Single-Page Application (SPA) 'headless' construida con React y Vite. El frontend es un catálogo digital ultra-rápido y 100% a medida, donde implementé menús de navegación claros gestionados por React Router, un buscador de productos eficiente y una interfaz agradable. Toda la información de los productos se consume de forma asíncrona desde la API REST de un backend de WordPress que configuré desde cero en un servidor de Google Cloud.",
    
    gallery: [
      '/images/tacticas/tacticas-1.jpg',
      '/images/tacticas/tacticas-2.jpg',
      '/images/tacticas/tacticas-3.jpg',
      '/images/tacticas/tacticas-4.jpg',
      '/images/tacticas/tacticas-5.jpg',
      '/images/tacticas/tacticas-6.jpg'
    ],
    
    architecture: [
      'Infraestructura Cloud a Medida: Se desplegó y configuró un servidor WordPress desde cero en una instancia de Google Cloud, incluyendo la instalación y securización de Nginx, PHP y MySQL en un entorno Linux.',
      'Arquitectura Headless de Alto Rendimiento: Se desacopló completamente el frontend (React SPA) del backend (WordPress), permitiendo una experiencia de usuario instantánea y una flexibilidad total en el diseño.',
      'Arquitectura de Componentes Granular: La interfaz de usuario se desglosó en componentes de alta especialización y única responsabilidad (ej. ProductImageGallery, FilterSidebar, SearchBar).',
      'Lógica de Negocio Encapsulada en Hooks Personalizados: Se crearon hooks personalizados (useProductDetails, useVariationMatcher) para manejar tareas complejas, haciendo el código más limpio, mantenible y fácil de testear.',
      'Cliente de API Robusto y con Tipado Seguro: Se desarrolló un módulo de API en TypeScript para interactuar con la API de WooCommerce de forma genérica, segura y con un manejo de errores exhaustivo.'
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'React Router', 'Hooks Nativos', 'WordPress REST API', 'Google Cloud Platform', 'Nginx', 'Vercel'],
    technicalChallenge: "El desafío técnico más significativo fue diseñar un sistema de estado robusto utilizando únicamente los hooks nativos de React, sin recurrir a una librería de estado global. Esto implicó una cuidadosa orquestación de useState y useEffect y la creación del hook personalizado useVariationMatcher para manejar la compleja lógica de las variaciones de producto en tiempo real. Este enfoque me obligó a dominar en profundidad el ciclo de vida de React, demostrando la capacidad de construir aplicaciones complejas y de alto rendimiento manteniendo un mínimo de dependencias."
  }
];