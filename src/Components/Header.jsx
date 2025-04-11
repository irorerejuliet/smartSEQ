import NavBar from "./Layouts/NavBar"


const Header = () => {
  return (
    <><header className=" hidden bg- heroImg bg-repeat bg-cover w-full  pt-6 bg-white ">

      <NavBar />
     
      <div className="text-center pt-[20%] w-[1290px] m-auto  text-white ">
        <h1 className="text-[4.375rem] font-bold">
          Turning Creative Ideas into Success
        </h1>
        <p className="text-[1.063rem] font-medium text-wrap">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
          magna aliqua quis nostrud exerc.
        </p>
        <button className="py-3 px-10  bg-[#05BED6] rounded-[30px] text-lg font-medium">
          Discover Now
        </button>
      </div>
    </header>
      
      
      <header className="relative flex items-center justify-center flex-col !bg-white">

 <img src="/images/h3mbbg.png" alt="hero image " className="h-[100vh] object-cover "/>
        <NavBar />
        


         <div className=" absolute flex flex-col items-center justify-center ">
        <h1 className="text-[4.375rem] leading-tight font-bold text-white text-center">
          Turning Creative Ideas into Success
        </h1>
        <p className="text-[1.063rem] font-medium !text-white py-4">
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
