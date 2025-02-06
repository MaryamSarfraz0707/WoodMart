import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/TopNavigation/Navbar";
import SideDrawer from "../components/homePage/SideDrawer";
import Footer from "../components/navigation/Footer";

const MainLayout = () => {
	return (
		<div>
			{/* Sidebar - Always Static */}
			<SideDrawer />

			{/* Main Content Area */}
			<div>
				<Navbar />
				<main className="p-50 ">
					<Outlet /> {/* Dynamic content changes here */}
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;
