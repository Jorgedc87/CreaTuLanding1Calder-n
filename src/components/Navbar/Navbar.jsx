import { Link } from 'react-router-dom';
import logo from '../../assets/images/eren-logo.webp';
import { CardWidget } from '../CardWidget/CardWidget';

export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 font-montserrat">
        <div className="flex justify-center gap-32 container mx-auto">
          <div className="flex items-center">
            <Link to={"/"} className="text-2xl font-bold">
              <img
                src={logo}
                alt="logo"
                className="h-12"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-12 2xl:space-x-44">
            <p  className="border-b-2 border-white border px-5 py-2 mr-5 transition-all delay-25 hover:bg-gray-700 cursor-pointer">
              <span className='text-xl mr-3'>🏍</span> Envios gratis
            </p>
            <div className='flex space-x-16'>
              <Link to={"/gatos"} className="border-b-2 border-b-gray-800 hover:border-b-orange-400 hover:text-orange-400 transition-all delay-25">
                Gatos
              </Link>
              <Link to={"/perros"} className="border-b-2 border-b-gray-800 hover:border-b-orange-400 hover:text-orange-400 transition-all delay-25">
                Perros
              </Link>
            </div>
          </div>
          <CardWidget />
        </div>
      </nav>
    </>
  )
}
