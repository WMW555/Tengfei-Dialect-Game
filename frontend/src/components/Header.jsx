import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页', end: true },
  { to: '/rules', label: '玩法说明' },
  { to: '/about', label: '关于项目' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="猜言大作战首页">
          猜<span>“言”</span>大作战
        </NavLink>
        <nav className="main-nav" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
