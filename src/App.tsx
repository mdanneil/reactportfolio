import React from 'react'
import About from './components/About'
import Header from './components/Header'
import theme from './theme'
import { Grid } from '@mui/material'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
	return (
		<>
			<Header />
			<Grid spacing={0} padding={0}>
				<Grid
					item
					xs={12}
					style={{
						background: theme.light.primaryBackground,
						height: '100vh',
					}}>
					<About />
				</Grid>

				<Grid
					item
					xs={12}
					style={{
						background: theme.light.secondaryBackground,
						height: '100vh',
					}}>
					<Projects />
				</Grid>

				<Grid
					item
					xs={12}
					style={{
						background: theme.light.primaryBackground,
						height: '100vh',
					}}>
					<Contact />
				</Grid>
			</Grid>
		</>
	)
}

export default App
