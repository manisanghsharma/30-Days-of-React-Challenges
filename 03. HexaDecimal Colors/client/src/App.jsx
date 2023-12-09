import { useEffect, useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
	const [colors, setColors] = useState([]);

	useEffect(() => {
		const arr = [...Array(30).keys()].map((id) => {
			const randHex = "#000000".replace(/0/g, function () {
				return (~~(Math.random() * 16)).toString(16);
			});
			return {
				id: id + 1,
				color: randHex,
			};
		});

		setColors(arr);
	}, []);

	return (
		<div className='flex flex-col items-center justify-center mb-[13px]'>
			<h1 className='text-4xl font-semibold mt-10 sm:text-6xl'>30 Days Of React</h1>
			<h2 className='text-2xl mt-5 sm:text-4xl'>Hexadecimal Colors</h2>
			<Input colors={colors} setColors={setColors} />
			<div className='grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6'>
				{colors.map((color) => (
					<Card
						color={color}
						key={color.id}
						colors={colors}
						setColors={setColors}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
