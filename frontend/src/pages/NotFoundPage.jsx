import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="empty-state not-found-page">
      <span className="error-code">404</span>
      <p className="eyebrow">走错路了</p>
      <h1>页面不存在</h1>
      <p>这个地址没有对应的内容，回到首页继续探索吧。</p>
      <Link className="button primary" to="/">
        返回首页
      </Link>
    </section>
  )
}

export default NotFoundPage
