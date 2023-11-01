import React from 'react'
import About from './components/About'
import theme from './theme'
import { Grid, Container, Paper } from '@mui/material'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'

function App() {
	return (
		<div style={{ position: 'relative' }}>
			<Sidebar />
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<Grid container spacing={0}>
						<Grid
							item
							xs={12}
							component={Paper}
							sx={{
								background: theme.light.primaryBackground,
								height: '100vh',
							}}>
							<About />
						</Grid>
						<Grid
							item
							xs={12}
							component={Paper}
							sx={{
								background: theme.light.secondaryBackground,
								height: '100vh',
							}}>
							<Projects />
						</Grid>
						<Grid
							item
							xs={12}
							component={Paper}
							sx={{
								background: theme.light.primaryBackground,
								height: '100vh',
							}}>
							<Contact />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default App
