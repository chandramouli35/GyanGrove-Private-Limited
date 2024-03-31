import './App.css'
import Banner from './components/Banner'
import Events from './components/Events'
import Navbar from './components/Navbar'
import Shows from './components/Shows'

function App() {
  

  return (
    <>
    <div className='mx-10 my-5 max-[480px]:mx-2 max-[480px]: max-w-full max-[480px]:overflow-x-hidden'>
      <Navbar/>
    </div>
    <div className='mx-10 max-[480px]:mx-2 max-[480px]: max-w-full max-[480px]:overflow-x-hidden'>
        <Banner />
    
    <div className="mt-10 mx-20 max-[480px]:mx-2 max-[480px]: max-w-full max-[480px]:overflow-x-hidden">
        <Shows />
      </div>
      </div>
    <div className="mt-12 mx-24 max-[480px]:mx-2 max-[480px]: max-w-full max-[480px]:overflow-x-hidden ">
      <Events />
    </div>
    </>
  )
}

export default App
