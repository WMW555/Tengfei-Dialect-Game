import { useRef } from 'react'
import { Link } from 'react-router-dom'

const gameModes = [
  {
    title: '方言词义猜猜看',
    description: '从四个选项中，猜出方言词语的真正含义。',
    status: '已开放',
    available: true,
  },
  {
    title: '听音辨方言',
    description: '听一段乡音，判断它来自哪座城市。',
    status: '即将开放',
    available: false,
  },
  {
    title: '方言连连看',
    description: '把方言词语与对应解释快速配对。',
    status: '即将开放',
    available: false,
  },
]

function HomePage() {
  const comingSoonDialog = useRef(null)

  const showComingSoon = () => {
    comingSoonDialog.current?.showModal()
  }

  return (
    <section className="home-page">
      <div className="hero-panel">
        <p className="eyebrow">方言文化互动游戏</p>
        <h1>猜“言”大作战</h1>
      </div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">选择玩法</p>
          <h2>今天想挑战哪一种？</h2>
        </div>
        <Link className="text-link" to="/rules">
          查看玩法说明 →
        </Link>
      </div>

      <div className="game-grid">
        {gameModes.map((mode, index) => (
          <article className={`game-card ${mode.available ? 'available' : 'coming-soon'}`} key={mode.title}>
            <div className="card-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </div>
            <span className={`status-badge ${mode.available ? 'open' : ''}`}>{mode.status}</span>
            <h3>{mode.title}</h3>
            <p>{mode.description}</p>
            {mode.available ? (
              <Link className="button primary card-action" to="/quiz">
                开始挑战
              </Link>
            ) : (
              <button className="button secondary card-action" type="button" onClick={showComingSoon}>
                敬请期待
              </button>
            )}
          </article>
        ))}
      </div>

      <dialog className="feedback-dialog coming-soon-dialog" ref={comingSoonDialog}>
        <p className="eyebrow">即将开放</p>
        <h2>该玩法正在开发中</h2>
        <p>先体验“方言词义猜猜看”吧，更多玩法会在后续版本中加入。</p>
        <form method="dialog">
          <button className="button primary" type="submit">
            知道了
          </button>
        </form>
      </dialog>
    </section>
  )
}

export default HomePage
