import { useState } from "react";

const Input = ({ colors, setColors }) => {
	const [search, setSearch] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (search) {
			const arr = [...Array(+search).keys()].map((id) => {
				const randHex = "#000000".replace(/0/g, function () {
					return (~~(Math.random() * 16)).toString(16);
				});
				return {
					id: id + 1,
					color: randHex,
				};
				
			});
			setColors(arr);
			setSearch("");
		}
	};
	return (
		<form className='flex gap-3 my-5' onSubmit={handleSubmit}>
			<input
				type='text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className='w-[200px] p-2 rounded-full border-2 border-black
                outline-none text-lg pl-5'
				placeholder='Enter a number...'
			/>
			<button
				className='px-8 py-2 text-xl text-white bg-green-600 
            hover:bg-green-700 rounded-full transition-all'
			>
				Generate
			</button>
		</form>
	);
};
export default Input;
