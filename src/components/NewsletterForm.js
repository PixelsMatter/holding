// Libraries
import React from 'react'
import {Link} from 'gatsby'

// Images
import backPath from '../img/back.svg'

const NewsletterForm = () => (
	<form className='form'>
		<input type='text' name='first_name' required placeholder='First Name' className='input'/>
		<input type='text' name='last_name' required placeholder='Last Name' className='input'/>
		<input type='email' name='email' required placeholder='Email' className='input'/>

		<div className='flex full-width'>
			<Link to='/' className='btn btn--subtle'><img width='25' height='25' src={backPath} alt='Arrow' className='btn__icon'/> Go Back</Link>
			<button type='submit' name='submit' value='Submit' className='btn'>Submit</button>
		</div>
	</form>
)

export default NewsletterForm