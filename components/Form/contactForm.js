import { useFormik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import TextError from "../Text/textError"

const phoneValidation = /(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+$/

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
      .required("*Name Required"),

      email: Yup.string()
      .email("*Invalid Email")
      .required("*Email Required"),

      phone: Yup.string()
      .max(15, "*Maximum of 15 Characters")
      .matches(phoneValidation, "*Invalid Phone Number")
      .required("*Phone Number Required"),

      message: Yup.string()
      .required("*Message Required")
      .max(200, "*Maximum of 200 Characters")
      .min(20, "*Minimum of 20 Characters")

    }),
    
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return(
    <>
      <form className="flex flex-col w-full md:w-10/12 lg:w-10/12 xl:w-10/12 md:mx-auto lg:mx-auto mt-8 md:mt-12 lg:mt-18" onSubmit={formik.handleSubmit}>
        
        <div className="flex flex-col w-full">
          <label className="text-md font-semibold" htmlFor="name" >Name</label>
          <input className="text-sm border border-black rounded mt-2 py-1 px-3 focus:outline-none focus:border-green-600 shadow-md"
          name="name"
          id="name"
          type="text" 
          placeholder="Your Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          >
          </input>
          {formik.touched.name && formik.errors.name ? (
            <TextError errorMessage={formik.errors.name} />
          ) : null
          }
        </div>

        <div className="flex flex-col w-full mt-3">
          <label className="text-md my-2 font-semibold" htmlFor="email">Email</label>
          <input className="text-sm border border-black rounded py-1 px-3 focus:outline-none focus:border-green-600 shadow-md" 
          name="email"
          id="email"
          type="email" 
          placeholder="Your Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          >
          </input>
           {formik.touched.email && formik.errors.email ? (
            <TextError errorMessage={formik.errors.email} />
          ) : null
          }
        </div>

        <div className="flex flex-col w-full mt-3">
          <label className="text-md my-2 font-semibold" htmlFor="phone">Phone</label>
          <input className="text-sm border border-black rounded py-1 px-3 focus:outline-none focus:border-green-600 shadow-md"
          name="phone"
          id="phone"
          type="tel" 
          placeholder="Your Phone Number"
          onChange={formik.handleChange}
          value={formik.values.phone}
          >
          </input>
          {formik.touched.phone && formik.errors.phone ? (
            <TextError errorMessage={formik.errors.phone} />
          ) : null
          }
        </div>

        <div className="flex flex-col w-full mt-3">
          <label className="text-md my-2 font-semibold" htmlFor="message">Message</label>
          <textarea className="text-sm border border-black rounded py-1 px-3 focus:outline-none focus:border-green-600 shadow-md" 
          name="message"
          id="message"
          type="text" 
          placeholder="Your Message"
          rows="10"
          onChange={formik.handleChange}
          value={formik.values.message}
          >
          </textarea>
          {formik.touched.message && formik.errors.message ? (
            <TextError errorMessage={formik.errors.message} />
          ) : null
          }
        </div>

        <div className="w-full my-6">
          <button className="px-6 py-1.5 md:px-7 md:py-2 lg:px-7 lg:py-2 bg-green-600 focus:bg-green-400 focus:outline-none hover:bg-green-700 text-md rounded font-semibold">Send</button>
        </div>

      </form>
    </>
  )
}

export default ContactForm