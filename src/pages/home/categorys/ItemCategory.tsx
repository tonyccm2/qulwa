export const ItemCategory = () => {
    return (
        <div className="grid content-center">
            <button className="mx-auto relative inline-flex items-center justify-center w-12 h-12 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="grid content-center relative w-10 h-10 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    $
                </span>
            </button>
            <p className="text-sm text-center text-gray-300">categoria</p>
        </div>
    )
}
