function MarketingLanding() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Marketing para PetTalk</p>
          <h1>
            Publicidad con foco en el vínculo con{" "}
            <span className="hero-highlight">perros y gatos</span>.
          </h1>
          <p className="hero-copy">
            PetTalk convierte ladridos y maullidos en mensajes claros. La campaña apunta a mostrar
            valor emocional y utilidad real para que la gente quiera probarlo (o comprarlo) por su experiencia.
          </p>

          <div className="hero-bullets">
            <span>Dueños con mascotas</span>
            <span>Familias y entrenadores</span>
            <span>Interés en tecnología</span>
          </div>

          <div className="hero-actions">
            <button className="btn-primary">Reservar demo (demo)</button>
            <a className="btn-ghost" href="#/desarrollo">
              Ver Desarrollo + Ciberseguridad
            </a>
          </div>

          <p className="hero-note">
            Esta landing está pensada para explicar en clase: público objetivo, objetivos de campaña y canales.
          </p>
        </div>

        <div className="hero-media">
          <div className="hero-card">
            <div className="hero-product-image">Imagen de campaña / producto (placeholder)</div>
            <span className="hero-badge">Demo educativo</span>
            <h3>Kit de marketing para clases</h3>
            <p className="hero-price">USD 99</p>
            <p className="hero-tagline">
              Material para presentar la idea: mensaje, público objetivo y plan de difusión.
            </p>
            <button className="btn-primary full-width">Agregar al carrito (demo)</button>
          </div>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <p className="section-label">Público objetivo</p>
          <h2 className="section-title">
            <span className="icon">OBJ</span>
            ¿A quién apunta la publicidad?
          </h2>
          <p className="section-copy">
            La campaña se dirige a personas que valoran la comunicación con sus mascotas y buscan mejorar su rutina.
          </p>
          <ul className="section-list">
            <li>
              <strong>Dueños de perros y gatos</strong> (principalmente en ciudades).
            </li>
            <li>
              <strong>Familias</strong> que invierten tiempo y dinero en bienestar animal.
            </li>
            <li>
              <strong>Personas con interés en tecnología</strong> (smart devices y apps).
            </li>
            <li>
              <strong>Entrenadores / veterinarias</strong> que pueden recomendar una herramienta de monitoreo.
            </li>
          </ul>
        </article>

        <article className="section-card">
          <p className="section-label">Objetivos de campaña</p>
          <h2 className="section-title">
            <span className="icon">GO</span>
            Qué queremos lograr
          </h2>
          <p className="section-copy">
            Convertir una idea “curiosa” en una solución útil: que la gente entienda el beneficio en segundos.
          </p>
          <ul className="section-list">
            <li>
              <strong>Awareness:</strong> que conozcan PetTalk y entiendan “traducción en tiempo real”.
            </li>
            <li>
              <strong>Interés:</strong> generar ganas de ver el resultado (demo / video / prueba guiada).
            </li>
            <li>
              <strong>Conversión:</strong> captar leads para reservas, preventa o adopción en tienda.
            </li>
            <li>
              <strong>Confianza:</strong> destacar seguridad y cuidado de datos para usuarios.
            </li>
          </ul>
        </article>

        <article className="section-card">
          <p className="section-label">Canales</p>
          <h2 className="section-title">
            <span className="icon">CH</span>
            Dónde se publica
          </h2>
          <p className="section-copy">
            La clave es mostrar el “antes y después”: del sonido de la mascota al mensaje comprensible.
          </p>
          <ul className="section-list">
            <li>
              <strong>Redes sociales:</strong> Reels/TikTok y stories con demostraciones cortas.
            </li>
            <li>
              <strong>Influencers:</strong> dueños de mascotas, entrenadores y creadores de contenido.
            </li>
            <li>
              <strong>Eventos:</strong> ferias tecnológicas y stands en tiendas de mascotas.
            </li>
            <li>
              <strong>Contenido educativo:</strong> blogs y videos que expliquen beneficios y funcionamiento.
            </li>
          </ul>
        </article>
      </section>

      <section className="cta">
        <div>
          <h2>Listo para presentar en clase</h2>
          <p>
            En Marketing podés explicar público objetivo, objetivos de campaña y canales de difusión con ejemplos del flyer.
          </p>
        </div>
        <div className="cta-actions">
          <button className="btn-light">Descargar material (placeholder)</button>
          <button className="btn-outline-light">Contactar ventas educativas (placeholder)</button>
        </div>
      </section>
    </>
  )
}

export default MarketingLanding

