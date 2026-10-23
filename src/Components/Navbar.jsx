import { useEffect, useState } from "react"
import { BiCart, BiUser } from "react-icons/bi"

function Navbar() {
  const [IsScrolled, setIsScrolled] = useState(false)

  useEffect(() =>{
    const handleScroll = () =>{
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <div className={`fixed flex top-0 w-full transition-all duration-500${IsScrolled ? "bg-white shadow-md px-4" : "bg-transparent py-6"} 
    justify-between items-center px-24`}>
      <h1 className="font-bold text-4xl">
        Hummy Couture
      </h1>

      <ul className="flex space-x-6 text-lg font-semibold uppercase">
        <li className="cursor-pointer transition hover:bg-gray-500">Home</li>
        <li className="cursor-pointer transition hover:bg-gray-500">Shop</li>
        <li className="cursor-pointer transition hover:bg-gray-500">Contact</li>
        <li className="cursor-pointer transition hover:bg-gray-500">About</li>
      </ul>

      <div className="flex items-center space-x-6">
        <div className="relative">
        <BiCart className="text-3xl cursor-pointer"/>
        </div>
        <BiUser className="text-3xl cursor-pointer"/>
      </div>
    </div>
  )
}

export default Navbar