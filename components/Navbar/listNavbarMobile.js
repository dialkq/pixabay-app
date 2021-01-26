import Link from "next/link";

const ListNavbarMobile = () => {
  return(
    <>
      <div className="menu flex flex-col items-center absolute w-full bg-white h-full z-50 right-0">
        <Link href="/potrait">
          <div className="font-mono font-bold cursor-pointer my-5 underline text-lg">Potrait</div>
        </Link>

        <Link href="/landscape">
          <div className="font-mono font-bold cursor-pointer mb-5 underline text-lg">Landscape</div>
        </Link>

        <Link href="/contact">
          <div className="font-mono font-bold cursor-pointer mb-5 underline text-lg">Contact</div>
        </Link>

        <div className="flex">
					<a href="https://www.instagram.com/dialkq" target="_blank"> 
						<img className="h-5 w-auto cursor-pointer" src="instagram-logo.svg" alt="instagram"></img>
					</a>
				</div>
      </div>
      <style jsx>
        {
          `
            .menu {
              top: 50px;
              opacity: 1;
            }
         
          `
        }

      </style>
    </>
  )
}

export default ListNavbarMobile