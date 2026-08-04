import { Routes, Route } from 'react-router-dom'
import { AccountProvider } from './context/AccountContext'
import { PlaybookProvider } from './context/PlaybookContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import DayHub from './pages/DayHub'
import LessonPage from './pages/LessonPage'
import MockExamHub from './pages/MockExamHub'
import ExamRunner from './pages/ExamRunner'
import MistakesReview from './pages/MistakesReview'
import ReviewDashboard from './pages/ReviewDashboard'
import CheatSheets from './pages/CheatSheets'

export default function App() {
  return (
    <AccountProvider>
      <PlaybookProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/day/:dayNum" element={<DayHub />} />
            <Route path="/lesson/:slug" element={<LessonPage />} />
            <Route path="/mock-exams" element={<MockExamHub />} />
            <Route path="/exam/:id" element={<ExamRunner />} />
            <Route path="/quizzes" element={<MistakesReview />} />
            <Route path="/review" element={<ReviewDashboard />} />
            <Route path="/cheat-sheets" element={<CheatSheets />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </PlaybookProvider>
    </AccountProvider>
  )
}