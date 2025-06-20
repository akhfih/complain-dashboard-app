
'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation';

import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    TableCellsIcon,
    ChatBubbleLeftIcon
} from '@heroicons/react/24/outline'




const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Data', href: '/data', icon: TableCellsIcon },
    // { name: 'Reports', href: '/reports', icon: ChartPieIcon },
];


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname();
    const currentPage = navigation.find((item) => item.href === pathname);
    const pageTitle = currentPage ? currentPage.name : 'Dashboard';
    return (
        <>
            {/*
                This example requires updating your template:
        
                ```
                <html class="h-full bg-white">
                <body class="h-full">
                ```
              */}
            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                                <div className="flex h-16 shrink-0 items-center">
                                    {/* <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    /> */}
                                    <ChatBubbleLeftIcon aria-hidden="true" className="size-8 text-indigo-600" />
                                    <h1 className="ml-2 text-2xl text-indigo-600">The Complain</h1>
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => {
                                                    const isActive = pathname === item.href;
                                                    return (
                                                        <li key={item.name}>
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    isActive
                                                                        ? 'bg-gray-50 text-indigo-600'
                                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                                )}
                                                            >
                                                                <item.icon
                                                                    aria-hidden="true"
                                                                    className={classNames(
                                                                        isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                                        'size-6 shrink-0',
                                                                    )}
                                                                />
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            {/* <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            /> */}
                            <ChatBubbleLeftIcon aria-hidden="true" className="size-8 text-indigo-600" />
                            <h1 className="ml-2 text-2xl text-indigo-600">The Complain</h1>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => {
                                            const isActive = pathname === item.href;
                                            return (
                                                <li key={item.name}>
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            isActive
                                                                ? 'bg-gray-50 text-indigo-600'
                                                                : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                        )}
                                                    >
                                                        <item.icon
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                                                'size-6 shrink-0',
                                                            )}
                                                        />
                                                        {item.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72 h-screen flex flex-col">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>

                        {/* Separator */}
                        <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">

                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-700">{pageTitle}</h1>
                            </div>
                        </div>
                    </div>

                    <main className="py-10 bg-gray-50 h-full">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}