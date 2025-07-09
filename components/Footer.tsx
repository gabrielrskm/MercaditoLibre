export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal p-10 bg-base-200 text-base-content">
      <aside>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 384 384">
          <path fill="currentColor" d="M363 21v43H21V21h342zm21 214h-21v128h-43V235h-85v128H21V235H0v-43L21 85h342l21 107v43zm-192 85v-85H64v85h128z" />
        </svg>
        <p>
          <strong>DenoEcommerce</strong><br />
          Plataforma e-commerce open source creada por Gabriel Salas.
        </p>
      </aside>

      <nav>
        <header className="footer-title">Proyecto</header>
        <a className="link link-hover">Repositorio en GitHub</a>
        <a className="link link-hover">Roadmap</a>
        <a className="link link-hover">Colaborar</a>
      </nav>

      <nav>
        <header className="footer-title">Acerca de mí</header>
        <a className="link link-hover">Portafolio</a>
        <a className="link link-hover">LinkedIn</a>
        <a className="link link-hover">Contratame</a>
      </nav>

      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Licencia MIT</a>
        <a className="link link-hover">Términos de uso</a>
        <a className="link link-hover">Política de privacidad</a>
      </nav>
    </footer>
  );
}