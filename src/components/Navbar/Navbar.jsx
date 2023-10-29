import logo from "../../assets/images/logo/IC-logo-Telda.webp";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="hover:text-cyan-400">Home</a>
              </li>
              <li>
                <a className="hover:text-cyan-400">Service</a>
              </li>
              <li>
                <a className="hover:text-cyan-400">Portfolio</a>
              </li>
              <li>
                <a className="hover:text-cyan-400">Community</a>
              </li>
              <li>
                <a className="hover:text-cyan-400">Blog</a>
              </li>
            </ul>
          </div>
          <img className="w-36" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:text-cyan-400">Home</a>
            </li>
            <li>
              <summary className="hover:text-cyan-400">Service</summary>
            </li>
            <li>
              <a className="hover:text-cyan-400">Portfolio</a>
            </li>
            <li>
              <a className="hover:text-cyan-400">Community</a>
            </li>
            <li>
              <a className="hover:text-cyan-400">Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <a className="btn btn-sm btn-info hover:text-white font-serif">
            Login
          </a>
          <a className="btn btn-sm btn-info hover:text-white font-serif">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
