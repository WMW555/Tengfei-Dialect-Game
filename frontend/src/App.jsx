import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import ResultPage from './pages/ResultPage.jsx'
import RulesPage from './pages/RulesPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="rules" element={<RulesPage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
