# Adharas-Beauty- 
Adharas-Beauty/
├── node_modules/               # Dependencias del proyecto
├── dist/                       # Archivos de distribución
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
