import CopyBtn from "./CopyBtn"
import Copied from "./Copied"
import { useState } from "react"

const Card = ({color}) => {
    const [copy, setCopy] = useState(1);
    
  return (
		<div
			className='w-[120px] h-[120px] rounded-lg flex flex-col 
    items-center justify-center gap-3 sm:w-[150px] sm:h-[150px]'
			style={{ backgroundColor: color.color }}
		>
			<p className='text-white text-xl font-medium'>{color.color}</p>
			{copy ? (
				<CopyBtn color={color} setCopy={setCopy} />
			) : (
				<Copied setCopy={setCopy} />
			)}
		</div>
	);
}
export default Card