'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import docs from './docs.module.css'

/* Reads each token off the rendered table, so the value shown is what the
   page actually resolves (Theme scoping and reduced motion included), never
   a number retyped into the docs. */
export function TokenTable({ tokens }: { tokens: { name: string; use: string }[] }) {
  const ref = useRef<HTMLTableElement>(null)
  const [values, setValues] = useState<Record<string, string>>({})

  useLayoutEffect(() => {
    const style = getComputedStyle(ref.current!)
    setValues(Object.fromEntries(tokens.map((t) => [t.name, style.getPropertyValue(t.name).trim()])))
  }, [tokens])

  return (
    <table ref={ref} className={docs.tokenTable}>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Use</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((t) => (
          <tr key={t.name}>
            <td>
              <code>{t.name}</code>
            </td>
            <td data-token={t.name}>
              <code>{values[t.name]}</code>
            </td>
            <td>{t.use}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
