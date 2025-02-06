import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const drawerWidth = 280;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: "60px",
});

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	backgroundColor: "white", // Remove black color from drawer
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

const categories = [
	{
		name: "Laptops, Tablets & PCs",
		icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Laptops-Tablets-PC.svg",
		icon2: "https://cdn-icons-png.flaticon.com/128/5343/5343102.png",
	},
	{
		name: "Computer & Office",
		icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Computer-Office.svg",
	},
	{
		name: "Hardware & Components",
		icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Hardware-Components.svg",
	},
	{
		name: "Smartphones",
		icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Smartphones.svg",
	},
	{
		name: "Games & Entertainment",
		icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Smartphones.svg",
	},
	{
		name: "TV & Hi-Fi",
		icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/TV-HIFI.svg",
	},
	{
		name: "Photo & Video",
		icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Photo-Video.svg",
	},
	{
		name: "Home Appliance",
		icon: "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/11/Home-Appliance.svg",
	},
];

const SideDrawer = () => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	return (
		<Box 
			sx={{ display: "flex", fontFamily: "Roboto, sans-serif" }}
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}>
			<CssBaseline />

			{/* Sidebar Drawer */}
			<Drawer variant="permanent" open={open}>
				{/* Hamburger Icon & All Categories Label */}
        <Box
	sx={{
		display: "flex",
		alignItems: "center",
		padding: "10px",
		cursor: "pointer",
	}}
	onClick={() => setOpen(true)}
>
	{/* Show Hamburger Icon only when sidebar is closed */}
	{!open && (
		<IconButton
			sx={{
				backgroundColor: "#1976d2", // Blue circle
				color: "white",
				borderRadius: "50%",
				padding: "10px",
				"&:hover": {
					backgroundColor: "#1565c0", // Darker blue on hover
				},
			}}
		>
			<MenuIcon />
		</IconButton>
	)}

	{/* Show 'All Categories' when sidebar is open */}
	{open && (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				backgroundColor: "#1976d2",
				borderRadius: "30px",
				padding: "10px 15px",
				transition: "all 0.3s ease-in-out",
				width: drawerWidth, // Match sidebar width
			}}
			onClick={() => setOpen(true)}
		>
			<MenuIcon sx={{ color: "white" }} />
			<Typography
				variant="body1"
				sx={{ fontWeight: "bold", color: "white", marginLeft: "10px" }}
			>
				All Categories
			</Typography>
		</Box>
	)}
</Box>


				<Divider />

				{/* Categories List */}
				<List>
					{categories.map((category) => (
						<ListItem
							key={category.name}
							disablePadding
							sx={{ display: "block" }}>
							<ListItemButton
								sx={{
									justifyContent: open ? "start" : "center",
									paddingX: open ? 2.5 : 0,
									minHeight: 48,
									display: "flex",
									alignItems: "center",
									"&:hover": { backgroundColor: "#e3f2fd" },
								}}
								onClick={() => setOpen(true)}>
								{/* Icon displayed when collapsed or expanded */}
								<img
									src={category.icon}
									alt={category.name}
									className="w-8 h-8"
								/>
								{open && (
									<ListItemText
										primary={category.name}
										sx={{
											marginLeft: 2,
										}}
									/>
								)}
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>

			
		</Box>
	);
};

export default SideDrawer;
