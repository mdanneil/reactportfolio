import { Grid, Typography } from '@mui/material'
import React from 'react'

const About = () => {
	return (
		<section id='om mig'>
			<Grid
				container
				justifyContent='center'
				alignItems='center'
				style={{ height: '100vh' }}>
				<Grid item>
					<Typography variant='h5'>Om mig</Typography>
				</Grid>
			</Grid>
		</section>
	)
}

export default About
