import { ItemAccount } from "./accounts/ItemAccount"

export const Accounts = () => {
    return (
        <>
            <div className="container px-12">
                <label className="block text-lg font-medium text-white text-center">Cuentas</label>
                <div className="grid grid-cols-1 gap-2 mt-4">
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((index) => (
                            <ItemAccount key={index} />
                        ))
                    }
                </div>
                <div>
                    <button type="button" className="mt-4 w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Crear</button>
                </div>
            </div>
        </>
    )
}
