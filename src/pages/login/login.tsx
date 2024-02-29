import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { createSearchParams, useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='full-w  py-2'>
                <div className='container max-w-5xl  mx-auto'>
                    <h1 className='text-white text-3xl font-bold  p-2'>💸QULWA</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='container max-w-5xl  mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-20 2xl:mt-32'>
                        <div className=''>
                            <p className='text-white text-2xl text-center font-medium'>Bienvenido a QULWA</p>
                            <p className='text-white p-4 text-center text-sm'>Inicia sesión y controla tus gastos</p>
                            <div className='flex justify-center'>
                                <img className='w-48' src="https://cdn.iconscout.com/icon/free/png-256/free-wallet-588-456730.png" alt="billetera logo" />
                            </div>
                            <div className='flex justify-center py-5'>
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        console.log(credentialResponse);
                                        const decoded = jwtDecode(credentialResponse?.credential || '');
                                        console.log('asdasd', decoded)
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                    useOneTap
                                />
                            </div>
                            <p className='text-white p-4 text-center text-xs'>Al registrarte aceptas los términos de uso y la política de privacidad.</p>
                        </div>
                        <div className='flex justify-center'>
                            <img className='full-w p-5' src="https://static.vecteezy.com/system/resources/thumbnails/009/343/580/small_2x/3d-business-analysis-chart-illustration-png.png" alt="finanzas personales img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
