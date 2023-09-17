import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { DetailsScreen, GalleryScreen } from "../constants/ScreenNames"
import Gallery from "../pages/Gallery"
import Details from "../pages/Details"

const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path={GalleryScreen} element={<Gallery />}/>
                <Route path={`${DetailsScreen}/:id`} element={<Details />}/>
                <Route path="*" element={<Navigate to={GalleryScreen} replace />} />
            </Routes>
        </Router>
    )
}

export default AppRouter