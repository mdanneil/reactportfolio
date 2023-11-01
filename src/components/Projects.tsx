import { Grid, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
	return (
		<section id='projekt'>
			<Grid
				container
				justifyContent='center'
				alignItems='center'
				style={{ height: '100vh' }}>
				<Grid item>
					<Typography variant='h5'>Projekt</Typography>
				</Grid>
			</Grid>
		</section>
	)
}

export default Projects
