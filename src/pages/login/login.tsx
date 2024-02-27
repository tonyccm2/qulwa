import React from 'react'

export const Login = () => {
    return (
        <>
            <div className='full-w bg-black py-2'>
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
                            <div className='flex justify-center'>
                                <button type="button" className="my-5 w-52 justify-center text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                    </svg>
                                    Sign in with Facebook
                                </button>
                            </div>
                            <div className='flex justify-center'>
                                <button type="button" className="my-5 w-52 justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                        <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                                    </svg>
                                    Sign in with Google
                                </button>
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
