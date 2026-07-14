import { Link } from 'react-router-dom'

const steps = [
  ['01', '选择答案', '阅读方言词语与问题，从四个选项中选择你认为正确的含义。'],
  ['02', '提交查看', '提交后会立即判断正误，并在弹窗中展示正确答案与词语解释。'],
  ['03', '查看结果', '完成本题后进入结果页查看得分，也可以重新开始挑战。'],
]

function RulesPage() {
  return (
    <section className="content-page">
      <div className="page-intro">
        <p className="eyebrow">怎么玩</p>
        <h1>玩法说明</h1>
        <p>当前 v0.1 版本开放“方言词义猜猜看”，用一道示例题体验完整流程。</p>
      </div>

      <div className="steps-list">
        {steps.map(([number, title, description]) => (
          <article className="step-card" key={number}>
            <span>{number}</span>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="notice-box">
        <strong>Demo 提示</strong>
        <p>后续版本将加入更多方言题目、听音辨方言和连连看等玩法。</p>
      </div>

      <Link className="button primary" to="/quiz">
        开始答题
      </Link>
    </section>
  )
}

export default RulesPage
