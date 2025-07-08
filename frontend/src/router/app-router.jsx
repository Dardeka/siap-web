import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import UnggahData from '../pages/unggahData'
import PencarianData from '../pages/pencarianData'

export default function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/unggahData' element={<UnggahData/>} />
                <Route path='/pencarianData' element={<PencarianData/>} />
            </Routes>
        </Router>
    )
}