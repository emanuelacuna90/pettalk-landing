import { useEffect, useMemo, useState } from 'react'
import './App.css'

import HomeLanding from './landings/HomeLanding'
import MarketingLanding from './landings/MarketingLanding'
import DevSecurityLanding from './landings/DevSecurityLanding'
import logoPng from './assets/logo.png'

function getRouteFromHash() {
  const hash = window.location.hash || '#/marketing'
  if (hash.startsWith('#/desarrollo')) return 'desarrollo'
  if (hash === '#' || hash === '#/' || hash.startsWith('#/home')) return 'home'
  if (hash.startsWith('#/marketing')) return 'marketing'
  return 'home'
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash)

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    // Scroll reveal con IntersectionObserver (equivalente a "reveal al entrar en viewport")
    const container = document.querySelector('.page')
    if (!container) return

    const upEls = Array.from(container.querySelectorAll('.hero-text, .section-card'))
    const fadeEls = Array.from(container.querySelectorAll('.hero-media, .cta'))

    const allEls = [...upEls, ...fadeEls]

    // Preparar clases iniciales
    for (const el of allEls) {
      el.classList.add('reveal')
      el.classList.remove('reveal--visible')
    }
    for (const el of upEls) el.classList.add('reveal--up')
    for (const el of fadeEls) el.classList.add('reveal--fade')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('reveal--visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.18 }
    )

    for (const el of allEls) observer.observe(el)

    return () => observer.disconnect()
  }, [route])

  const ctaTitle = useMemo(() => {
    if (route === 'marketing') return 'Landing Marketing de PetTalk'
    if (route === 'desarrollo') return 'Landing Desarrollo + Ciberseguridad de PetTalk'
    return 'Home de PetTalk'
  }, [route])

  return (
    <div className="page">
      <header className="header">
        <div className="logo">
          <div className="logo-img">
            <img src={logoPng} alt="PetTalk" style={{ width: '50px', height: '50px' }}/>
          </div>
          <div>
            <div className="logo-title">PetTalk</div>
            <div className="logo-subtitle">Traduce ladridos y maullidos en tiempo real.</div>
          </div>
        </div>
        <nav className="nav" aria-label="Secciones">
          <a href="#/" className={route === 'home' ? 'nav-active' : undefined}>Home</a>
          <a
            href="#/marketing"
            className={route === 'marketing' ? 'nav-active' : undefined}
          >
            Marketing
          </a>
          <a
            href="#/desarrollo"
            className={route === 'desarrollo' ? 'nav-active' : undefined}
          >
            Desarrollo + Ciberseguridad
          </a>
        </nav>
      </header>

      <main aria-label={ctaTitle}>
        {route === 'marketing' ? (
          <MarketingLanding />
        ) : route === 'desarrollo' ? (
          <DevSecurityLanding />
        ) : (
          <HomeLanding />
        )}
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} PetTalk. Todos los derechos reservados.</span>
        <span>
          Web: <a href="https://www.pettalk.com">www.pettalk.com</a> · Email:{' '}
          <a href="mailto:info@pettalk.com">info@pettalk.com</a>
        </span>
      </footer>
    </div>
  )
}
