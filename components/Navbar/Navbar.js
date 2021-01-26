import Link from 'next/link'
import NavbarMobile from './navbarMobile'

const Navbar = () => {
	return (
	<>
		<div className="flex justify-between">
			<Link href="/">
				<div className="flex my-auto cursor-pointer">
					<p className="font-mono font-thin text-2xl md:text-3xl lg:text-4xl xl:text-4xl">dialkq</p>
				</div>
			</Link>
				
			<div className="flex">
				<Link href="/potrait">
					<div className="hidden md:flex lg:flex xl:flex font-mono md:mr-5 lg:mx-8 xl:mx-8 my-auto text-base lg:text-xl xl:text-xl font-thin cursor-pointer">Potrait</div>
				</Link>
				<Link href="/landscape">
					<div className="hidden md:flex lg:flex xl:flex font-mono md:mx-5 lg:mx-8 xl:mx-8 my-auto text-base lg:text-xl xl:text-xl font-thin cursor-pointer">Landscape</div>
				</Link>
				<Link href="/contact">
					<div className="hidden md:flex lg:flex xl:flex font-mono md:mx-5 lg:mx-8 xl:mx-8 my-auto text-base lg:text-xl xl:text-xl font-thin cursor-pointer">Contact</div>
				</Link>

				<div className=" my-auto hidden md:flex lg:flex xl:flex">
					<a href="https://www.instagram.com/dialkq" target="_blank"> 
						<img className="h-5 md:h-4 md:ml-5 lg:ml-8 xl:ml-8 w-auto cursor-pointer" src="instagram-logo.svg" alt="instagram"></img>
					</a>
				</div>
				
			</div>
			
			<div className="my-auto flex md:hidden lg:hidden xl:hidden">
				<NavbarMobile />
			</div>

		</div>
	</>
	)
}

export default Navbar