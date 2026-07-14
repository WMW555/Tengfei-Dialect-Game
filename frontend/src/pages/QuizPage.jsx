import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import questions from '../data/questions.json'

function QuizPage() {
  const navigate = useNavigate()
  const feedbackDialog = useRef(null)
  const question = questions[0]
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState('')

  if (!question) {
    return (
      <section className="empty-state">
        <p className="eyebrow">题库提示</p>
        <h1>暂时没有可用题目</h1>
        <button className="button primary" type="button" onClick={() => navigate('/')}>
          返回首页
        </button>
      </section>
    )
  }

  const isCorrect = selectedAnswer === question.answer

  const handleSubmit = (event) => {
    event.preventDefault()

    if (selectedAnswer === null) {
      setMessage('请选择答案后再提交')
      return
    }

    setMessage('')
    setSubmitted(true)
    feedbackDialog.current?.showModal()
  }

  const viewResult = () => {
    navigate('/result', {
      state: {
        score: isCorrect ? 1 : 0,
        total: 1,
        isCorrect,
        dialect: question.dialect,
        word: question.word,
        selectedAnswer: question.options[selectedAnswer],
        correctAnswer: question.options[question.answer],
        explanation: question.explanation,
      },
    })
  }

  return (
    <section className="quiz-page">
      <div className="quiz-heading">
        <div>
          <p className="eyebrow">方言词义猜猜看</p>
          <h1>第 1 题</h1>
        </div>
        <span className="progress-label">1 / 1</span>
      </div>

      <form className="quiz-card" onSubmit={handleSubmit}>
        <div className="question-meta">
          <span>{question.dialect}</span>
          <span>方言词：{question.word}</span>
        </div>
        <fieldset disabled={submitted}>
          <legend>{question.question}</legend>
          <div className="options-list">
            {question.options.map((option, index) => (
              <label className={`option ${selectedAnswer === index ? 'selected' : ''}`} key={option}>
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => {
                    setSelectedAnswer(index)
                    setMessage('')
                  }}
                />
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {message && (
          <p className="form-message" role="alert">
            {message}
          </p>
        )}

        <div className="quiz-actions">
          {!submitted ? (
            <button className="button primary" type="submit">
              提交答案
            </button>
          ) : (
            <button className="button primary" type="button" onClick={viewResult}>
              查看结果
            </button>
          )}
        </div>
      </form>

      <dialog className="feedback-dialog" ref={feedbackDialog}>
        <div className={`feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`} aria-hidden="true">
          {isCorrect ? '✓' : '×'}
        </div>
        <p className="eyebrow">答题反馈</p>
        <h2>{isCorrect ? '回答正确！' : '回答错误，再接再厉！'}</h2>
        <div className="feedback-copy">
          <p>
            <strong>正确答案：</strong>
            {question.options[question.answer]}
          </p>
          <p>
            <strong>解释：</strong>
            {question.explanation}
          </p>
        </div>
        <form method="dialog">
          <button className="button primary" type="submit">
            知道了
          </button>
        </form>
      </dialog>
    </section>
  )
}

export default QuizPage
