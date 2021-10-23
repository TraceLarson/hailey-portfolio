import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function App() {
	return (
		<div>
			<header>
				<Navbar bg='info' expand='lg'>
					<Container>
						<Navbar.Brand href='#home'>Hailey Larson's Portfolio</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='me-auto'>
								<Nav.Link href='#home'>Home</Nav.Link>
								{/* <Nav.Link href='#link'>Link</Nav.Link> */}
								<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
									<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.2'>
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href='#action/3.3'>
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action/3.4'>
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>

			<body>
				<Carousel>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='holder.js/800x400?text=First slide&bg=373940'
							alt='First slide'
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='holder.js/800x400?text=Second slide&bg=282c34'
							alt='Second slide'
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src='holder.js/800x400?text=Third slide&bg=20232a'
							alt='Third slide'
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</body>
		</div>
	);
}

export default App;
