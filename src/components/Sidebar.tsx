import React from 'react'
import { Link } from 'react-scroll'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import theme from '../theme'

const navItems = ['Om mig', 'Projekt', 'Kontakt']

const Sidebar = () => {
	return (
		<Box
			sx={{
				position: 'fixed',
				left: 0,
				top: 0,
				zIndex: 1,
				padding: 2,
				height: '100%',
				backgroundColor: 'transparent',
			}}>
			<Typography
				variant='h5'
				sx={{
					m: 2,
					textAlign: 'left',
					fontFamily: 'Montserrat',
					fontWeight: 300,
				}}>
				Marcus Danneil Wahlström
			</Typography>
			<Typography
				variant='h6'
				sx={{
					m: 2,
					textAlign: 'left',
					fontFamily: 'Montserrat',
					fontWeight: 400,
				}}>
				Fullstackutvecklare
			</Typography>
			<List>
				{navItems.map((item, index) => (
					<ListItem key={item} disablePadding>
						<Link
							to={item.toLowerCase()}
							smooth={true}
							duration={500}>
							<ListItemButton>
								<Typography
									sx={{
										fontFamily: 'Montserrat',
										fontWeight: 500,
									}}>
									{item}
								</Typography>
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	)
}

export default Sidebar
