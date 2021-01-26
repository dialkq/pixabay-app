import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"
import ContactForm from "../components/Form/contactForm"
import ContactCard from "../components/Card/ContactCard/contactCard"

const Contact = () => {
    return(
      <>
      	<div className="w-11/12 mx-auto my-3 md:my-4 lg:my-6 xl:my-6">
          <Navbar />
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 mx-auto w-11/12 my-6 md:my-10 lg:my-15">
          <ContactCard />
          <ContactForm />
        </div>

				<div className="w-11/12 mx-auto my-10 md:my-14 lg:my-20 xl:my-24">
					<Footer />
				</div>
      </>
    )
}

export default Contact