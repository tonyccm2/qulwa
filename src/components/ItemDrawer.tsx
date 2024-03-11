import { ReactNode } from "react"
import { Link } from "react-router-dom"

export const ItemDrawer = ({ title, path, to }: { title: string, path: ReactNode, to: string }) => {
    return (
        <li>

            <Link to={to} >
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:border-purple-800 hover:border-2 hover:p-1.5">
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        {path}
                    </svg>
                    <span className="ms-3 text-gray-200">{title}</span>
                </div>
            </Link>
        </li>
    )
}
