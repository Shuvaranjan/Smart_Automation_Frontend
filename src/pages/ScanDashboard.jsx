import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronDown, PlusCircle } from 'lucide-react'
import Sidebar from '../components/dashboard/Sidebar.jsx'
import DashboardHeader from '../components/dashboard/DashboardHeader.jsx'
import UploadedImagePanel from '../components/scan/UploadedImagePanel.jsx'
import ExtractedInfoTable from '../components/scan/ExtractedInfoTable.jsx'
import ComplianceAlert from '../components/scan/ComplienceAlert.jsx'
import { extractedFields } from '../data/mockData.js'

export default function ScanDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const selectedFile = location.state?.file

  return (
    <div className="flex min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="flex-1 min-w-0">
        <DashboardHeader
          title="Scan Result"
          onMenuClick={() => setMobileOpen(true)}
          badge={
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-good)]/12 px-2.5 py-1 text-xs font-medium text-[var(--color-good)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-good)]" /> Completed
            </span>
          }
        >
          <button className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border-strong)] px-3.5 py-2 text-sm font-medium text-[var(--color-text-dim)] hover:bg-white/5">
            Export <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-[var(--color-accent)] px-3.5 py-2 text-sm font-semibold text-white hover:bg-[var(--color-accent-light)]">
            <PlusCircle size={15} /> New Scan
          </button>
        </DashboardHeader>

        <div className="grid gap-5 p-6 md:p-8 lg:grid-cols-[1fr_1.15fr]">
          <UploadedImagePanel file={selectedFile} />

          <div className="flex flex-col gap-5">
            <ExtractedInfoTable fields={extractedFields} />
            <ComplianceAlert />
          </div>
        </div>
      </div>
    </div>
  )
}