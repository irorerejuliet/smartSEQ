import NavBar from "./Layouts/NavBar"


const Header = () => {
  return (
    <>
      <header className="relative flex items-center justify-center flex-col !bg-white">
      <img src="/images/h3mbbg.png" alt="hero image " className="h-[100vh] object-cover "/>
        <NavBar />
         <div className=" absolute flex flex-col items-center justify-center ">
        <h1 className="md:text-[4.375rem] text-3xl leading-tight font-bold text-white text-center">
          Turning Creative Ideas into Success
        </h1>
        <p className="md:text-[1.063rem] text-base font-medium !text-white py-4 md:px-0 px-2">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
          magna aliqua quis nostrud exerc.
        </p>
        <button className="py-3 px-10  bg-[#05BED6] rounded-[30px] text-lg font-medium">
          Discover Now
        </button>
      </div>
      </header>
    
    
    
    </>
  )
}

export default Header
