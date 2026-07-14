import { Link, useLocation } from 'react-router-dom'

function ResultPage() {
  const { state: result } = useLocation()

  if (!result || typeof result.score !== 'number' || typeof result.total !== 'number') {
    return (
      <section className="empty-state">
        <p className="eyebrow">答题结果</p>
        <h1>暂无答题结果</h1>
        <p>请先完成答题，再来查看本次得分。</p>
        <Link className="button primary" to="/">
          返回首页
        </Link>
      </section>
    )
  }

  return (
    <section className="result-page">
      <div className="result-summary">
        <p className="eyebrow">挑战完成</p>
        <h1>本次得分</h1>
        <div className="score" aria-label={`得分 ${result.score}，总分 ${result.total}`}>
          <strong>{result.score}</strong>
          <span>/ {result.total}</span>
        </div>
        <p>{result.isCorrect ? '答对了！你很懂这句上海话。' : '差一点！记住解释，下次一定能答对。'}</p>
      </div>

      <article className="answer-review">
        <div className="review-heading">
          <div>
            <p className="eyebrow">本题回顾</p>
            <h2>{result.dialect} · {result.word}</h2>
          </div>
          <span className={`status-badge ${result.isCorrect ? 'open' : 'wrong'}`}>
            {result.isCorrect ? '回答正确' : '回答错误'}
          </span>
        </div>
        <dl>
          <div>
            <dt>你的答案</dt>
            <dd>{result.selectedAnswer}</dd>
          </div>
          <div>
            <dt>正确答案</dt>
            <dd>{result.correctAnswer}</dd>
          </div>
          <div>
            <dt>词语解释</dt>
            <dd>{result.explanation}</dd>
          </div>
        </dl>
      </article>

      <div className="button-row">
        <Link className="button primary" to="/quiz">
          重新开始
        </Link>
        <Link className="button secondary" to="/">
          返回首页
        </Link>
      </div>
    </section>
  )
}

export default ResultPage
