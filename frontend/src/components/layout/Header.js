import React from 'react';
import classes from './Header.module.css';
import { HashLink as Link } from 'react-router-hash-link';
import ButtonPrimary from '../UI/ButtonPrimary';
import Navbar from './Navbar';

const Header = (props) => {
	return (
		<React.Fragment>
			<header>
				<Navbar />

				<section className={classes['header-content']}>
					<div className={classes['header-main']}>
						<h1 className={classes['header-title']}>
							Welcome to Pharmacy Shop
						</h1>
						<h3 className={classes['header-subtitle']}>
							Order your products now!
						</h3>
						<div className='button-box'>
							<Link to='#products' smooth>
								<ButtonPrimary />
							</Link>
						</div>
					</div>
				</section>
			</header>
		</React.Fragment>
	);
};

export default Header;
