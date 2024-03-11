import { Outlet, useLocation } from 'react-router-dom';
import emoticon from '../../assets/emoticon.svg';
import { Drawer } from '../../components/Drawer';

export const Base = () => {
  const { state } = useLocation();
  const { picture, name } = state
  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className='absolute justify-start'>
        <Drawer />
      </div>
      <div className='flex justify-center'>
        <div className='flex w-full justify-center'>
          {
            picture
              ? <img className='w-6 h-6 rounded-full my-auto' src={picture} alt="icon perfil" />
              : <img src={emoticon} alt='perfil' />
          }
          <h1 className='text-white text-2xl font-bold p-2 truncate ... w-2/3 md:w-auto'>{name}</h1>
        </div>
      </div>
      <div className='flex justify-center'>
        <Outlet />
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