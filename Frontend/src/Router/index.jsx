//// VIEWS
import Home from '../Views/Home'
import HotelsPage from '../Views/Hotels'
import ProfileHotel from '../Views/ProfileHotel'
import CountactUsPage from '../Views/ContactUs'
import NotFoundPage from '../Views/404'
import DashboardStatistique from '../Views/Dashboard/Statistique'

/// LAYOUT
import PageLayout from '../Container/Page'
import DashboardLayout from '../Container/Dashboard'

import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";



export default function RouterCmpt(){

  return (
    <div className="Router">
          <BrowserRouter>
                  <Routes>
                    <Route path="/Contact" element={<CountactUsPage/>} />
                    <Route path="/" element={<PageLayout/>} >
                        <Route path="/" element={<Home />} />
                        <Route path="Hotels" element={<HotelsPage />} /> 
                        <Route path="Hotel/:id" element={<ProfileHotel />} /> 
                    </Route>
                    <Route path="/Dashboard" element={<DashboardLayout/>} >
                        <Route path="Statistique" element={<DashboardStatistique />} />
                    </Route>
                  </Routes>
          </BrowserRouter>

    </div>
  )
}