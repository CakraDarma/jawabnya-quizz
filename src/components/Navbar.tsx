import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Avatar,
	Image,
} from '@nextui-org/react';

export const Nav = () => {
	return (
		<Navbar className='bg-white border-b-4 border-black'>
			<NavbarBrand>
				<h1 className='text-xl'>Jawabnya</h1>
				<Image width={30} alt='NextUI hero Image' src='images/logo.png' />
			</NavbarBrand>

			<NavbarContent as='div' justify='end'>
				<Dropdown placement='bottom-end'>
					<DropdownTrigger>
						<Avatar
							as='button'
							className='transition-transform'
							color='secondary'
							name='Jason Hughes'
							size='sm'
							src='images/profil.webp'
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label='Profile Actions' variant='flat'>
						<DropdownItem key='profile' className='gap-2 h-14'>
							<p className='font-semibold'>Signed in as</p>
							<p className='font-semibold'>cakradarma@example.com</p>
						</DropdownItem>
						<DropdownItem key='settings'>My Settings</DropdownItem>
						<DropdownItem key='settings'>Results</DropdownItem>
						<DropdownItem key='logout' color='danger'>
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
};
