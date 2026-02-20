import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Review from './components/Review'
import Notice from './components/Notice'
import Faq from './components/Faq'

const PAGES = {
  Dashboard: Dashboard,
  Review: Review,
  Notice: Notice,
  Faq: Faq,
};

function App() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const RenderContent = PAGES[activeMenu] || Dashboard;

  return (
    <main className="flex h-screen bg-gray-50">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <div className="flex-1 flex flex-col ml-72">
        <Header/>
        <div className="p-6">
          <RenderContent/>
        </div>
      </div>
    </main>
  )
}

export default App
