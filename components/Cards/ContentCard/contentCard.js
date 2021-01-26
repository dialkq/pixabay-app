const CardPhoto = (props) => {
  return(
      <>
        <div className="w-full p-0.5 md:p-1 lg:p-2 fade">
          <img className="h-auto" src={props.photo}></img>
          <style jsx>
            {
              `
              .fade {
                animation: fadeIn ease 2s;
              }
               
              @keyframes fadeIn {
                0% {opacity:0;}
                100% {opacity:1;}
              }
              `
            }
          </style>
        </div>
      </>
  )
}



export default CardPhoto