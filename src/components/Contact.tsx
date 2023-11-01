import { Grid, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
	return (
		<section id='kontakt'>
			<Grid
				container
				justifyContent='center'
				alignItems='center'
				style={{ height: '100vh' }}>
				<Grid item>
					<Typography variant='h5'>Kontakt</Typography>
				</Grid>
			</Grid>
		</section>
	)
}

export default Contact
