import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';


interface MyToken {
    name: string;
    email: string;
    picture: string;
    exp: number;
    // whatever else is in the JWT.
}
export const Login = () => {
    const [user, setUser] = useState<MyToken>()
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
                                        const decodedToken = jwtDecode<MyToken>(credentialResponse.credential || '');
                                        setUser(decodedToken)
                                        console.log(user?.picture)
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                    useOneTap
                                />
                            </div>
                            <p className='text-white p-4 text-center text-xs'>Al registrarte aceptas los términos de uso y la política de privacidad.</p>
                        </div>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='size-16 rounded-full' src={user?.picture} alt="icon perfil" />
                                <div className='pl-4 grid grid-cols-1 content-center'>
                                    <h1>{user?.name}</h1>
                                    <h2>{user?.email}</h2>
                                </div>
                            </div>
                            <img className='full-w p-5' src="https://static.vecteezy.com/system/resources/thumbnails/009/343/580/small_2x/3d-business-analysis-chart-illustration-png.png" alt="finanzas personales img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
