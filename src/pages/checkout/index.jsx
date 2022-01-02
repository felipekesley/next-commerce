import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table, Form } from 'react-bootstrap'
import { Cart, Container, Heading } from 'src/components/All'
import { ChangeCart } from '../../store/actions/cart.action'
import * as Style from './style'

const CheckoutPage = () => {
	return (
		<Style.Content>
			<Container>
				<Heading type="h2">Checkout</Heading>
				<Style.Hr />
			</Container>
		</Style.Content>
	)
}

export default CheckoutPage
