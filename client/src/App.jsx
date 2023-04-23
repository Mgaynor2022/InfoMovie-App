import {Routes, Route, Link} from "react-router-dom"
import MovieContext  from "./Components/MovieContext"
import SearchStyle from "./Components/SearchStyle"
import Favorites from "./Components/Favorites"
import LandingPage from "./Components/LandingPage"
import Footer from "./Components/Footer"

function App () {
    return (
        // Pushing the footer to the bottom of the page
            <div className="app min-h-screen flex flex-col">
            <header className="bg-white px-8 py-8 flex justify-between items-center">
					<h1 href="#" class="font-bold text-xl tracking-wider">infoMovie App</h1>
					<ul className="hidden md:flex uppercase text-sm ml-8">

						<li>
							<Link className="text-gray-600" to="/LandingPage">Home</Link>
						</li>
						<li className="ml-8">
							<Link className="text-gray-600" to="/searchStyle">Search</Link>
						</li>
						<li className="ml-8">
							<Link className="text-gray-600" to="/Favorites">Favorites</Link>
						</li>

					</ul>
				</header>

            <MovieContext className="">
                <Routes>
                <Route index element={<LandingPage />}/>
                    <Route path="/LandingPage"  index element={<LandingPage />} />
                    <Route path="/searchStyle" element={<SearchStyle />}/>
                    <Route path="/Favorites" element={<Favorites />}/>
                    <Route path="/Footer" element={<Footer />}/>
                </Routes>
                <Footer />
            </MovieContext>

            </div>
        
    )
}

export default App
