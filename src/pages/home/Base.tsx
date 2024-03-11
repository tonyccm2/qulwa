import { Outlet, useLocation } from 'react-router-dom';
import emoticon from '../../assets/emoticon.svg';
import menu from '../../assets/menu.svg';

export const Base = () => {
  const { state } = useLocation();
  const { picture, name } = state
  return (
    <div>
      <div className='flex justify-center'>
        <button type="button" className='min-w-6'>
          <img className='my-auto mx-3' src={menu} alt='menu' />
        </button>
        <div className='flex w-full max-w-screen-lg justify-center'>
          {
            !picture
              ? <img className='w-12 h-12 rounded-full my-auto mx-6' src={picture} alt="icon perfil" />
              : <img className='my-auto mx-3' src={emoticon} alt='perfil' />
          }
          <h1 className='text-white text-2xl font-bold p-2 truncate ... w-auto'>{name}</h1>
        </div>
        <div className='p-6'></div>
      </div>
      <div className='flex justify-center'>
        <div className='max-w-screen-lg '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
