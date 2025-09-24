# Adhara´s Beauty - Algoritmos 2025

**Adhara´s Beauty** es un ecommerce enfocado en el maquillaje y la belleza personalizada. Aquí puedes:

- Descubrir los best sellers y productos en tendencia alrededor del mundo.
- Encontrar tu match perfecto: tonos y maquillajes que se adaptan a ti.
- Ser miembro de la comunidad y acceder a beneficios exclusivos.

Nuestro objetivo es crear un espacio donde la belleza sea inclusiva, accesible y personalizada para cada persona.

---

## 🧠 Estructura del Proyecto (Scaffolding)

```bash
Adharas-beauty/
├── dist/                        # Archivos de distribución
├── node_modules/                # Dependencias del proyecto
├── public/                      # Archivos públicos como imágenes
├── public/                     
│   ├── index.html              # HTML principal
│   ├── images/                 # Imágenes estáticas
│   └── icons/                  # Íconos (favicon, logos, etc.)
│
├── src/
│   ├── assets/                 # Recursos (fuentes, imágenes locales)
│   ├── components/             # Componentes UI reutilizables
│   │   ├── Navbar.ts
│   │   ├── Footer.ts
│   │   ├── ProductCard.ts
│   │   ├── ProductFilter.ts
│   │   ├── ProductCarousel.ts
│   │   ├── Banner.ts
│   │   ├── MembershipCard.ts
│   │   ├── LoginForm.ts
│   │   └── SignupForm.ts
│   │
│   ├── layouts/                # Layouts principales
│   │   ├── MainLayout.ts
│   │   └── AuthLayout.ts
│   │
│   ├── pages/                  # Vistas del e-commerce
│   │   ├── Home.ts
│   │   ├── Category.ts        # (ej: lips, skincare, etc.)
│   │   ├── ProductDetail.ts
│   │   ├── Cart.ts
│   │   ├── Membership.ts
│   │   ├── Login.ts
│   │   └── Signup.ts
│   │
│   ├── services/               # Conexión a API o datos fake
│   │   ├── ProductService.ts
│   │   └── AuthService.ts
│   │
│   ├── store/                  # Estado global (ej: carrito, usuario)
│   │   ├── cartSlice.ts
│   │   ├── userSlice.ts
│   │   └── index.ts
│   │
│   ├── styles/                 # Estilos globales o módulos CSS
│   │   └── globals.css
│   │
│   ├── utils/                  # Funciones helper
│   │   └── formatPrice.ts      # Calcular descuentos y membresías
│   │   ├── applyDiscount.ts    # Funciones para manejar carrito (subtotal, total, etc.)
│   │   ├── cartHelpers.ts       # Validar emails en registro/login   
│   │   └── validateEmail.ts       
│   └── types/                  # Definiciones de tipos TS
│       ├── product.ts
│       └── user.ts
│
├── .gitignore
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md


✍️ Convención de Commits
Para mantener un historial limpio y coherente, seguimos la siguiente convención de nombres de commits:

Tipo	Descripción
Fix	Corrección de errores
FEAT	Nuevas características o funcionalidades
STYLE	Cambios de formato que no afectan la lógica del código
REFACTOR	Cambios en la estructura del código sin corregir errores
TEST	Modificaciones o agregados en pruebas
CHORE	Tareas de mantenimiento o configuración del proyecto
breaking	Cambios que rompen compatibilidad con versiones anteriores
DOCS	Cambios en la documentación
CREATE COMPONENT	Creación de un nuevo componente

🚀 Tecnologías Usadas
TypeScript

HTML / CSS

Web Components

Eslint

Firebase (por definir si aplica)
