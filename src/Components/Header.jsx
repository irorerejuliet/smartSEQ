import NavBar from "./Layouts/NavBar"


const Header = () => {
  return (
    <header className="bg-heroImg bg-repeat bg-cover w-full h-[100vh] pt-6 bg-white">
            <NavBar />
            <div className="text-center pt-[20%] w-[1290px] m-auto  text-white space-y-2">
              <h1 className="text-[4.375rem] font-bold">
                Turning Creative Ideas into Success
              </h1>
              <p className="text-[1.063rem] font-medium">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
                magna aliqua quis nostrud exerc.
              </p>
              <button className="py-3 px-10  bg-[#05BED6] rounded-[30px] text-lg font-medium">
                Discover Now
              </button>
            </div>
        </header>
  )
}

export default Header
