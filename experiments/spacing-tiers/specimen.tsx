import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { Tag } from '@/components/atomic-elements/Tag'
import { Button } from '@/components/buttons/Button'
import { Search } from '@/components/inputs/Search'
import { Select } from '@/components/inputs/Select'
import { Pagination } from '@/components/navigation/Pagination'
import { Tabs } from '@/components/navigation/Tabs'

/** Shows its child and the child's rendered height. */
function Measured({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [h, setH] = useState(0)
  useLayoutEffect(() => {
    const el = ref.current?.firstElementChild
    if (el) setH(Math.round(el.getBoundingClientRect().height))
  })
  return (
    <span className="measured">
      <span ref={ref} className="measuredItem">
        {children}
      </span>
      <span className="measuredPx">{h ? `${h}px` : ''}</span>
    </span>
  )
}

const SIZES = ['md', 'sm'] as const

export function Specimen({ density, typeFixed }: { density: 'compact' | 'default'; typeFixed: boolean }) {
  return (
    <div className="specimen" data-density={density} data-type={typeFixed ? 'fixed' : undefined} key={String(typeFixed)}>
      <h3 className="subHead">{density === 'default' ? 'Default' : 'Compact'}</h3>
      {SIZES.map((size) => (
        <div key={size} className="specimenRow">
          <span className="specimenSize">{size}</span>
          <div className="specimenItems">
            <Measured>
              <Button size={size} startIcon={<Icon name="plus" />}>
                Add product
              </Button>
            </Measured>
            <Measured>
              <Button size={size} variant="secondary" appearance="outlined" endIcon={<Icon name="chevron-down" />}>
                Category
              </Button>
            </Measured>
            <Measured>
              <Search size={size} aria-label={`Search, ${density} ${size}`} placeholder="Search" />
            </Measured>
            <Measured>
              <Select size={size} aria-label={`Period, ${density} ${size}`} defaultValue="30" options={[{ value: '30', label: 'Last 30 days' }]} />
            </Measured>
            <Measured>
              <Tabs
                size={size}
                appearance="pills"
                aria-label={`Views, ${density} ${size}`}
                defaultValue="table"
                items={[
                  { value: 'table', label: 'Table' },
                  { value: 'board', label: 'Board' },
                  { value: 'list', label: 'List' },
                ]}
              />
            </Measured>
            <Measured>
              <Tag size={size} variant="success" text="Active" />
            </Measured>
            <Measured>
              <Pagination size={size} totalPages={5} defaultPage={2} aria-label={`Pages, ${density} ${size}`} />
            </Measured>
          </div>
        </div>
      ))}
    </div>
  )
}
