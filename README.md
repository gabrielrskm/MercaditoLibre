# 🚀 MercaditoLibre : Tu Solución de Ecommerce Simple para Argentina

MercaditoLibre es una plataforma de comercio electrónico de código abierto, construida con Fresh y Deno, diseñada específicamente para la simplicidad y la eficiencia. Orientada a pequeños y medianos comercios en Argentina, ofrece una experiencia de compra fluida con opciones de pago locales como Mercado Pago y transferencias CBU. ¡Configura tu tienda online en minutos y empezá a vender!

---

## ✨ Características Destacadas

- **Rendimiento Ultrarrápido**: Construido con Fresh y Deno para una carga de página casi instantánea y una experiencia de usuario superior.  
- **Diseño Responsivo**: Tu tienda lucirá genial en cualquier dispositivo, desde computadoras de escritorio hasta smartphones.  
- **Integración Flexible de Base de Datos**: Soporte para Supabase y Firebase, permitiéndote elegir la solución de backend que mejor se adapte a tus necesidades.  
- **Pagos Locales para Argentina**:  
  - Mercado Pago: Integración simplificada para pagos con tarjeta, RapiPago, Pago Fácil, etc.  
  - Transferencia CBU: Permite a tus clientes realizar transferencias bancarias directamente.  
- **Gestión de Productos y Categorías**: Interfaz intuitiva para añadir, editar y organizar tu catálogo.  
- **Carro de Compras Persistente**: Los clientes pueden añadir productos al carrito y volver más tarde para completar su compra.  
- **Lista de Favoritos**: Permite a los usuarios guardar productos para futuras compras.  
- **Desplegable y Escalable**: Diseñado para crecer con tu negocio, desde una pequeña boutique hasta un catálogo más extenso.

---

## 🛠️ Tecnologías Utilizadas

- **Fresh**: Framework web moderno para Deno con renderizado del lado del servidor (SSR) y arquitectura de islas.  
- **Deno**: Runtime seguro para JavaScript y TypeScript.  
- **Preact**: Alternativa ligera a React, utilizada por Fresh para la parte interactiva del UI.  
- **Tailwind CSS**: Para un desarrollo de UI rápido y personalizable.  
- **DaisyUI**: Librería para Tailwind que simplifica el diseño.  
- **Base de Datos (a elección)**:  
  - Supabase: PostgreSQL con funcionalidades como RLS, Auth y Storage.  
  - Firebase: Firestore (NoSQL) para escalabilidad simple.

---

## 🔄 Despliegue Gratuito y Escalable

MercaditoLibre está pensado para que cualquier comercio pueda comenzar sin inversión inicial y escalar según su crecimiento.

### ✅ Modo Gratuito (ideal para pequeños emprendimientos)

Podés desplegar tu tienda de forma totalmente gratuita utilizando:

- **Deno Deploy (Free Tier)** para el servidor web.  
- **Supabase (Free Tier)** como base de datos y backend.  
- **Resend (Free Tier)** para envío de correos electrónicos.  
- **Mercado Pago** para pagos locales sin costo adicional.

Con esta configuración, podés tener una tienda funcional y moderna **sin pagar hosting ni base de datos**.

---

### 🚀 Migración a Railway (para comercios que escalan)

Si tu tienda crece y empieza a superar los límites de los servicios gratuitos (más productos, tráfico o funciones avanzadas), podés migrar a un entorno más robusto con **Railway**, una plataforma moderna que ofrece:

- Hosting de tu backend (Deno o Docker).  
- Base de datos PostgreSQL incluida.  
- URL personalizada.  
- Entorno predecible a un costo fijo de **$5 USD/mes** por comercio.

🔧 La migración puede ser realizada por vos o delegada al equipo mantenedor de MercaditoLibre como un servicio adicional.

---

## 🧰 Mantenimiento Opcional

Si no querés encargarte del mantenimiento técnico, podés delegarlo. Ofrecemos soporte opcional que puede incluir:

- Monitoreo y actualizaciones.  
- Migraciones de datos.  
- Soporte ante errores o caídas.  
- Asistencia con integraciones como Mercado Pago.

Este mantenimiento es **opcional y acordado con cada comerciante**. También podés autogestionar tu tienda gracias a la filosofía open source del proyecto.

---

## 🌐 Hosting por tu Cuenta o con Ayuda

MercaditoLibre es open source. Podés:

- Montar tu propia tienda sin depender de terceros.  
- Implementarlo para otros (clientes, cooperativas, sindicatos).  
- Solicitar ayuda para configurarlo.  
- Contribuir al proyecto con mejoras o feedback.

---

## 🧑‍💻 Para Desarrolladores

### 🚀 Cómo Empezar

**Requisitos:**
- Tener Deno instalado (v1.x o superior).  
- Una cuenta en Supabase o Firebase.  
- Credenciales de Mercado Pago (Access Token y Public Key).

### 1. Clonar el Repositorio

```bash
git clone https://github.com/gabydev/MercaditoLibre.git
cd MercaditoLibre
```

2. Configurar Variables de Entorno

Crea un archivo .env en la raíz del proyecto:

# Supabase
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Firebase
FIREBASE_PROJECT_ID="your-project-id"
FIREBASE_PRIVATE_KEY="your-private-key"
FIREBASE_CLIENT_EMAIL="your-client-email"

# Mercado Pago
MERCADOPAGO_ACCESS_TOKEN="YOUR_MERCADOPAGO_ACCESS_TOKEN"
MERCADOPAGO_PUBLIC_KEY="YOUR_MERCADOPAGO_PUBLIC_KEY"

# Puerto
PORT=8000

    ⚠️ No subas tu .env a GitHub. Añadilo a tu .gitignore.

3. Configurar tu Base de Datos

Con Supabase:

    Crear un proyecto nuevo.

    Importar las queries SQL desde /database/supabase/.

    Configurar políticas RLS.

Con Firebase:

    Crear un proyecto nuevo.

    Habilitar Firestore y sus reglas.

    Seguir la estructura de /database/firebase/.

4. Ejecutar el Proyecto

deno install
deno task start

Abrí tu navegador en http://localhost:8000 o el puerto que hayas configurado.
🏗️ Estructura del Proyecto

```bash
├── components/          # Componentes reutilizables
├── islands/             # Componentes interactivos (Preact)
├── routes/              # Rutas de la app (SSR + API)
├── static/              # Archivos estáticos
├── util/                # Funciones de utilidad
├── database/            # SQL/estructura para Supabase o Firebase
├── integrations/        # Pagos, emails, etc.
├── deno.json            # Configuración del proyecto
├── main.ts              # Entrada principal
├── .env-example         # Plantilla de configuración
└── README.md
```

🗺️ Roadmap Futuro

    Panel de Administración: Gestión de pedidos, productos y usuarios.

    Nuevas Pasarelas de Pago: Soporte para pagos regionales e internacionales.

    Optimización de SEO: Mejora de visibilidad en buscadores.

    Notificaciones: Correos automáticos y WhatsApp.

    Internacionalización (i18n): Múltiples idiomas.

🤝 Contribuciones

¡Tu ayuda es bienvenida! Si querés colaborar:

# 1. Hacé un fork
# 2. Creá una rama
git checkout -b feature/tu-nueva-funcionalidad

# 3. Hacé cambios y commiteá
git commit -am 'feat: añadida funcionalidad X'

# 4. Subí y abrí un pull request
git push origin feature/tu-nueva-funcionalidad

📄 Licencia

Este proyecto está bajo la Licencia MIT. Consultá el archivo LICENSE para más detalles.
❤️ Apoyá el Proyecto

Si MercaditoLibre te resulta útil, considerá dejar una ⭐ en GitHub. ¡Tu apoyo ayuda muchísimo!
🌱 Nuestra Visión

MercaditoLibre no es solo una plataforma, es una herramienta para fomentar la economía local, la soberanía tecnológica y el acceso a herramientas digitales justas.

Sumate, contribuí o compartilo con quien lo necesite. 💚