import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('login')

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/analytics')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-grid px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-2xl">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent-light)]">
            <ShieldCheck size={20} />
          </span>
          PackCheck <span className="text-[var(--color-accent-light)]">AI</span>
        </Link>
        <div className="mt-10 flex rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-1">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition ${mode === 'login' ? 'bg-[var(--color-accent)] text-white' : 'text-[var(--color-text-dim)] hover:text-[var(--color-text)]'}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition ${mode === 'register' ? 'bg-[var(--color-accent)] text-white' : 'text-[var(--color-text-dim)] hover:text-[var(--color-text)]'}`}
          >
            Register
          </button>
        </div>

        <h1 className="mt-8 font-display text-3xl font-extrabold">
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h1>
        <p className="mt-2 text-sm text-[var(--color-text-dim)]">
          {mode === 'login' ? 'Sign in to manage your compliance workspace.' : 'Set up your compliance workspace.'}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {mode === 'register' && (
            <label className="block text-sm font-medium">
              Full name
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-3.5 py-3 text-sm outline-none transition focus:border-[var(--color-accent-light)]"
                placeholder="Your name"
              />
            </label>
          )}
          <label className="block text-sm font-medium">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-3.5 py-3 text-sm outline-none transition focus:border-[var(--color-accent-light)]"
              placeholder="you@example.com"
            />
          </label>
          <label className="block text-sm font-medium">
            Password
            <input
              type="password"
              className="mt-2 w-full rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] px-3.5 py-3 text-sm outline-none transition focus:border-[var(--color-accent-light)]"
              placeholder="Enter your password"
            />
          </label>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-light)]">
            {mode === 'login' ? 'Sign In' : 'Create Account'} <ArrowRight size={16} />
          </button>
        </form>

        <Link to="/" className="mt-6 flex items-center justify-center text-sm font-semibold text-[var(--color-accent-light)] hover:underline">
          Back to Home
        </Link>
      </div>
    </main>
  )
}