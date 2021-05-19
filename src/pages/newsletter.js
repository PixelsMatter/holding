// Libraries
import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import NewsletterForm from '../components/NewsletterForm'

const NewsletterPage = () => (
	<Layout>
		<SEO/>
		<Container>
			<h1>Lorem ipsum dolor sit amet</h1>
			<NewsletterForm/>
		</Container>
	</Layout>
)

export default NewsletterPage