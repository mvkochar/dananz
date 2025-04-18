import { Route, Routes } from "react-router-dom"
import { About, Contact, Home, Portfolio, PortfolioDetails, Services, Teams } from "../pages"


const Main = () => {
  return (
    <Routes>
        <Route
            path="/"
            element={<Home/>}
        />
        <Route
          path="about"
          element={<About/>}
        />
        <Route
          path="services"
          element={<Services/>}
        />
        <Route
          path="teams"
          element={<Teams/>}
        />
        <Route
          path="contact"
          element={<Contact/>}
        />
        <Route
          path="portfolio"
          element={<Portfolio/>}
        />
        <Route
          path="portfolio-details"
          element={<PortfolioDetails/>}
        />
    </Routes>
  )
}

export default Main