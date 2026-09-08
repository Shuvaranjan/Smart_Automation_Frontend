import { Check, X } from 'lucide-react'

export default function ExtractedInfoTable({ fields }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <p className="mb-3 text-xs font-medium text-[var(--color-text-dim)]">Extracted Information</p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)] text-xs text-[var(--color-text-faint)]">
              <th className="py-2.5 font-medium">Field</th>
              <th className="py-2.5 font-medium">Extracted Data</th>
              <th className="py-2.5 font-medium">Confidence</th>
              <th className="py-2.5 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((f) => (
              <tr key={f.field} className="border-b border-[var(--color-border)]/60 last:border-0">
                <td className={`py-2.5 pr-4 ${f.status === 'missing' ? 'text-[var(--color-bad)] font-medium' : 'text-[var(--color-text)]'}`}>
                  {f.field}
                </td>
                <td className={`py-2.5 pr-4 ${f.status === 'missing' ? 'text-[var(--color-bad)]' : 'text-[var(--color-text-dim)]'}`}>
                  {f.value}
                </td>
                <td className="py-2.5 pr-4 text-[var(--color-text-dim)]">
                  {f.status === 'missing' ? '0%' : `${f.confidence}%`}
                </td>
                <td className="py-2.5">
                  {f.status === 'valid' ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-good)]/12 px-2.5 py-1 text-xs font-medium text-[var(--color-good)]">
                      <Check size={12} strokeWidth={3} /> Valid
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-bad)]/12 px-2.5 py-1 text-xs font-medium text-[var(--color-bad)]">
                      <X size={12} strokeWidth={3} /> Missing
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}