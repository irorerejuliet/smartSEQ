import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BiSolidPhoneCall } from "react-icons/bi";

const NavBar = () => {
 
  return (
    <nav className="flex px-8 absolute !hidden mt-4 top-0 mx-auto justify-between text-[0.938rem] font-bold text-white">
      <div className="w-full flex items-center mr-6">
          <Link to="/">
            <img src="/images/Logo.png" alt="Logo" className="h-6 w-32 my-auto" />
          </Link>
        </div>
     
      <div className="flex justify-between items-center gap-5">
       
        <Link to="/Home">Home</Link>
        <Link to="/Pages">Pages</Link>
        <Link to="/POrtflio">Portfolio</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Contacts">Contacts</Link>
        <CiSearch size={30} />
      </div>
      <div className="flex items-center gap-6 ">
        <BiSolidPhoneCall className="  rounded-full p-4" />
        <p>18004585697</p>
        <button className="bg-[#4703FF] py-3 px-10 rounded-[30px] text-nowrap">
          Let's talk
        </button>
      </div>
    </nav>
  );
}

export default NavBar
