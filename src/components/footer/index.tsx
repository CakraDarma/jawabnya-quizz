import { VERSION } from '@constants/strings';

const Footer = () => {
	return (
		<footer>
			{VERSION}
			{import.meta.env.PACKAGE_VERSION}
		</footer>
	);
};
export default Footer;
