import { useState } from 'react'
import ListNavbarMobile from './listNavbarMobile';


const NavbarMobile = () => {
  const [click, setclick] = useState(false)

  const handleClick = () => {
    setclick(!click);
  }

  let hamburger

  if (click) {
    hamburger = <div className=""><ListNavbarMobile /></div>
  }

  return (
    <>
      <div onClick={handleClick}>
        {
          click ?
          (<img src="/close.svg" className="w-auto h-6 cursor-pointer my-auto" />) :   (<img src="/menu.svg" className="w-auto h-6 cursor-pointer my-auto"/>)
        }
      </div>
      {hamburger}
    </>
  )
}

export default NavbarMobile