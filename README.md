🚀 EcomDeno: Tu Solución de Ecommerce Simple para Argentina

EcomArg es una plataforma de comercio electrónico de código abierto, construida con Fresh y Deno, diseñada específicamente para la simplicidad y la eficiencia. Orientada a pequeños y medianos comercios en Argentina, ofrece una experiencia de compra fluida con opciones de pago locales como Mercado Pago y transferencias CBU. ¡Configura tu tienda online en minutos y empieza a vender!

✨ Características Destacadas

    Rendimiento Ultrarrápido: Construido con Fresh y Deno para una carga de página casi instantánea y una experiencia de usuario superior.

    Diseño Responsivo: Tu tienda lucirá genial en cualquier dispositivo, desde computadoras de escritorio hasta smartphones.

    Integración Flexible de Base de Datos: Soporte para Supabase y Firebase, permitiéndote elegir la solución de backend que mejor se adapte a tus necesidades.

    Pagos Locales para Argentina:

        Mercado Pago: Integración simplificada para pagos con tarjeta, RapiPago, Pago Fácil, etc.

        Transferencia CBU: Permite a tus clientes realizar transferencias bancarias directamente.

    Gestión de Productos y Categorías: Interfaz intuitiva para añadir, editar y organizar tu catálogo.

    Carro de Compras Persistente: Los clientes pueden añadir productos al carrito y volver más tarde para completar su compra.

    Lista de Favoritos: Permite a los usuarios guardar productos para futuras compras.

    Desplegable y Escalable: Diseñado para crecer con tu negocio, desde una pequeña boutique hasta un catálogo más extenso.

🛠️ Tecnologías Utilizadas

    Fresh: El framework web de próxima generación para Deno, que ofrece renderización del lado del servidor (SSR) y arquitectura de islas.

    Deno: Un runtime seguro para JavaScript y TypeScript, que proporciona una experiencia de desarrollo moderna y simplificada.

    Preact: Una alternativa ligera a React, utilizada por Fresh para la parte interactiva del UI.

    Tailwind CSS: Para un desarrollo de UI rápido y altamente personalizable.

    DaisyUI : libreria para Tailwind para simplificar el diseño 

    Base de Datos (a elegir):

        Supabase: Backend-as-a-Service de código abierto con una potente base de datos PostgreSQL.

        Firebase: Plataforma de desarrollo de Google con Cloud Firestore (NoSQL) para una fácil escalabilidad.

🚀 Cómo Empezar (Para Desarrolladores)

Requisitos

    Deno instalado (versión 1.x o superior recomendada).

    Una cuenta en Supabase o Firebase para tu backend.

    Credenciales de Mercado Pago (Access Token, Public Key) para el procesamiento de pagos.

1. Clonar el Repositorio

Bash

git clone https://github.com/tu-usuario/EcomArg.git
cd EcomArg

2. Configuración de Variables de Entorno

Crea un archivo .env en la raíz del proyecto y añade tus credenciales.
Fragmento de código

# Ejemplo para Supabase
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key" # Para operaciones de backend seguras

# Ejemplo para Firebase (asegúrate de configurar las variables de entorno para el Admin SDK)
FIREBASE_PROJECT_ID="your-project-id"
# Otras variables para el Admin SDK, como una clave privada o ruta a un archivo JSON de credenciales
# FIREBASE_PRIVATE_KEY="your-private-key"
# FIREBASE_CLIENT_EMAIL="your-client-email"

# Credenciales de Mercado Pago (reemplaza con las tuyas)
MERCADOPAGO_ACCESS_TOKEN="YOUR_MERCADOPAGO_ACCESS_TOKEN"
MERCADOPAGO_PUBLIC_KEY="YOUR_MERCADOPAGO_PUBLIC_KEY"

# Opcional: Puerto para la aplicación Deno
PORT=8000

Importante: Nunca subas tu archivo .env a control de versiones. Asegúrate de añadirlo a tu .gitignore.

3. Configurar tu Base de Datos

Con Supabase

    Crea un nuevo proyecto en Supabase.

    Importa las query proporcionado en la carpeta database/supabase/ a tu base de datos PostgreSQL de Supabase.

    Configura las políticas de Row Level Security (RLS) según tus necesidades de seguridad.

Con Firebase

    Crea un nuevo proyecto en Firebase.

    Habilita Cloud Firestore y configura tus reglas de seguridad para Firestore.

    Implementa la estructura de colecciones y documentos según el modelo NoSQL de la carpeta database/firebase.

4. Instalar Dependencias y Ejecutar

Bash

deno install 

deno task start

Esto instalara las dependencias (tiene dependencias npm!!) e iniciará el servidor de desarrollo de Fresh. Abre tu navegador y visita http://localhost:8000 (o el puerto que hayas configurado).

🏗️ Estructura del Proyecto

EcomArg/
├── components/          # Componentes reutilizables (no islas por defecto)
├── islands/             # Componentes interactivos que se hidratan en el cliente
├── routes/              # Rutas de tu aplicación (páginas y API handlers)
├── static/              # Archivos estáticos (imágenes, CSS, etc.)
├── util/                # Utilidades y funciones de ayuda
├── database/            # Archivos relacionados con la base de datos (esquemas SQL, etc.)
├── integrations/        # Archivos relacionados con medios de pago y envio de mails
├── deno.json            # Archivo de configuración de Deno
├── main.ts              # Punto de entrada de la aplicación Fresh
├── .env.example         # Ejemplo de archivo de variables de entorno
└── README.md            # Este archivo

🗺️ Roadmap Futuro

    Panel de Administración: Una interfaz de administración robusta para la gestión de pedidos, productos, usuarios y descuentos.

    Pasarelas de Pago Adicionales: Explorar otras opciones de pago regionales o internacionales.

    Optimización de SEO: Mejorar la visibilidad en motores de búsqueda.

    Notificaciones: Integración con servicios de notificación por correo electrónico o WhatsApp para actualizaciones de pedidos.

    Internacionalización (i18n): Soporte para múltiples idiomas.

🤝 Contribuciones

¡Tu ayuda es bienvenida! Si tienes ideas para mejorar EcomArg, encuentra un bug o quieres añadir una nueva característica, por favor:

    Haz un "fork" de este repositorio.

    Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

    Realiza tus cambios y haz "commit" (git commit -am 'feat: Añade nueva funcionalidad X').

    Sube tus cambios (git push origin feature/nueva-funcionalidad).

    Abre un "Pull Request".

📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

❤️ Apoya el Proyecto

Si encuentras EcomArg útil, considera darle una ⭐ en GitHub. ¡Tu apoyo es muy valorado!

¡Espero que este README.md te sirva como una excelente base para tu proyecto! Puedes ajustarlo con los detalles específicos de tu implementación y añadir capturas de pantalla o un GIF de la aplicación en acción para hacerlo aún más atractivo. ¡Mucho éxito con EcomDeno!