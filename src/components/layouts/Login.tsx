import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
	const [loading, setLoading] = useState(false);

	const handleRegister = async () => {
		setLoading(true);
	};

	return (
		<div
			className={`${
				loading ? 'h-screen' : ''
			} text-xs flex justify-center flex-col items-center gap-[100px]`}
		>
			<form
				onSubmit={handleRegister}
				className='flex flex-col gap-[16px] h-screen justify-center items-center w-full md:w-[400px] px-[70px]'
			>
				<h1 className='text-4xl font-bold lg:text-5xl'>Login Akun</h1>
				<div className='flex flex-col w-full gap-2'>
					<input
						type='text'
						placeholder='Masukkan Email'
						className=' h-11  lg:w-full shadow-[6px_6px_0px_0px_rgba(89,74,22)] p-4 rounded-md text-black font-bold w-full border-4 border-black font-Cabinet sm:text-2xl text-xl bg-yellow-custom px-2'
						autoComplete='off'
					/>
				</div>
				<div className='flex flex-col w-full gap-2'>
					<input
						type='password'
						placeholder='Masukkan Password'
						className=' h-11  lg:w-full shadow-[6px_6px_0px_0px_rgba(89,74,22)] p-4 rounded-md text-black font-bold w-full border-4 border-black font-Cabinet sm:text-2xl text-xl bg-yellow-custom px-2'
						autoComplete='off'
					/>
				</div>
				<Link
					to='/'
					className='flex flex-col items-center w-full p-5 text-xl font-bold btn btn-xs btn-primary'
				>
					Login
				</Link>
				<p className='text-lg font-bold'>
					Belum punya akun?{' '}
					<Link className='text-blue-500 underline' to='/daftar'>
						Daftar
					</Link>
				</p>
			</form>
		</div>
	);
}
