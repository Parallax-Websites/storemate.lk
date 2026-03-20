import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    const block = props.block || false;
    const allProps = { ...props };
    delete allProps.block;

    return (
        <Link
            {...allProps}
            className={
                (block
                    ? 'block w-full ps-3 pe-4 py-2 border-l-4 '
                    : 'inline-flex items-center border-b-2 px-1 pt-1 ') +
                'text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? (block
                        ? 'border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 '
                        : 'border-indigo-400 text-gray-900 focus:border-indigo-700 ')
                    : (block
                        ? 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 '
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 ')) +
                className
            }
        >
            {children}
        </Link>
    );
}
