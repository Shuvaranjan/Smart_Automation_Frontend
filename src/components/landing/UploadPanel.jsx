import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadCloud } from 'lucide-react'

export default function UploadPanel() {
  const [dragging, setDragging] = useState(false)
  const [fileName, setFileName] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  function handleFiles(files) {
    if (files && files[0]) {
      const file = files[0]
      setFileName(file.name)
      setPreviewUrl(URL.createObjectURL(file))
      navigate('/scan', { state: { file } })
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-6 -mt-4 pb-16">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); handleFiles(e.dataTransfer.files) }}
        className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-14 text-center transition-colors ${
          dragging ? 'border-[var(--color-accent-light)] bg-[var(--color-accent)]/10' : 'border-[var(--color-border-strong)] bg-[var(--color-surface)]/60'
        }`}
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt={`Preview of ${fileName}`}
            className="h-36 w-36 rounded-xl border border-[var(--color-border-strong)] object-contain"
          />
        ) : (
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/12 text-[var(--color-accent-light)]">
            <UploadCloud size={26} strokeWidth={1.75} />
          </span>
        )}
        <p className="mt-4 font-display text-base font-bold">
          {fileName ? `Selected: ${fileName}` : 'Drag & Drop Product Image Here'}
        </p>
        <p className="mt-1 text-xs text-[var(--color-text-faint)]">JPG, PNG, WEBP up to 10MB</p>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <button
          onClick={() => inputRef.current?.click()}
          className="mt-5 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
        >
          Choose File
        </button>
      </div>
    </section>
  )
}