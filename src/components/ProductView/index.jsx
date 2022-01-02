import { Container, Col, Row, Text, Heading } from 'src/components/All'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import * as Style from './style'

const ProductView = (props) => {
	return (
		<Style.Content>
			<Container>
				<Row>
					<Col size="col-lg-6 col-12">
						<Style.Item>
							<Style.BoxImg>
								<Image
									className="img-fallback"
									alt={props.altImg}
									src={props.img}
									layout="fill"
									objectFit="contain"
									quality={100}
								/>
							</Style.BoxImg>
						</Style.Item>
					</Col>
					<Col size="col-lg-5 offset-lg-1 col-12">
						<Style.BoxInfo>
							<Heading type="h6">{props.category}</Heading>
							<Heading type="h3">{props.title}</Heading>
							<Heading type="h4">{props.price}</Heading>
							<Text>{props.description}</Text>
							<Button variant="dark" onClick={props.onClick}>
								Add to cart
							</Button>
						</Style.BoxInfo>
					</Col>
				</Row>
			</Container>
		</Style.Content>
	)
}

export default ProductView
