import './Hero.scss'

function Hero() {
  const subtitles = ['no fees.', 'no minimum deposit.', 'high interest rates.']
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {subtitles.map((subtitles, index) => (
          <p key={index} className="subtitle">
            {subtitles}
          </p>
        ))}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  )
}
export default Hero
