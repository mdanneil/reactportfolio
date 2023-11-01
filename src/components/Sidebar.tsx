import React from 'react'
import { Link } from 'react-scroll'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import theme from '../theme'

const navItems = ['About', 'Projects', 'Contact']

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
			<Typography variant='h6' sx={{ my: 2, textAlign: 'left' }}>
				Marcus
			</Typography>
			<List>
				{navItems.map((item, index) => (
					<ListItem key={item} disablePadding>
						<Link
							to={item.toLowerCase()}
							smooth={true}
							duration={500}>
							<ListItemButton>
								<ListItemText primary={item} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	)
}

export default Sidebar
