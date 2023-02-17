/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
	BookmarkAltIcon,
	CalendarIcon,
	ChartBarIcon,
	ChartSquareBarIcon,
	CursorClickIcon,
	GiftIcon,
	MailIcon,
	MenuIcon,
	PhoneIcon,
	PlayIcon,
	RefreshIcon,
	ShieldCheckIcon,
	SupportIcon,
	TerminalIcon,
	UserAddIcon,
	UserIcon,
	ViewGridIcon,
	XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/solid'

const solutions = [
	{
		name: 'About',
		description: 'Get a better understanding of where your traffic is coming from.',
		href: '#',
		icon: UserIcon,
	},
	{
		name: 'Experience',
		description: 'Speak directly to your customers in a more meaningful way.',
		href: '#',
		icon: ChartSquareBarIcon,
	},
	{
		name: 'Work',
		description: "Connect with third-party tools that you're already using.",
		href: '#',
		icon: TerminalIcon,
	},
	{
		name: 'Contact',
		description: 'Build strategic funnels that will drive your customers to convert',
		href: '#',
		icon: MailIcon,
	},
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header() {
	return (
		<Popover className="relative bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<a href="#">
							<span className="sr-only">Rohit Kr Dev</span>
							<img
								className="h-8 w-auto sm:h-10"
								src="logo-white.png"
								alt="Rohit Kr Dev"
							/>
						</a>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group as="nav" className="hidden md:flex space-x-10">
						<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
							About
						</a>
						<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
							Experience
						</a>
						<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
							Work
						</a>
						<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
							Contact
						</a>
					</Popover.Group>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<a
							href="#"
							className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-600 hover:text-gray-900 bg-yellow-400 hover:bg-yellow-300"
						>
							Resume
						</a>
					</div>
				</div>
			</div>
			
			<div class="relative w-full overflow-hidden hero-section">
				<div class="min-h-screen flex">
					<div class="container m-auto px-6 py-20 md:pb-0 md:pt-40 md:px-12 lg:py-0 lg:px-10">
						<div class="flex flex-wrap gap-12">
							<div class="lg:w-8/12 lg:pt-32 lg:pb-20">
								<div class="space-y-8 mt-8 lg:-mr-24 xl:-mr-0">
									<p class="text-lg text-gray-600 margin-top--120">Hi, my name is</p>
									<h1 class="text-4xl text-gray-800 font-bold md:text-5xl lg:leading-tight">Rohit Kumar<br></br>I build things for web.</h1>
									<p class="text-lg text-gray-600">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Grub Web Service.</p>
								</div>
								<div class="mt-8 pt-8 border-t border-gray-300">
									<div class="flex space-x-4">
										<button type="button" title="Hire ME!" class="w-full py-3 px-6 rounded-xl text-center transition bg-white hover:bg-slate-100 sm:w-max">
											<span class="block text-grey-600 font-semibold">
												Hire ME!
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src="logo-white.png"
										alt="Rohit Kr Dev"
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
										<span className="sr-only">Close menu</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
						</div>
						<div className="pt-5 pb-6 px-5">
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{solutions.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
										>
											<item.icon className="flex-shrink-0 h-6 w-6 text-yellow-400" aria-hidden="true" />
											<span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
										</a>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div>
								<a
									href="#"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-grey-900 bg-yellow-400 hover:bg-yellow-400"
								>
									Resume
								</a>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>			
		</Popover>
	)
}