
import {
    RiArrowDownSLine,
    RiCheckboxBlankCircleFill,
    RiNotification3Line,
  } from "react-icons/ri";




export const Header = () => {
    return (
        <>   
        <header className="fixed w-full bg-[#ffffff] p-8 flex justify-end border-b border-gray-500">
        
          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="relative text-black text-lg">
                <RiNotification3Line />
                <RiCheckboxBlankCircleFill className="text-orange-600 text-[8px] absolute -top-[2px] right-0" />
              </a>
            </li>
            <li>
              <a href="#" className="flex text-black items-center gap-2">
                <img
                  src="https://img.freepik.com/foto-gratis/chica-romantica-sonrisa-astuta-blusa-vintage-sentada-cama-tocando-su-barbilla-mano-retrato-mujer-joven-linda-sonadora-flor-peinado-descansando-dormitorio-manana_197531-3187.jpg"
                  className="w-6 h-6 object-cover rounded-full ring-2 ring-gray-300"
                />
                Administrador
                <RiArrowDownSLine />
              </a>
            </li>
          </ul>
        </header>

        </>
    )
}