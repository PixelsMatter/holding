// Libraries
import React from 'react'
import {Link} from 'gatsby'
import AddToMailchimp from 'gatsby-plugin-mailchimp'

// Images
import backPath from '../img/back.svg'

class NewsletterForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: null,
			email: null,
			success: false,
			loading: false,
			error: null,
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

		this.setState({
			loading : true,
			error: null,
		})

		AddToMailchimp(this.state.email, {
			FNAME: this.state.firstName,
		}).then(response => {
			this.setState({'loading' : false})

			if(response.result === 'success') {
				this.setState({'success' : true})
			}
			else {
				this.setState({error: true})
			}
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='form'>
				{!this.state.success ? (
					<>
						<h1 className='form__heading'>Join Our Newsletter</h1>
						<p className='form__text'>By submitting your details you agree to receive communication and newsletter updates from PixelsMatter. We never spam and you can unsubscribe anytime.</p>
						<input type='text' name='firstName' required placeholder='First Name' onChange={this.handleChange} disabled={this.state.loading} className='input'/>
						<input type='email' name='email' required placeholder='Email' onChange={this.handleChange} disabled={this.state.loading} className='input'/>
					</>
				) :
					<>
						<h1 className='form__heading'>Thanks For Joining</h1>
						<p className='form__text'>Your email address <strong>({this.state.email})</strong> has been added to the PixelsMatter mailing list. Look forward to plenty of helpful updates from us in the near future.</p>
					</>
				}

				{this.state.error ? (
					<div className='error'>Error, please try again later.</div>
				) : null}

				<div className='flex space-between full-width'>
					<Link to='/' className='btn btn--subtle'><img width='25' height='25' src={backPath} alt='Arrow' className='btn__icon'/> Go Back</Link>
					{!this.state.success ? (
						<button type='submit' name='submit' value='Submit' disabled={this.state.loading} className='btn'>{this.state.loading ? 'Loading...' : 'Submit'}</button>
					) :
						<a className='btn' href='mailto:hello@pixelsmatter.io' target='_blank' rel='noreferrer'>Say Hello</a>
					}
				</div>
			</form>
		)
	}
}

export default NewsletterForm