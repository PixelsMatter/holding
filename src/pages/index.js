import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import Logo from '../components/Logo'

const IndexPage = () => (
	<Layout>
		<SEO/>
		<Container>
			<Logo/>
			<p>Stay tuned for the launch of our new site! In the meantime, feel free to get in touch using hello@pixelsmatter.io. You can also join our newsletter and be the first to know when we go live.</p>
			<a className='btn' href='mailto:hello@pixelsmatter.io' target='_blank' rel='noreferrer'>Say Hello</a>
			<a className='btn btn--alt' href='https://eepurl.com/hxplL5' target='_blank' rel='noreferrer'>Keep Updated</a>
		</Container>
	</Layout>
)

export default IndexPage