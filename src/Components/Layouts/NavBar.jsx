 import { Link } from "react-router-dom";
// import { CiSearch } from "react-icons/ci";
// import { BiSolidPhoneCall } from "react-icons/bi";

// const NavBar = () => {
 
//   return (
//     <nav className="flex absolute  mt-4 top-0  justify-between  font-bold text-white">
//       <div className="w-full flex items-center mr-80">
//         <Link to="/">
//           <img src="/images/Logo.png" alt="Logo" className="" />
//         </Link>
//       </div>

//       <div className="flex justify-between items-center gap-5 text-[0.938rem] ">
//         <Link to="/Home">Home</Link>
//         <Link to="/Pages">Pages</Link>
//         <Link to="/POrtflio">Portfolio</Link>
//         <Link to="/Blog">Blog</Link>
//         <Link to="/Contacts">Contacts</Link>
//         <CiSearch size={30} />
//       </div>
//       <div className="flex items-center  gap-6 ml-96">
//         <BiSolidPhoneCall className="  rounded-full p-4" />
//         <p>18004585697</p>
//         <button className="bg-[#4703FF] py-3 px-10 rounded-[30px] text-nowrap">
//           Let's talk
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default NavBar
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  {
    label: "Home",
    subMenu: [
      "SEO Company",
      "Marketing Agency",
      "Creative Agency",
      "Advertising Agency",
    ],
  },
  {
    label: "Pages",
    subMenu: ["About Us", "Services", "Pricing", "Team"],
  },
  {
    label: "Portfolio",
    subMenu: ["Portfolio Grid", "Masonry Layout", "Single Project"],
  },
  {
    label: "Blog",
    subMenu: ["Blog List", "Blog Grid", "Single Post"],
  },
  {
    label: "Contacts",
    subMenu: ["Contact Info", "Map Location"],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (label) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <nav className="bg-transparent text-white absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center py-6 px-6 md:px-10">
        <Link to="/">
          <img src="/images/Logo.png" alt="Logo" className="" />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map(({ label, subMenu }) => (
            <li
              key={label}
              className="relative"
              onMouseEnter={() => toggleMenu(label)}
              onMouseLeave={() => toggleMenu(null)}
            >
              <button className="hover:text-blue-400 relative">
                {label}
                {openMenu === label && (
                  <span className="absolute left-0 right-0 -bottom-1 h-1 bg-white rounded-full" />
                )}
              </button>

              {openMenu === label && (
                <ul className="absolute top-full left-0 mt-3 w-56 bg-[#0e183a] text-white shadow-xl rounded-lg z-50">
                  {subMenu.map((item, idx) => (
                    <li
                      key={idx}
                      className="px-5 py-3 hover:bg-white hover:text-black cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* Desktop Contact Info - Only show on lg and above */}
        <div className="hidden lg:flex items-center gap-5">
          <Link to="" className="text-lg font-semibold">
            1 800 458 56 97
          </Link>
          <Link to="">
            <button className="bg-[#4703FF] py-3 px-10 rounded-[30px] text-nowrap">
              Let's talk
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0e183a] px-6 py-4 space-y-4 text-white">
          {navItems.map(({ label, subMenu }) => (
            <div key={label}>
              <button
                className="w-full text-left font-semibold py-2"
                onClick={() => toggleMenu(label)}
              >
                {label}
              </button>
              {openMenu === label && (
                <ul className="pl-4 space-y-2">
                  {subMenu.map((item, idx) => (
                    <li key={idx} className="hover:text-blue-400">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}