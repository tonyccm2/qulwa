import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useNavigate } from 'react-router-dom';


interface MyToken {
    name: string;
    email: string;
    picture: string;
    exp: number;
    // whatever else is in the JWT.
}
export const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Header />
            <div className='flex justify-center'>
                <div className='container max-w-5xl  mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div className=''>
                            <p className='text-3xl text-center font-medium text-yellow-300'>Bienvenido a</p>
                            <p className='text-white text-6xl text-center font-bold '>QULWA</p>
                            <p className='p-4 text-center text-md font-medium text-yellow-200'>Inicia sesión y controla tus gastos</p>

                            <div className='flex justify-center pt-5'>
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        const decodedToken = jwtDecode<MyToken>(credentialResponse.credential || '');
                                        navigate('/inicio', { state: { name: decodedToken.name, email: decodedToken.email, picture: decodedToken.picture } })
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                    useOneTap
                                />
                            </div>
                            <div className='w-60 mx-auto'>
                                <p className='text-white p-2 text-center text-xs font-light'>Al registrarte aceptas los términos de uso y la política de privacidad.</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex justify-center'>
                                <img className='w-56 md:w-72' src="https://cdn.iconscout.com/icon/free/png-256/free-wallet-588-456730.png" alt="billetera logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
