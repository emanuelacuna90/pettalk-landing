import appMockup from '../assets/app.jpeg'

function DevSecurityLanding() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Analista de Sistemas</p>
          <h1>
            Desarrollo móvil +{" "}
            <span className="hero-highlight">cuidado de datos</span>.
          </h1>
          <p className="hero-copy">
            Esta landing resume el rol de Analista de Sistemas y cómo se construye la app que conecta
            con el collar para mostrar traducciones en tiempo real, guardar historial y alertar cambios del estado de la mascota.
          </p>

          <div className="hero-bullets">
            <span>Android e iOS</span>
            <span>Bluetooth o WiFi</span>
            <span>Alertas en tiempo real</span>
          </div>

          <div className="hero-actions">
            <a className="btn-primary" href="#/marketing">
              Volver a Marketing
            </a>
            <button className="btn-ghost">Ver demo (placeholder)</button>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-card">
            <div className="hero-product-image">
              <img src={appMockup} alt="PetTalk" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'top' }}/>
            </div>
            <span className="hero-badge">Plan técnico</span>
            <h3>Arquitectura para PetTalk</h3>
            <p className="hero-price">Versión demo</p>
            <p className="hero-tagline">
              Organización de módulos: conectividad, sincronización, notificaciones y seguridad.
            </p>
            <button className="btn-primary full-width">Agregar al carrito (demo)</button>
          </div>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <p className="section-label">Desarrollo de la aplicación</p>
          <h2 className="section-title">
            <span className="icon">DEV</span>
            Qué se construye
          </h2>
          <p className="section-copy">
            PetTalk se plantea como una solución móvil que se comunica con el collar para entregar
            traducciones y estado de la mascota.
          </p>
          <ul className="section-list">
            <li>
              <strong>Desarrollo de la aplicación:</strong> crear una app compatible con Android e iOS que se conecte al
              collar mediante Bluetooth o WiFi para ver traducciones y estado en tiempo real.
            </li>
            <li>
              <strong>Sincronización de datos:</strong> integrar el collar con la app para almacenar historial de comportamiento,
              emociones detectadas y patrones de actividad.
            </li>
            <li>
              <strong>Notificaciones en tiempo real:</strong> alertas automáticas cuando la mascota presente necesidades o cambios
              en su estado (hambre, estrés, aburrimiento).
            </li>
            <li>
              <strong>Actualizaciones:</strong> permitir mejoras constantes mediante actualizaciones del sistema, incorporando
              nuevas funciones y optimizando la precisión de la IA.
            </li>
          </ul>
        </article>

        <article className="section-card">
          <p className="section-label">Ciberseguridad</p>
          <h2 className="section-title">
            <span className="icon">SEC</span>
            Cómo cuidar los datos de usuarios
          </h2>
          <p className="section-copy">
            Además de la traducción, el sistema debe proteger la privacidad y la información almacenada por la app.
          </p>
          <ul className="section-list">
            <li>
              <strong>Minimización y propósito:</strong> guardar solo lo necesario para el funcionamiento (historial y alertas),
              evitando recolección extra.
            </li>
            <li>
              <strong>Encriptación de datos:</strong> cifrar la información en tránsito y en reposo para reducir el riesgo de accesos no autorizados.
            </li>
            <li>
              <strong>Control de acceso:</strong> autenticación segura y permisos por usuario para que cada familia vea solo su información.
            </li>
            <li>
              <strong>Seguridad en conectividad (Bluetooth/WiFi):</strong> usar canales protegidos y mecanismos para prevenir interceptación.
            </li>
            <li>
              <strong>Actualizaciones de seguridad:</strong> parches regulares para corregir vulnerabilidades y mantener la confiabilidad del sistema.
            </li>
          </ul>
        </article>

        <article className="section-card">
          <p className="section-label">Accesibilidad &amp; UX/UI</p>
          <h2 className="section-title">
            <span className="icon">UX</span>
            Experiencia fácil para el usuario
          </h2>
          <p className="section-copy">
            La app es simple de usar en el día a día: muestra una interfaz clara y accesible para distintas personas y dispositivos.
          </p>
          <ul className="section-list">
            <li>
              <strong>Interfaz clara:</strong> la app usa lenguaje simple, jerarquía visual y pasos guiados para que entender sea inmediato.
            </li>
            <li>
              <strong>Legibilidad:</strong> ofrece buen contraste, tipografía legible y tamaños ajustables para mejorar la lectura.
            </li>
            <li>
              <strong>Accesibilidad:</strong> permite navegar con teclado/controles, incluye etiquetas para lectores de pantalla y muestra foco visible.
            </li>
            <li>
              <strong>Botones y toques:</strong> usa áreas táctiles grandes, espaciado adecuado y acciones consistentes para evitar errores.
            </li>
            <li>
              <strong>Feedback inmediato:</strong> muestra estados de carga, confirmaciones y mensajes de error comprensibles.
            </li>
            <li>
              <strong>Transparencia de datos:</strong> explica qué se guarda (historial/alertas) y ofrece opciones claras para gestionar preferencias.
            </li>
          </ul>
        </article>
      </section>

      <section className="cta">
        <div>
          <h2>Descarga la version Demo de la app</h2>
          <p>
            En Desarrollo + Ciberseguridad podés descargar la versión demo de la app y ver cómo se protege el historial y la privacidad de los usuarios.
          </p>
        </div>
        <div className="cta-actions">
          <button className="btn-light">Descargar versión demo</button>
          <button className="btn-outline-light">Contactar equipo técnico</button>
        </div>
      </section>
    </>
  )
}

export default DevSecurityLanding

