import { useLottie } from "lottie-react";
import paperPlane from "./paper-plane.json";

const ContactCard = () => {
  const options = {
    animationData: paperPlane,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return(
    <>
      <div className="flex flex-col mt-4 md:mt-14">
        {/* <img src="/idea.svg" alt="idea-logo" className="w-28 h- mx-auto"></img> */}
        <p className="text-lg font-bold font-mono text-center">If you have a project in mind, please complete the form to send your enquiry.</p>
        <div className="w-3/4 mx-auto my-auto mt-0">
          { View }
        </div>
-*      </div>
    </>
  )
}

export default ContactCard