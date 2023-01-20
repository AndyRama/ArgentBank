import './Header.scss'

function Header({ fullName }) {
  return (
    <header className="header">
      <h1>
        Welcom back
        <br />
        {fullName} !
      </h1>
    </header>
  )
}

export default Header
