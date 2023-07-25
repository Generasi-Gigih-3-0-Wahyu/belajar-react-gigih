import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsArrowDownShort } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div className="sticky z-10 top-0 bg-emerald-800 rounded-t-lg px-5 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black">
            <AiOutlineLeft />
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black">
            <AiOutlineRight />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1 bg-neutral-900/50 px-3 py-2 rounded-full hover:scale-105 transition cursor-pointer">
            <div className='border-2 rounded-full'>
              <BsArrowDownShort />
            </div>
            <span className='font-semibold text-sm'>Install App</span>
          </div>
          <div className="w-7 rounded-full cursor-pointer hover:scale-110 transition">
            <img
              src="https://i.scdn.co/image/ab67706c0000dec589f71c80b882afb17fae93ed"
              alt="Profile"
              className="w-full rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
