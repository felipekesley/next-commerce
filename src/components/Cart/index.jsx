import Image from 'next/image'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import { Close } from '@styled-icons/evil/Close'
import { Plus } from '@styled-icons/evil/Plus'
import { Minus } from '@styled-icons/evil/Minus'
import * as Style from './style'

const Cart = (props) => {
	return (
		<tr>
			<td style={{ width: '10%' }}>
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
			<td style={{ width: '50%' }}>{props.title}</td>
			<td style={{ width: '20%' }}>
				<Style.Flex>
					<Minus className="icon" onClick={props.updateRemove} />
					<Form.Control
						type="text"
						value={props.quantity}
						onChange={props.onChange}
					/>
					<Plus className="icon" onClick={props.updateAdd} />
				</Style.Flex>
			</td>
			<td style={{ width: '10%' }}>{props.price}</td>
			<td style={{ width: '10%' }} className="center">
				<Close className="icon" onClick={props.onClick} />
			</td>
		</tr>
	)
}

Cart.propTypes = {
	altImg: PropTypes.string,
	img: PropTypes.string,
	title: PropTypes.string,
	updateRemove: PropTypes.func,
	quantity: PropTypes.number,
	onChange: PropTypes.func,
	updateAdd: PropTypes.func,
	price: PropTypes.string,
	onClick: PropTypes.func
}

export default Cart
