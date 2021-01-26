const Loading = () => {
  return (
    <>
      <div className="lds-hourglass mx-auto mt-6 md:mt-10 lg:mt-14"></div>
      <style jsx>
        {
          `
          .lds-hourglass {
            display: flex;
            position: relative;
            width: 60px;
            height: auto;
          }
          .lds-hourglass:after {
            content: " ";
            display: block;
            border-radius: 50%;
            width: 0;
            height: 0;
            margin: 8px;
            box-sizing: border-box;
            border: 32px solid black;
            border-color: #fff black #fff black;
            animation: lds-hourglass 1s infinite;
          }
          @keyframes lds-hourglass {
            0% {
              transform: rotate(0);
              animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
            }
            50% {
              transform: rotate(900deg);
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }
            100% {
              transform: rotate(1800deg);
            }
          }
          `
        }
      </style>
    </>
  )
}

export default Loading