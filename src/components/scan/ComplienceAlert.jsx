import { AlertTriangle } from 'lucide-react'

export default function ComplianceAlert() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[var(--color-bad)]/35 bg-[var(--color-bad)]/8 p-4">
      <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[var(--color-bad)]" />
      <div>
        <p className="text-sm font-semibold text-[var(--color-bad)]">Compliance Failed: Missing Mandatory Details</p>
        <p className="mt-1 text-[13px] text-[var(--color-text-dim)]">
          Please ensure all mandatory details like Manufacturer Name and FSSAI Logo are present on the package.
        </p>
      </div>
    </div>
  )
}