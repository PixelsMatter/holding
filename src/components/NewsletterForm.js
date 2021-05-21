// Libraries
import React from 'react'
import {Link} from 'gatsby'
import Axios from 'axios'

// Images
import backPath from '../img/back.svg'

class NewsletterForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: null,
			email: null,
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		event.preventDefault()

		const fieldTarget = event.target,
		fieldName = fieldTarget.name,
		fieldValue = fieldTarget.value

		this.setState({
			[fieldName]: fieldValue
		})
	}

	handleSubmit(event) {
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='form'>
				<h1 className='form__heading'>Join Our Newsletter</h1>
				<p className='form__text'>By submitting your details you agree to receive communication and newsletter updates from PixelsMatter. We never spam and you can unsubscribe at any time.</p>
				<input type='text' name='firstName' required placeholder='First Name' onChange={this.handleChange} className='input'/>
				<input type='email' name='email' required placeholder='Email' onChange={this.handleChange} className='input'/>
				<div className='flex space-between full-width'>
					<Link to='/' className='btn btn--subtle'><img width='25' height='25' src={backPath} alt='Arrow' className='btn__icon'/> Go Back</Link>
					<button type='submit' name='submit' value='Submit' className='btn'>Submit</button>
				</div>
			</form>
		)
	}
}

export default NewsletterForm