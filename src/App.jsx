import Landing from './pages/Landing.jsx'
import ScanDashboard from './pages/ScanDashboard.jsx'
import AnalyticsDashboard from './pages/AnalyticsDashboard.jsx'
import Placeholder from './pages/Placeholder.jsx'
import './App.css'
import Login from './pages/Login.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/login" element={<Login />} />
			<Route path="/scan" element={<ScanDashboard />} />
			<Route path="/analytics" element={<AnalyticsDashboard />} />
			<Route path="/history" element={<Placeholder title="History" />} />
			<Route path="/reports" element={<Placeholder title="Reports" />} />
			<Route path="/products" element={<Placeholder title="Products" />} />
			<Route path="/alerts" element={<Placeholder title="Alerts" />} />
			<Route path="/settings" element={<Placeholder title="Settings" />} />
		</Routes>
	)
}

export default App
