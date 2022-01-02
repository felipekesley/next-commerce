import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Container, Hamburger } from '../All'
import { Handbag } from '@styled-icons/bootstrap/Handbag'

import { ChangeCart } from '../../store/actions/cart.action'
import { useSelector, useDispatch } from 'react-redux'

import * as Style from './style'

const Header = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.CartReducer)
	//console.log(cart)

	// atualiza o total do carrinho
	useEffect(() => {
		let total = 0
		cart.products.forEach((product) => {
			total += product[0].price * product[0].quantity
		})
		dispatch(
			ChangeCart({
				total: total
			})
		)
	}, [cart.quantity])

	let totalCart = cart.total.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL'
	})

	const handleBag = () => {
		router.push('/cart')
	}

	return (
		<Style.Header>
			<Container>
				<Hamburger />
				<Style.Logo>
					<Link href="/">
						<a>
							<Style.Logo>next commerce</Style.Logo>
						</a>
					</Link>
				</Style.Logo>

				<Style.Box>
					<Style.Account>Account</Style.Account>
					<Style.Bag onClick={handleBag}>
						{cart.quantity == 0 ? (
							''
						) : (
							<Style.Quantity>{cart.quantity}</Style.Quantity>
						)}
						<Handbag className="icon" />
					</Style.Bag>
					{cart.quantity == 0 ? (
						''
					) : (
						<Style.Total>{totalCart}</Style.Total>
					)}
				</Style.Box>
			</Container>
		</Style.Header>
	)
}

export default Header
