import { Outlet } from 'react-router-dom';
import emoticon from '../../assets/emoticon.svg';
import { Drawer } from '../../components/Drawer';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContex';

export const Base = () => {
  const { data } = useContext(UserContext)
  return (
    <div className=''>
      <div className='max-w-screen-lg mx-auto'>
        <div className='absolute justify-start'>
          <Drawer />
        </div>
        <div className='flex justify-center mx-12'>
          <div className='flex w-full justify-center'>
            {
              data?.picture
                ? <img className='w-6 h-6 rounded-full my-auto' src={data.picture} alt="icon perfil" />
                : <img className='my-auto' src={emoticon} alt='perfil' />
            }
            <h1 className='text-gray-400 hover:text-gray-200 text-2xl font-bold p-2 truncate ... md:w-auto'>{data?.name}</h1>
          </div>
        </div>
        <div className='flex justify-center'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
{/* <div className='max-w-screen-lg mx-auto'>
      <div className='flex justify-between'>
        <button type="button" className='min-w-12'>
          <img className='my-auto mx-3' src={menu} alt='menu' />
        </button>
        <div className='flex justify-center'>
          {
            picture
              ? <img className='w-6 h-6 rounded-full my-auto mx-3' src={picture} alt="icon perfil" />
              : <img className='my-auto mx-3' src={emoticon} alt='perfil' />
          }
          <h1 className='text-white text-2xl font-bold p-2 truncate ... '>{name}</h1>
        </div>
        <div className='p-6'></div>
      </div>
      <div className='flex justify-center'>
        <Outlet />
      </div>
    </div> */}