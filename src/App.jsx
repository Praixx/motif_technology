import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Applayout from "./ui/Applayout"
import Homepage from "./pages/Homepage"
import Services from "./pages/Services"
import CaseStudies from "./pages/CaseStudies"
import Solution from "./pages/Solution"
import About from "./pages/About"
import Insights from "./pages/Insights"
import Contact from "./pages/Contact"
import ErrorPage from "./ui/ErrorPage"

function App() {

    

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Applayout />} >
                    <Route index element={<Navigate replace to="homepage" />} />
                    <Route path="homepage" element={<Homepage />} />
                    <Route path="services" element={<Services />} />
                    <Route path="caseStudies" element={<CaseStudies />} />
                    <Route path="solution" element={<Solution />} />
                    <Route path="about" element={<About />} />
                    <Route path="insight" element={<Insights />} />
                    <Route path="contact" element={<Contact />} />
                </Route> 
                <Route path="*" element={<ErrorPage />} />
            </Routes>   
        </BrowserRouter>
    )
}

export default App
