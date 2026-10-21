import { useState } from 'react'
import SlideBar from '../components/SlideBar'
import ContentArea from '../components/ContentArea'
import { FaBars } from 'react-icons/fa'

function TopicPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
<div className='flex min-h-screen bg-gray-950'>
      <SlideBar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Hamburger div - sirf mobile par, TopBar ke neeche top left */}
      <div className='md:hidden fixed top-18 left-3 z-40'>
        <button
          onClick={() => setSidebarOpen(true)}
          className='h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xl shadow-lg'
          aria-label='Open menu'
        >
           <FaBars />
        </button>
      </div>

      <ContentArea />
    </div>
  )
}

export default TopicPage