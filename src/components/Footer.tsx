export const Footer = () => {
    return (
        <div>
            <footer className="rounded-lg shadow m-4 dark:bg-black">
                <div className="w-full mx-auto max-w-screen-lg p-4 md:flex md:items-center justify-center">
                    <span className="text-xs sm:text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://flowbite.com/" className="hover:underline">QULWA</a>. Todos los derechos reservados.
                    </span>
                </div>
            </footer>
        </div>
    )
}
