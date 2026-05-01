import './App.css'

const navItems = [
  { label: 'Solutions', hasCaret: true },
  { label: 'Features', hasCaret: false },
  { label: 'Pricing', hasCaret: false },
  { label: 'Blog', hasCaret: true },
  { label: 'Restaurants', hasCaret: false },
  { label: 'Food', hasCaret: true },
]

const trustedFaces = [
  { initials: 'AR', tone: '#d9a77b' },
  { initials: 'MK', tone: '#7c8f67' },
  { initials: 'SJ', tone: '#bea56d' },
  { initials: 'EP', tone: '#98b3b0' },
]

function App() {
  return (
    <div className="page">
      <header className="topbar" aria-label="Primary">
        <a className="brand" href="/" aria-label="Olive home">
          <span className="brand__mark" aria-hidden="true">
            ●
          </span>
          <span className="brand__text">Olive</span>
        </a>

        <nav className="topnav" aria-label="Site navigation">
          {navItems.map((item) => (
            <a key={item.label} className="topnav__link" href="/">
              {item.label}
              {item.hasCaret ? <span aria-hidden="true">▾</span> : null}
            </a>
          ))}
        </nav>

        <div className="topbar__actions">
          <a className="topbar__signin" href="/">
            Sign in
          </a>
          <a className="button button--dark" href="/">
            Get Olive
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <main className="hero">
        <section className="proof" aria-label="Trusted by thousands of healthy families">
          <div className="proof__avatars" aria-hidden="true">
            {trustedFaces.map((face) => (
              <span
                key={face.initials}
                className="proof__avatar"
                style={{ backgroundColor: face.tone }}
              >
                {face.initials}
              </span>
            ))}
          </div>
          <p className="proof__copy">Trusted by thousands of healthy families</p>
        </section>

        <section className="hero__copy">
          <h1>The Safest Way to Shop for Groceries</h1>
          <p>
            Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your
            Family&apos;s Diet and Get Expert-Backed Food Insights.
          </p>

          <div className="hero__actions">
            <a className="button button--dark" href="/">
              <span className="button__icon" aria-hidden="true">
                
              </span>
              Download for iOS
            </a>
            <a className="button button--text" href="/">
              Join the Olive Community
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="showcase" aria-label="Olive app preview">
          <div className="showcase__deco showcase__deco--left" aria-hidden="true" />
          <div className="showcase__deco showcase__deco--right" aria-hidden="true" />

          <div className="phone">
            <div className="phone__speaker" aria-hidden="true" />

            <div className="scan-card">
              <div className="scan-card__hero">
                <div className="scan-card__chip">Scan</div>
                <div className="scan-card__image scan-card__image--hero" />
              </div>

              <div className="product-block">
                <div className="product-block__thumb" />
                <div className="product-block__copy">
                  <h2>Fig and Olive Crackers, Fig and Olive</h2>
                  <p>Lucky Store</p>
                </div>
                <button type="button" className="heart" aria-label="Save item">
                  ♡
                </button>
              </div>

              <div className="rating">
                <span className="rating__score">4.7/100</span>
                <span className="rating__label">Avoid</span>
              </div>

              <div className="insight">
                <div className="insight__badge">Olive Says</div>
                <p>
                  This product is more widely known from the processed snack aisle. It contains
                  multiple additives, so Olive recommends a cleaner alternative for everyday use.
                </p>
              </div>

              <div className="ingredients">
                <h3>Breakdown</h3>
                <div className="ingredients__row ingredients__row--warn">
                  <span>Vegetable oils</span>
                  <span>Limiting</span>
                </div>
                <div className="ingredients__row">
                  <span>Refined flour</span>
                  <span>Moderate</span>
                </div>
                <div className="ingredients__row">
                  <span>Natural flavor</span>
                  <span>Watch</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
