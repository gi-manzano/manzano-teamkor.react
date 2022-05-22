import { Link } from 'react-router-dom'
import CartWidget from './Cart/CartWidget'






const NavBar = () => {
  return (

    <>
      <header className="text-sky-100 bg-sky-900 body-font">
        <Link to="/carrito">
        {<CartWidget/>}
        </Link>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to='/' href="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-2 text-xl p-5 w-5 m-5"> Teamwork
            <img className= "flex w-20 m-15 items-center" src="https://seeklogo.com/images/S/sport-logo-8D3DF7BB3A-seeklogo.com.png" alt="logo"></img>
            </span>
          </Link>
          <nav href="md:mr-auto md:ml-4 md:py-1 md:pl-4  md:border-pink-700	flex flex-wrap items-center ">
            <Link to='/home' className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none bg-pink-300 hover:bg-pink-800 hover:text-white rounded-full text-base mt-4 md:mt-0"> Home </Link>
            <Link to='/clothes' className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none bg-pink-300 hover:bg-pink-800 hover:text-white rounded-full text-base mt-4 md:mt-0"> Store </Link>
            <Link to='/Contacto' className="inline-flex items-center border-0 py-1 px-3 mx-1 focus:outline-none bg-pink-300 hover:bg-pink-800 hover:text-white rounded-full text-base mt-4 md:mt-0"> Contact us </Link>
          </nav>  
        </div> 
    </header>

    </>
  )
}

export default NavBar