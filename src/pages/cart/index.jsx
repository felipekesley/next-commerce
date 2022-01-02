import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table, Form } from 'react-bootstrap'
import { Cart, Container, Heading } from 'src/components/All'
import { ChangeCart } from '../../store/actions/cart.action'

import styled from 'styled-components'

export const Content = styled.div`
	width: 100%;
	position: relative;

	.icon {
		fill: ${({ theme }) => theme.colors.dark};
		width: 1.8rem;
		cursor: pointer;
	}

	.table > tbody {
		vertical-align: middle;
	}

	.table tr {
		text-align: left;
	}

	.table .td-img {
		min-width: 2rem;
	}

	.table .remove {
		width: 2.5rem;
	}

	.table .center {
		text-align: center;
	}
`

export const Hr = styled.hr`
	border-color: ${({ theme }) => theme.colors.lightGray};
	margin: 2rem 0 4rem 0;
`

export const Flex = styled.div`
	display: flex;
	justify-content: flex-end;
`

const CartPage = () => {
	//redux
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.CartReducer)

	const router = useRouter()

	const handleCheckout = () => {
		router.push('/checkout')
	}

	// State para armazenar a quantidade e rodar o useEffect
	const [upadateQuantity, setIpadateQuantity] = useState(0)

	useEffect(() => {
		upadateQuantity
	}, [cart.quantity, upadateQuantity])

	const handleUpdate = () => {
		setIpadateQuantity(cart.quantity)
	}

	// Remove um item do carrinho
	const handleRemove = (id) => {
		cart.products.splice(id, 1)

		let quantity = 0
		cart.products.forEach((product) => {
			quantity += product[0].quantity
		})
		dispatch(
			ChangeCart({
				quantity: quantity
			})
		)
	}

	// Aumenta a quantidade do item no carrinho
	const handleUpdateAdd = (slug) => {
		const result = cart.products.filter((item) => item[0].slug === slug)
		result[0][0].quantity++
		dispatch(
			ChangeCart({
				quantity: cart.quantity + 1
			})
		)
	}

	// Dininui a quantidade do item no carrinho
	const handleUpdateRemove = (slug) => {
		const result = cart.products.filter((item) => item[0].slug === slug)

		if (result[0][0].quantity <= 1) {
			return
		} else {
			result[0][0].quantity--
			dispatch(
				ChangeCart({
					quantity: cart.quantity - 1
				})
			)
		}
	}

	return (
		<Content>
			<Container>
				<Heading type="h2">Your Cart</Heading>
				<Hr />

				{cart.quantity > 0 ? (
					<Form>
						<Table responsive striped bordered hover>
							<thead>
								<tr>
									<th></th>
									<th>Product Name</th>
									<th>Quantity</th>
									<th>Price</th>
									<th>Remove</th>
								</tr>
							</thead>
							<tbody>
								{cart.products.map((item, index) => (
									<Cart
										key={index}
										altImg={item[0].name}
										img={item[0].url}
										title={item[0].name}
										quantity={item[0].quantity}
										price={item[0].price.toLocaleString(
											'pt-br',
											{
												style: 'currency',
												currency: 'BRL'
											}
										)}
										onChange={handleUpdate}
										updateAdd={() =>
											handleUpdateAdd(item[0].slug)
										}
										updateRemove={() =>
											handleUpdateRemove(item[0].slug)
										}
										onClick={() => handleRemove(index)}
									/>
								))}
							</tbody>
						</Table>
						<Flex>
							<Button variant="dark" onClick={handleCheckout}>
								proceed to checkout
							</Button>
						</Flex>
					</Form>
				) : (
					<p>Cart is empty</p>
				)}
			</Container>
		</Content>
	)
}

export default CartPage
