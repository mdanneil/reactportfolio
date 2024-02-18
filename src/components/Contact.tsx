import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function ContactForm() {
	return (
		<Container maxWidth='sm'>
			<form
				action='https://public.herotofu.com/v1/348a8fd0-78af-11ee-b9fd-a16a30a6940d'
				method='post'
				acceptCharset='UTF-8'>
				<Typography variant='h4' align='center' gutterBottom>
					{'Contact Form'.toUpperCase()}
				</Typography>
				<Grid
					container
					direction='column'
					alignItems='center'
					spacing={2}>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Your Name'
							id='name'
							type='text'
							name='Name'
							required
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Your Email'
							id='email'
							type='email'
							name='Email'
							required
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Message'
							id='message'
							name='Message'
							required
							multiline
							rows={4}
						/>
					</Grid>
					<Grid
						container
						item
						xs={12}
						justifyContent='center'
						spacing={2}>
						<Grid item>
							<Button
								type='submit'
								variant='contained'
								color='primary'>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</Container>
	)
}

export default ContactForm
