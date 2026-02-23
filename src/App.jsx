import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Review from './components/Review'
import Notice from './components/Notice'
import Faq from './components/Faq'

function App() {
  return (
    <main className="flex h-screen bg-gray-50">
      <Sidebar/>
      <div className="flex-1 flex flex-col ml-72">
        <Header/>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/review" element={<Review/>}/>
            <Route path="/notice" element={<Notice/>}/>
            <Route path="/faq" element={<Faq/>}/>
          </Routes>
        </div>
      </div>
    </main>
  )
}

export default App
