import { Head } from "$fresh/src/runtime/head.ts";
import Menu from "../components/Menu.tsx";
import Footer from "../components/Footer.tsx";

export default function Register() {
  return (
    <>
      <Head>
        <title>Registrarse | MercaditoLibre</title>
        <meta name="description" content="Crea tu cuenta en MercaditoLibre" />
      </Head>
      <div className="container h-full bg-base-200 mx-auto">
        <Menu />
        <div className="flex justify-center items-center min-h-screen pt-20">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-center mb-6">
                Crear Cuenta
              </h2>
              
              {/* Formulario de registro */}
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nombre completo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Ingresa tu email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Usuario</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Elige un nombre de usuario"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Contraseña</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Crea una contraseña"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirmar contraseña</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirma tu contraseña"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
                <div className="form-control mt-6">
                  <button className="btn btn-primary w-full">
                    Crear Cuenta
                  </button>
                </div>
              </form>
              
              {/* Divider */}
              <div className="divider">O regístrate con</div>
              
              {/* Botones de redes sociales */}
              <div className="space-y-3">
                <button className="btn btn-outline w-full flex items-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continuar con Google
                </button>
                
                <button className="btn btn-outline w-full flex items-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Continuar con Facebook
                </button>
              </div>
              
              {/* Enlaces adicionales */}
              <div className="text-center mt-6">
                <p className="text-sm">
                  ¿Ya tienes cuenta? 
                  <a href="/login" className="link link-primary ml-1">Inicia sesión aquí</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}