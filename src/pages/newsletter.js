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
			<NewsletterForm/>
		</Container>
	</Layout>
)

export default NewsletterPage