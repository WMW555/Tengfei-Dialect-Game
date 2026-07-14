import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

function Layout() {
  return (
    <div className="site-shell">
      <Header />
      <main className="page-container">
        <Outlet />
      </main>
      <footer className="site-footer">猜“言”大作战 · v0.1 Demo</footer>
    </div>
  )
}

export default Layout
