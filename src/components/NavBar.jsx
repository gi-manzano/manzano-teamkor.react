import { Link } from 'react-router-dom'
import CartWidget from '../components/carWidget/CartWidget'

const NavBar = () => {
  return (
    <>
    
    <CartWidget></CartWidget>
    <div className="navbar bg-base-100-pink">
  <div className="flex-1">
    <button className="btn btn-ghost normal-case text-xl"></button>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">0</span>
        </div>
      </label>
      <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">0 Items</span>
          <span className="text-info">Subtotal: </span>
          
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src="https://api.lorem.space/image/face?hash=33791" alt=""/> 
        </div>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a href="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href>Settings</a></li>
        <li><a href>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

<header className="text-sky-100 bg-sky-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  
    <Link to='/' href="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span className="ml-3 text-xl p-10 w-10 m-5">Teamwork
      <img className= "w-20 m-15 items-center" src="https://seeklogo.com/images/S/sport-logo-8D3DF7BB3A-seeklogo.com.png" alt="logo"></img>
      </span>
    </Link>

    <nav href="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-pink-700	flex flex-wrap items-center text-base justify-center">
      <Link to='/home' className="mr-5 hover:text-white"> Home</Link>
      <Link to='/clothes' className="mr-5 hover:text-white"> Clothes</Link>
      <Link to='/' className="mr-5 hover:text-white"> Worktout</Link>
    </nav>
 
  </div>
</header>


    </>

  )
}

export default NavBar