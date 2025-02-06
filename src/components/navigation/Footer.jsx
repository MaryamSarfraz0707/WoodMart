import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
	// Inline styles
	const footerStyles = {
		margin:"50px",
		color: "#0D0D0D",
		backgroundColor: "#f9f9f9",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		padding: "20px",
	};

	const headingStyles = {
		marginBottom: "0px",
		font: "bold",
		fontFamily: "'Montserrat', sans-serif;",
		fontSize: "18px",
	};

	const linkStyles = {
		color: "#0D0D0D",
		textDecoration: "none",
		display: "flex",
		alignItems: "center",
	};

	const socialIconsStyles = {
		display: "flex",
		gap: "10px",
	};

	const paymentIconsStyles = {
		display: "flex",
		gap: "10px",
		marginTop: "20px",
	};

	const copyrightStyles = {
		textAlign: "center",
		marginTop: "20px",
		fontSize: "12px",
		color: "#0D0D0D",
	};

	return (
		<footer style={footerStyles}>
			{/* Parent div to group all sections */}
			<div style={{ width: "100%" }}>
				
				{/* Stores Section */}
				<div style={{
					padding: "20px", margin: "8px 20px"
				}}>
					<div className="stores" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "20px", width: "100%" }}>
						{[
							{
								name: "Broadway Store",
								address: "1260 Broadway, San Francisco, CA 94109",
							},
							{
								name: "Valencia Store",
								address: "1501 Valencia St., San Francisco, CA 94110",
							},
							{
								name: "Emeryville Store",
								address: "1034 36th St, Emeryville, CA 94608",
							},
							{ name: "Alameda Store", address: "1433 High St, Alameda, CA 94501" },
						].map((store, index) => (
							<div key={index} style={{ flex: "1 1 200px", maxWidth: "300px" }}>
								<h4 style={headingStyles}>{store.name}</h4>
								<p>{store.address}</p>
							</div>
						))}
					</div>
				</div>

				{/* Footer Sections grouped into separate divs */}
				<div className="footer-sections" style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-around",
					gap: "30px",
					fontFamily: "Roboto",
					padding: "10px 20px",
					margin: "auto",
				}}>

					{/* Branding and Subscribe Section */}
					<div style={{ flex: "1 1 200px", maxWidth: "300px", marginTop: "0px", padding: "0px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
						<span>
							<img
								src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/mega-electronics-logo.svg"
								alt="Logo"
								style={{ maxWidth: "100%" }}
							/>
						</span>
						<p>
							Condimentum adipiscing vel neque dis nam <br /> parturient orci at scelerisque.
						</p>

						{/* Subscribe Section with Social Icons */}
						<div>
							<h4 style={headingStyles}>Subscribe Us</h4>
							<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
								<a href="#" style={linkStyles}>
									<Facebook size={24} />
								</a>
								<a href="#" style={linkStyles}>
									<Twitter size={24} />
								</a>
								<a href="#" style={linkStyles}>
									<Instagram size={24} />
								</a>
								<a href="#" style={linkStyles}>
									<Linkedin size={24} />
								</a>
							</div>
						</div>
					</div>

					{/* Categories Section */}
					<div style={{ flex: "1 1 200px", maxWidth: "300px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
						<h4 style={headingStyles}>Categories</h4>
						<ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
							{[
								"Smartphones",
								"Laptops",
								"Hardware",
								"Cameras",
								"Headphones",
								"Bathroom",
							].map((item, index) => (
								<li key={index}>
									<a href="#" style={{ color: "#7F8389", textDecoration: "none" }}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Useful Links */}
					<div style={{ flex: "1 1 200px", maxWidth: "300px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
						<h4 style={headingStyles}>Useful Links</h4>
						<ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
							{[
								"Promotions",
								"Stores",
								"Our Contacts",
								"Delivery & Return",
								"Outlet",
							].map((link, index) => (
								<li key={index}>
									<a href="#" style={{ color: "#7F8389", textDecoration: "none" }}>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Download App Section */}
					<div style={{ flex: "1 1 200px", maxWidth: "300px", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
						<h4 style={headingStyles}>Download App on Mobile:</h4>
						<p style={{ color: "#7F8389" }}>15% discount on your first purchase</p>
						<div style={{ display: "flex", gap: "10px" }}>
							<a href="#">
								<img
									src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/google-play.svg"
									alt="Google Play"
									style={{ width: "100px" }}
								/>
							</a>
							<a href="#">
								<img
									src="https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/app-store.svg"
									alt="App Store"
									style={{ width: "100px" }}
								/>
							</a>
						</div>
					</div>
				</div>

				{/* Copyright and Payment Methods */}
				<div style={{ width: "auto", display: "flex", flexWrap: "wrap", gap: "20px", margin: "8px 20px", justifyContent: "space-between", alignItems: "center" }}>
					<div>
						<p style={copyrightStyles}>
							WOODMART 2025 CREATED BY XTEMOS STUDIO PREMIUM E-COMMERCE SOLUTIONS
						</p>
					</div>

					{/* Payment Icons */}
					<div style={paymentIconsStyles}>
						<img
							src="https://woodmart.b-cdn.net/mega-electronics/wp-content/themes/woodmart-dev/images/payments.png"
							alt="Visa"
						/>
					</div>
				</div>

			</div>
		</footer>
	);
};

export default Footer;