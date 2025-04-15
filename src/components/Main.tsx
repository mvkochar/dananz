import { Route, Routes } from "react-router-dom"
import { About, Home, Services, Teams } from "../pages"


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
    </Routes>
  )
}

export default Main