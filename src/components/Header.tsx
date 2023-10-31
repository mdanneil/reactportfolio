import React from 'react'
import { Link } from 'react-scroll' // Import Link from react-scroll
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 240
const navItems = ['About', 'Projects', 'Contact']

const Header = () => {
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				Marcus
			</Typography>
			<Divider />
			<List>
				{navItems.map((item, index) => (
					<ListItem key={item} disablePadding>
						<Link
							to={item.toLowerCase()} // Use the section ID as the target
							smooth={true}
							duration={500}
							offset={-64} // Adjust the offset if needed to accommodate the AppBar
						>
							<ListItemButton sx={{ textAlign: 'center' }}>
								<ListItemText primary={item} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<div>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar component='nav'>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='h6'
							component='div'
							sx={{
								flexGrow: 1,
								display: { xs: 'none', sm: 'block' },
							}}>
							Marcus
						</Typography>
						<Box
							sx={{
								display: { xs: 'none', sm: 'block' },
							}}>
							{navItems.map((item, index) => (
								<Link
									key={item}
									to={item.toLowerCase()}
									smooth={true}
									duration={500}
									offset={-64}>
									<Button sx={{ color: '#CDCDCD' }}>
										{item}
									</Button>
								</Link>
							))}
						</Box>
					</Toolbar>
				</AppBar>
				<nav>
					<Drawer
						variant='temporary'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						sx={{
							display: { xs: 'block', sm: 'none' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
						}}>
						{drawer}
					</Drawer>
				</nav>
			</Box>
		</div>
	)
}

export default Header
