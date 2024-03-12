import { ButtonGroup } from "./ButtonGroup"
import { ItemCategory } from "./categorys/ItemCategory"

export const Transactions = () => {
    return (
        <>
            <div className="container px-12">
                <label className="block text-lg font-medium text-white text-center">Transacciones</label>
                <ButtonGroup />
                <div className="grid grid-cols-1 gap-2 mt-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-white">Monto</label>
                        <input type="number" id="monto" className="border-2 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-violet-700" placeholder="0" required />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-white">Cuenta</label>
                        <select id="accounts" className="peer border-2 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-violet-500 focus:border-violet-500">
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-white">Categorías</label>
                        <div className="bg-gray-700 border-2 border-gray-600 rounded-lg p-2">
                            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                                        <ItemCategory key={index} />
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-white">Comentario</label>
                        <input type="text" id="comentario" className="border-2 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-violet-700" placeholder="comentario" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-white">Día</label>
                        <input type="date" id="date" className="border-2 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-violet-700" placeholder="comentario" />
                    </div>
                    <div>
                        <button type="button" className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Agregar</button>
                    </div>
                </div>

            </div>
        </>
    )
}
