import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import { ChevronLeft } from '@styled-icons/evil/ChevronLeft'
import { ChevronRight } from '@styled-icons/evil/ChevronRight'
import { Container } from '../All'
import { Http } from 'src/services/api'
import * as Style from './style'

const Slick = () => {
	// Api
	const [data, setData] = useState([])

	useEffect(() => {
		const lastProducts = async () => {
			try {
				const response = await Http.get('/products?_limit=5')
				setData(response.data)
				//console.log(response.data)
			} catch (Error) {
				// setError(true)
				//console.log(Error)
			}
		}

		lastProducts()
	}, [])

	// Slider
	const activeSlider = useRef()

	const settings = {
		arrows: false,
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	const gotoNext = () => {
		activeSlider.current.slickNext()
	}

	const gotoPrev = () => {
		activeSlider.current.slickPrev()
	}

	return (
		<Container>
			<Style.Content>
				<Style.Arrow className="left" onClick={gotoPrev}>
					<ChevronLeft className="icon" />
				</Style.Arrow>
				<Style.Arrow className="right" onClick={gotoNext}>
					<ChevronRight className="icon" />
				</Style.Arrow>
				<Slider {...settings} ref={activeSlider}>
					{data?.map((item, index) => (
						<Style.Box key={item.id}>
							<Style.Item>
								<Link
									href={`product/${item.slug}?cat=${item.categoryId}`}
								>
									<a>
										<Image
											data-index={index}
											className="img-fallback"
											alt={item.name}
											src={item.url}
											layout="fill"
											objectFit="contain"
											quality={100}
										/>
									</a>
								</Link>
							</Style.Item>
						</Style.Box>
					))}
				</Slider>
			</Style.Content>
		</Container>
	)
}

export default Slick
