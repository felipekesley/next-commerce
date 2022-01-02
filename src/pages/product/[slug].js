import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductView } from 'src/components/All'
import { Http } from 'src/services/api'
import { ChangeCart } from '../../store/actions/cart.action'

export default function Product() {
	//redux
	const dispatch = useDispatch()
	const cart = useSelector((state) => state.CartReducer)

	const router = useRouter()
	const slug = router.query.slug
	const cat = router.query.cat

	const [data, setData] = useState([])
	const [category, setCategory] = useState('')

	useEffect(() => {
		const product = async () => {
			try {
				const response = await Http.get(`products?slug=${slug}`)
				setData(response.data)
				//console.log(response.data)
			} catch (Error) {
				// setError(true)
				console.log(Error)
			}
		}

		product()

		const getCategory = async () => {
			try {
				const response = await Http.get(`categories?id=${cat}`)
				setCategory(response.data[0].name)
			} catch (Error) {
				// setError(true)
				//console.log(Error)
			}
		}

		getCategory()
	}, [slug, cat])

	const handleAdd = () => {
		let newProduct = true
		cart.products.forEach((product, index) => {
			if (product[0].name === data[0].name) {
				newProduct = false
				cart.products[index][0].quantity++
				dispatch(
					ChangeCart({
						quantity: (cart.quantity += 1)
					})
				)
			}
		})

		if (newProduct) {
			newProduct = true
			dispatch(
				ChangeCart({
					quantity: (cart.quantity += 1),
					products: [...cart.products, data]
				})
			)
		}
	}

	return (
		<>
			{data?.map((item) => (
				<ProductView
					key={item.id}
					altImg={item.name}
					img={item.url}
					category={category}
					title={item.name}
					price={item.price.toLocaleString('pt-br', {
						style: 'currency',
						currency: 'BRL'
					})}
					description={item.description}
					onClick={handleAdd}
				/>
			))}
		</>
	)
}
