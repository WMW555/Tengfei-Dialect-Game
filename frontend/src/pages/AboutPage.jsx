import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <section className="content-page about-page">
      <div className="page-intro">
        <p className="eyebrow">关于项目</p>
        <h1>让乡音被更多人听见</h1>
        <p>
          “猜‘言’大作战”是一款方言文化互动游戏，希望用轻松的答题体验，让大家认识不同地区的词语与表达。
        </p>
      </div>

      <div className="about-grid">
        <article>
          <span>01</span>
          <h2>寓教于乐</h2>
          <p>把方言知识放进简单有趣的游戏流程，让了解文化不再有距离。</p>
        </article>
        <article>
          <span>02</span>
          <h2>连接乡音</h2>
          <p>记录不同地域的鲜活表达，也为彼此理解打开一扇小小的窗口。</p>
        </article>
        <article>
          <span>03</span>
          <h2>持续成长</h2>
          <p>当前为 v0.1 Demo，后续将扩展题库、音频题型和更多互动玩法。</p>
        </article>
      </div>

      <Link className="button primary" to="/">
        去看看玩法
      </Link>
    </section>
  )
}

export default AboutPage
