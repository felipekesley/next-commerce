import Image from 'next/image'
import { Close } from '@styled-icons/evil/Close'
import * as Style from './style'

const Cart = (props) => {
	return (
		<tr>
			<td className="td-img">
				<Style.BgImg>
					<Style.BoxImg>
						<Image
							className="img-fallback"
							alt={props.altImg}
							src={props.img}
							layout="fill"
							objectFit="contain"
							quality={80}
						/>
					</Style.BoxImg>
				</Style.BgImg>
			</td>
			<td>{props.title}</td>
			<td>{props.quantity}</td>
			<td>{props.price}</td>
			<td className="center">
				<Close className="icon" onClick={props.onClick} />
			</td>
		</tr>
	)
}

export default Cart
