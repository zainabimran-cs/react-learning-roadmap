import { Routes, Route, useLocation } from 'react-router-dom'
import LoginPage, { ProtectedRoute } from './pages/LoginPage';
import Home from './pages/Home';
import TopicPage from './pages/TopicPage';
import TopBar from './components/TopBar';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <TopBar />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/topic/:topicId"
          element={
            <ProtectedRoute>
              <TopicPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App