import { Clipboard } from "react-feather"
import {CopyToClipboard} from "react-copy-to-clipboard"

const CopyBtn = ({color, setCopy}) => {
  
  return (
		<CopyToClipboard text={color.color} >
			<div className='p-3 hover:bg-[#0000006c] flex items-center justify-center transition-all cursor-pointer rounded-full'>
				<Clipboard size={25} color='white' onClick={() => {
					setCopy(0);
					setTimeout(() => {
						setCopy(1)
					}, 2500)
				}}/>
			</div>
		</CopyToClipboard>
	);

}
export default CopyBtn