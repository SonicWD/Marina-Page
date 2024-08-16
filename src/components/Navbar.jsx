// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import logo from "/marina.svg"; 

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la apertura del menú en dispositivos móviles

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); 
    };
    handleScroll(); 
    window.addEventListener("scroll", handleScroll); 

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú (abierto/cerrado)
  };

  return (
    <nav
      style={{ height: "95px" }}
      className={`backdrop-filter sticky top-0 z-10 transition-all duration-300 ${isScrolled ? "backdrop-blur-lg" : ""}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl text-gray-900 font-semibold">
            <img
              src={logo} 
              alt="Logo"
              className="inline-block h-24 w-22 p-1"
            />
          </span>
          <div className="hidden md:flex space-x-3 text-white text-xl font-bold">
            <a href="#" className="ml-5">
              Inicio
            </a>
            <a href="#" className="ml-5">
              Productos
            </a>
            <a href="#" className="ml-5">
              Promociones
            </a>
            <a href="#" className="ml-5">
              Acerca de
            </a>
          </div>

          <div className="hidden md:flex justify-center items-center">
            <button
              onClick={redirectToWhatsApp} 
              className="bg-customColor text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80"
            >
              WhatsApp
            </button>
          </div>

          {/* Botón de menú hamburguesa para dispositivos móviles */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú desplegable para dispositivos móviles */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4 space-y-2 text-white text-xl font-bold">
            <a href="#" className="w-full text-center py-2 bg-gray-700 rounded">
              Inicio
            </a>
            <a href="#" className="w-full text-center py-2 bg-gray-700 rounded">
              Productos
            </a>
            <a href="#" className="w-full text-center py-2 bg-gray-700 rounded">
              Promociones
            </a>
            <a href="#" className="w-full text-center py-2 bg-gray-700 rounded">
              Acerca de
            </a>
            <button
              onClick={redirectToWhatsApp}
              className="w-full bg-customColor text-white font-bold py-2 rounded-full hover:bg-opacity-80"
            >
              WhatsApp
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

function redirectToWhatsApp() {
  const phoneNumber = "1234567890"; 
  const message = "¡Hola! Me gustaría hacer una consulta."; 
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = url; 
}

export default Navbar;

