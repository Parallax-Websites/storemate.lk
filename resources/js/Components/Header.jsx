import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import FeaturesDropdown from '@/Components/FeaturesDropdown';
import LanguageSelector from '@/Components/LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';

export default function Header({ auth }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showingMobileFeaturesDropdown, setShowingMobileFeaturesDropdown] = useState(false);
    const { t } = useTranslation();

    return (
        <nav className="shadow-sm relative z-[9999]">
            <div className="relative max-w-none">
                {/* Main content container - standard max-width */}
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 relative">
                    <div className="flex h-24 items-center justify-between">
                        {/* Main Navigation Content */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/home">
                                    <img src="/oms-v1.png" alt="Logo" className="block h-16 w-auto" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-6">
                                    <NavLink href={route('home')} active={route().current('home')} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                        {t('nav.home')}
                                    </NavLink>
                                    <FeaturesDropdown />
                                    <NavLink href={route('pricing')} active={route().current('pricing')} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                        {t('nav.pricing')}
                                    </NavLink>
                                    <NavLink href={route('about')} active={route().current('about')} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                        {t('nav.about')}
                                    </NavLink>
                                    <NavLink href={route('free.course')} active={route().current('free.course')} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                        {t('nav.freeCourse')}
                                    </NavLink>
                                    <NavLink href={route('contact.us')} active={route().current('contact.us')} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                        {t('nav.contact')}
                                    </NavLink>
                                    <NavLink href={route('partner.program')} active={route().current('partner.program')} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                                        {t('nav.partnerProgram')}
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:flex sm:items-center sm:space-x-4">
                                <LanguageSelector />
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex items-center px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none cursor-pointer">
                                            {t('nav.login')}
                                        </span>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <a
                                            href="https://oms.storemate.cloud/login"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                        >
                                            Login to OMS
                                        </a>
                                        <a
                                            href="https://app.storemate.cloud/login"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                        >
                                            Login to POS (Lite)
                                        </a>
                                        <a
                                            href="https://app.storematepro.lk/login"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                                        >
                                            Login to POS (Pro)
                                        </a>
                                    </Dropdown.Content>
                                </Dropdown>
                                <a
                                    href="https://welcome.oms.storemate.cloud/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-custom-blue-2 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-custom-blue-3"
                                >
                                    {t('nav.startFreeTrial')}
                                </a>
                            </div>

                            {/* Mobile Menu */}
                            <div className="flex items-center space-x-2 sm:hidden">
                                <LanguageSelector />
                                <button
                                    onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path
                                            className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                <div className="pt-2 pb-3 space-y-1">
                    <NavLink href={route('home')} active={route().current('home')} block="true">
                        {t('nav.home')}
                    </NavLink>
                    <NavLink href={route('pricing')} active={route().current('pricing')} block="true">
                        {t('nav.pricing')}
                    </NavLink>
                    <NavLink href={route('about')} active={route().current('about')} block="true">
                        {t('nav.about')}
                    </NavLink>
                    <NavLink href={route('free.course')} active={route().current('free.course')} block="true">
                        {t('nav.freeCourse')}
                    </NavLink>
                    <NavLink href={route('contact.us')} active={route().current('contact.us')} block="true">
                        {t('nav.contact')}
                    </NavLink>

                    {/* Mobile Features Dropdown */}
                    <div>
                        <button
                            onClick={() => setShowingMobileFeaturesDropdown((previousState) => !previousState)}
                            className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 focus:outline-none focus:text-gray-800 focus:bg-gray-50 transition duration-150 ease-in-out"
                        >
                            <span>{t('nav.features')}</span>
                            <svg
                                className={`h-4 w-4 transition-transform duration-200 ${showingMobileFeaturesDropdown ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {showingMobileFeaturesDropdown && (
                            <div className="pl-8 pb-2 space-y-1">
                                <NavLink href="/inquiry" block="true" className="text-sm">
                                    Inquiry
                                </NavLink>
                                <NavLink href={route('sales.management')} active={route().current('sales.management')} block="true" className="text-sm">
                                    Sales Management
                                </NavLink>
                                <NavLink href={route('shipping.packing')} active={route().current('shipping.packing')} block="true" className="text-sm">
                                    Shipping & Packing
                                </NavLink>
                                <NavLink href={route('user.contact.product')} active={route().current('user.contact.product')} block="true" className="text-sm">
                                    User, Contact, Product
                                </NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink href={route('partner.program')} active={route().current('partner.program')} block="true">
                        {t('nav.partnerProgram')}
                    </NavLink>
                </div>

                <div className="pt-4 pb-1 border-t border-gray-200">
                    <div className="mt-3 space-y-1">
                        {/* Mobile Login Options */}
                        <div className="px-4 py-2">
                            <div className="font-medium text-base text-gray-800 mb-2">{t('nav.login')} Options</div>
                            <div className="space-y-2">
                                <a
                                    href="https://oms.storemate.cloud/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded"
                                >
                                    Login to OMS
                                </a>
                                <a
                                    href="https://app.storemate.cloud/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded"
                                >
                                    Login to POS (Lite)
                                </a>
                                <a
                                    href="https://app.storematepro.lk/login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded"
                                >
                                    Login to POS (Pro)
                                </a>
                            </div>
                        </div>

                        <a
                            href="https://welcome.oms.storemate.cloud/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mx-4 mt-4 px-4 py-2 text-center font-bold text-white bg-custom-blue-2 hover:bg-custom-blue-3 rounded-md"
                        >
                            {t('nav.startFreeTrial')}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
