import CopyBtn from "./CopyBtn"
import Copied from "./Copied"
import { useState } from "react"

const Card = ({color}) => {
    const [copy, setCopy] = useState(1);
    
  return (
		<div
			className='w-[150px] h-[150px] rounded-lg flex flex-col 
    items-center justify-start gap-3'
			style={{ backgroundColor: color.color }}
		>
			<p className='text-white text-xl font-medium mt-8'>{color.color}</p>
			{copy ? (
				<CopyBtn color={color} setCopy={setCopy} />
			) : (
				<Copied setCopy={setCopy} />
			)}
		</div>
	);
}
export default Card