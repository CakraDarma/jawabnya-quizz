import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	DropdownItem,
	DropdownTrigger,
	Dropdown,
	DropdownMenu,
	Avatar,
} from '@nextui-org/react';

export const Nav = () => {
	return (
		<Navbar>
			<NavbarBrand>
				{/* <AcmeLogo /> */}
				<p className='font-bold text-inherit'>Jawabnya</p>
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
						<DropdownItem key='logout' color='danger'>
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
};
