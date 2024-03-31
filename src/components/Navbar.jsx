import menu from '../assets/menu.png'
import search from '../assets/search.png'
import heart  from '../assets/heart.png'
import location  from '../assets/location.png'
import user  from '../assets/user.png'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between max-[480px]:justify-start'>
        <div className='text-2xl font-bold text-red-600'>
            BookUsNow
        </div>
        <div className='flex items-center gap-2'>
            <div className='max-[480px]:hidden'>
                <button className='flex items-center gap-3 py-1 bg-black text-white w-36 rounded-lg'>
                    <img src={menu} alt="menu-icon" className='w-4 h-4 grayscale invert ms-3' />
                    <div>Categories</div>
                </button>
            </div>
            <div className='flex relative'>
            <img src={search} alt="search-icon" className='w-4 h-4 absolute right-4 top-2 max-[480px]:relative max-[480px]:top-0  max-[480px]:left-20' />
            <input type="text" placeholder='DJI phantom' className='ps-4 w-96 border rounded-lg h-8 max-[480px]:hidden' />
            </div>
        </div>
        <div  className='flex items-center gap-6 max-[480px]:gap-5 max-[480px]:ms-auto'>
            <div className='flex items-center gap-2'>
                <img src={heart} alt="favourite" className='w-4 h-4' />
                <span className='max-[480px]:hidden'>Favourites</span>
            </div>
            <div>
                <button className='border px-3 py-1 max-[480px]:hidden'>Sign In</button>
                <img src={user} alt="profile-icon" className='w-4 h-4 min-[481px]:hidden' />
            </div>
        </div>
    </div>
    <div className='mt-3 flex gap-32 max-[480px]:flex-col max-[480px]:gap-3'>
        <div className='flex items-center gap-2'>
        <img src={location} alt="location-icon"  className='w-4 h-4 '/>
        Mumbai, India ▶️
        </div>
        <div className='flex gap-5 ps-28 max-[480px]:px-1'>
            <div className='hover:underline cursor:pointer'>Live Shows</div>
            <div className='hover:underline'>Streams</div>
            <div className='hover:underline'>Movies</div>
            <div className='hover:underline'>Plays</div>
            <div className='hover:underline'>Events</div>
            <div className='hover:underline'>Sports</div>
            <div className='hover:underline'>Activities</div>
        </div>
    </div>
    </>
  )
}

export default Navbar