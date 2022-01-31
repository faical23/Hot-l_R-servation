//// VIEWS
import Home from '../Views/Home'
import HotelsPage from '../Views/Hotels'
import ProfileHotel from '../Views/ProfileHotel'
import CountactUsPage from '../Views/ContactUs'
import NotFoundPage from '../Views/404'
import DashboardStatistique from '../Views/Dashboard/Statistique'
import DashboardRooms from '../Views/Dashboard/Rooms'
import DashboardClients from '../Views/Dashboard/Client'
import DashboardBooking from '../Views/Dashboard/Réservation'
import DashboardSettings from '../Views/Dashboard/Settings'

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
    <>
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
                        <Route path="Rooms" element={<DashboardRooms />} />
                        <Route path="Clients" element={<DashboardClients />} />
                        <Route path="Reservations" element={<DashboardBooking />} />
                        <Route path="Settings" element={<DashboardSettings />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
          </BrowserRouter>

    </>
  )
}