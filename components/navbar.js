import react from "react";

const Navbar = () => {
  return (
    <>
      <div className="navdiv">
        <h1 className="header">Crypto Simulator</h1>

        <h4 calssName="total-value">Total value:</h4>

        <h4 className="funds-available">Funds Available:</h4>
      </div>

      <style jsx>
        {`
          .navdiv {
            width: 100vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            bakground: #121212;
            z-index: 10;
            border-bottom: 1px solid white;
            height: 7vh;
            padding: 2rem;
          }

          .header {
            color: white;
            font-family: sans-serif;
          }

          .total-value {
            color: white;
            font-family: sans-serif;
          }

          .funds-available {
            color: white;
            font-family: sans-serif;
          }
        `}
      </style>
    </>
  )
}

// testing testing 123

export default Navbar;
