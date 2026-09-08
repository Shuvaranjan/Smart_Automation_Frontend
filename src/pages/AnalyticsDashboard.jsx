import { useState } from 'react'
import { Calendar, SlidersHorizontal } from 'lucide-react'
import Sidebar from '../components/dashboard/Sidebar.jsx'
import DashboardHeader from '../components/dashboard/DashboardHeader.jsx'
import StatCard from '../components/analytics/StatCard.jsx'
import ViolationsChart from '../components/analytics/ViolationsChart.jsx'
import CategoryDonut from '../components/analytics/CategoryDonut.jsx'
import RecentViolationsTable from '../components/analytics/RecentViolationsTable.jsx'
import { stats, violationsOverTime, productCategories, recentViolations } from '../data/mockData.js'

const tabs = ['Overview', 'Scans', 'Violations', 'Products', 'Reports', 'Alerts', 'Users', 'Settings']

export default function AnalyticsDashboard() {
  const [tab, setTab] = useState('Overview')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="flex-1 min-w-0">
        <DashboardHeader title="Analytics Dashboard" onMenuClick={() => setMobileOpen(true)}>
          <button className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border-strong)] px-3.5 py-2 text-xs font-medium text-[var(--color-text-dim)] hover:bg-white/5">
            <Calendar size={14} /> 01 May 2025 – 31 May 2025
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border-strong)] px-3.5 py-2 text-xs font-medium text-[var(--color-text-dim)] hover:bg-white/5">
            <SlidersHorizontal size={13} /> Filters
          </button>
          <div className="flex items-center gap-2 rounded-lg border border-[var(--color-border-strong)] pl-1.5 pr-3 py-1.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)]/20 text-xs font-bold text-[var(--color-accent-light)]">
              IA
            </span>
            <span className="leading-tight">
              <span className="block text-xs font-medium">Inspector Admin</span>
              <span className="block text-[10px] text-[var(--color-text-faint)]">Regulator</span>
            </span>
          </div>
        </DashboardHeader>

        <div className="border-b border-[var(--color-border)] px-4 md:px-8">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  tab === t ? 'bg-[var(--color-accent)]/12 text-[var(--color-accent-light)]' : 'text-[var(--color-text-faint)] hover:text-[var(--color-text-dim)]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === 'Overview' ? (
          <div className="flex flex-col gap-5 p-6 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((s, i) => <StatCard key={s.label} stat={s} index={i} />)}
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.6fr_1fr]">
              <ViolationsChart data={violationsOverTime} />
              <CategoryDonut data={productCategories} total="24,532" />
            </div>

            <RecentViolationsTable rows={recentViolations} />
          </div>
        ) : (
          <div className="flex min-h-[50vh] flex-col items-center justify-center gap-2 p-8 text-center">
            <p className="font-display text-sm font-bold text-[var(--color-text-dim)]">{tab} is not part of this demo</p>
            <p className="max-w-xs text-xs text-[var(--color-text-faint)]">
              This section isn't built out yet — switch back to Overview to see the working analytics view.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}