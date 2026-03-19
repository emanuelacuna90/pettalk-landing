import imgCollar from '../assets/dog-collar-gear.webp'

function HomeLanding() {
  return (
    <>
      <section className="hero" id="producto">
        <div className="hero-text">
          <p className="hero-eyebrow">Collar inteligente para perros y gatos</p>
          <h1>
            Entendé lo que tu mascota
            <span className="hero-highlight"> quiere decirte</span>.
          </h1>
          <p className="hero-copy">
            PetTalk es un collar inteligente diseñado para traducir los ladridos y maullidos de tus mascotas,
            transformando sus sonidos y expresiones en mensajes claros que puedas comprender.
          </p>
          <div className="hero-bullets">
            <span>Traducción en tiempo real</span>
            <span>Compatible con perros y gatos</span>
            <span>App móvil intuitiva</span>
          </div>
          <div className="hero-actions">
            <button className="btn-primary">Reservar demo</button>
            <button className="btn-ghost">Ver cómo funciona</button>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-card">
            <div className="hero-product-image">
            <img src={imgCollar} alt="PetTalk" style={{ width: '100%', height: '100%' }}/>
            </div>
            <h3>PetTalk</h3>
            <p className="hero-price">USD 99</p>
            <p className="hero-tagline">
              El collar inteligente que traduce los ladridos y maullidos de tus mascotas en tiempo real.
            </p>
            <button className="btn-primary full-width">Agregar al carrito</button>
          </div>
        </div>
      </section>

      <section className="sections-grid">
        <article className="section-card">
          <p className="section-label">Estrategia de negocio</p>
          <h2 className="section-title">
            <span className="icon">💡</span>
            Marketing
          </h2>
          <p className="section-copy">
            PetTalk se lanza como un producto emocional, centrado en el vínculo con las mascotas y la curiosidad
            por “escuchar” lo que sienten.
          </p>
          <ul className="section-list">
            <li>
              <strong>Estrategias de lanzamiento:</strong> campañas publicitarias centradas en el vínculo emocional con las
              mascotas.
            </li>
            <li>
              <strong>Branding:</strong> promoción en redes con influencers de perros y gatos.
            </li>
            <li>
              <strong>Demostraciones en vivo:</strong> eventos en tiendas de mascotas y ferias de tecnología.
            </li>
            <li>
              <strong>Contenido educativo:</strong> blogs y videos explicando cómo funciona PetTalk y sus beneficios.
            </li>
          </ul>
        </article>

        <article className="section-card" id="ia">
          <p className="section-label">Tecnología</p>
          <h2 className="section-title">
            <span className="icon">🤖</span>
            Inteligencia Artificial
          </h2>
          <p className="section-copy">
            La IA es la base de Pet Talk, ya que permite traducir los sonidos de tu mascota en mensajes.
            La función que cumple el collar es captar los ladridos; la IA los analiza usando algoritmos,
            reconociendo qué es lo que quiere decir tu mascota. Para que esto sea posible, interviene
            una base de datos donde se almacenan y clasifican distintos sonidos. Estos datos permiten
            entrenar el aprendizaje automático, comparando nuevos sonidos con los que ya están guardados.
          </p>
          <ul className="section-list">
            <li>
              <strong>Algoritmos avanzados:</strong> modelos que interpretan y traducen ladridos y maullidos.
            </li>
            <li>
              <strong>Aprendizaje continuo:</strong> mejora con cada interacción para aumentar la precisión.
            </li>
            <li>
              <strong>Personalización:</strong> adapta la traducción a la personalidad y comportamiento de cada mascota.
            </li>
          </ul>
        </article>

        <article className="section-card" id="comercio">
          <p className="section-label">Escalamiento global</p>
          <h2 className="section-title">
            <span className="icon">🌍</span>
            Comercio Internacional
          </h2>
          <p className="section-copy">
            PetTalk se prepara para exportar y escalar de forma planificada, cumpliendo requisitos y optimizando logística según cada etapa del crecimiento.
          </p>
          <ul className="section-list">
            <li>
              <strong>Clasificación NCM:</strong> el producto se encuadra bajo la NCM <strong>8517.62.00</strong> (dispositivos electrónicos de transmisión de datos).
            </li>
            <li>
              <strong>Trámite VUCE:</strong> gestionar la documentación y consultas mediante la <strong>VUCE</strong> (página oficial VUCE) para asegurar el cumplimiento en comercio exterior.
            </li>
            <li>
              <strong>Envío y modalidad:</strong> <br />
              ✈️ <strong>Aéreo</strong> para productos tecnológicos (más rápido).<br />
              🚢 <strong>Marítimo</strong> si se incrementa el volumen y conviene optimizar costos.
            </li>
            <li>
              <strong>Estrategia de internacionalización:</strong> iniciar exportaciones hacia <strong>Brasil</strong> aprovechando los beneficios del <strong>Mercosur</strong>, y luego expandirse a mercados desarrollados como <strong>Estados Unidos</strong> y <strong>Japón</strong>, posicionando PetTalk como una innovación tecnológica en el vínculo humano-mascota.
            </li>
          </ul>
        </article>

        <article className="section-card" id="ciberseguridad">
          <p className="section-label">Confianza &amp; datos</p>
          <h2 className="section-title">
            <span className="icon">🔒</span>
            Ciberseguridad
          </h2>
          <p className="section-copy">
            La seguridad de la información del collar y la privacidad de las familias es una prioridad clave.
          </p>
          <ul className="section-list">
            <li>
              <strong>Encriptación de datos:</strong> cifrado de extremo a extremo para proteger las comunicaciones.
            </li>
            <li>
              <strong>Privacidad:</strong> políticas que impiden la captura ilegal de datos y el uso indebido del micrófono.
            </li>
            <li>
              <strong>Accesos seguros:</strong> autenticación robusta y acceso restringido a usuarios autorizados.
            </li>
            <li>
              <strong>Actualizaciones:</strong> parches de seguridad y mejoras constantes del software del collar.
            </li>
          </ul>
        </article>
      </section>

      <section className="cta">
        <div>
          <h2>Pet Talk: para una conexion emocional con tus mascotas.</h2>
          <p>
            Pet Talk es un collar inteligente que traduce los ladridos y maullidos de tus mascotas en tiempo real.
          </p>
        </div>
        <div className="cta-actions">
          <button className="btn-light">Descargar material</button>
          <button className="btn-outline-light">Contactar ventas educativas</button>
        </div>
      </section>
    </>
  )
}

export default HomeLanding

