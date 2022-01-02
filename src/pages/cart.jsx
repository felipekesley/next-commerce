import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { Cart, Container, Heading } from 'src/components/All'
import { ChangeCart } from '../store/actions/cart.action'

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
		min-width: 5rem;
	}

	.table .center {
		text-align: center;
	}
`

export const Hr = styled.hr`
	border-color: ${({ theme }) => theme.colors.lightGray};
	margin: 2rem 0 4rem 0;
`

export const BgImg = styled.div`
	display: block;
	width: 100%;
	padding: 1rem 0;
	background-color: ${({ theme }) => theme.colors.lightGray};
`

export const BoxImg = styled.div`
	width: 100%;
	position: relative;
	&:before {
		content: '';
		display: block;
		padding-top: 100%;
		width: 100%;
	}
`

const CartPage = () => {
	//redux
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.CartReducer)

	const handleRemove = (id) => {
		cart.products.splice(id, 1)

		let quantity = 0
		cart.products.forEach((product) => {
			quantity += product[0].quantity
		})
		// cart.products.splice(itemToBeDeleted, 1)
		dispatch(
			ChangeCart({
				quantity: quantity
				//products: [...cart.products, data]
			})
		)
	}

	return (
		<Content>
			<Container>
				<Heading type="h2">Your Cart</Heading>
				<Hr />

				<Table responsive striped bordered hover>
					<thead>
						<tr>
							<th></th>
							<th>Product Name</th>
							<th>Quantity</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{cart.products.map((item, index) => (
							<Cart
								key={index}
								altImg={item[0].name}
								img={item[0].url}
								title={item[0].id}
								quantity={item[0].quantity}
								price={item[0].price.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL'
								})}
								onClick={() => handleRemove(index)}
							/>
						))}
					</tbody>
				</Table>
			</Container>
		</Content>
	)
}

export default CartPage
