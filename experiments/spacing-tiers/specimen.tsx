import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { Icon } from '@/lib/icon'
import { Tag } from '@/components/atomic-elements/Tag'
import { Button } from '@/components/buttons/Button'
import { Search } from '@/components/inputs/Search'
import { Select } from '@/components/inputs/Select'
import { Pagination } from '@/components/navigation/Pagination'
import { Tabs } from '@/components/navigation/Tabs'
import { Menu } from '@/components/navigation/Menu'
import { Calendar } from '@/components/data-display/Calendar'
import { DatePicker } from '@/components/inputs/DatePicker'
import { Popover } from '@/components/overlays/Popover'
import { Tooltip } from '@/components/overlays/Tooltip'

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
      <div className="specimenRow">
        <span className="specimenSize">open</span>
        <div className="specimenItems">
          <Menu
            trigger={
              <Button variant="secondary" appearance="outlined" endIcon={<Icon name="chevron-down" />}>
                Menu
              </Button>
            }
            items={[{ label: 'Duplicate' }, { label: 'Move to draft' }, { type: 'separator' }, { label: 'Archive' }]}
          />
          <Popover
            trigger={
              <Button variant="secondary" appearance="outlined">
                Popover
              </Button>
            }
            title="Low stock"
            description="3 products have 12 or fewer left."
          />
          <Tooltip content="Stock value at unit cost">
            <Button variant="secondary" appearance="outlined">
              Tooltip
            </Button>
          </Tooltip>
          <DatePicker aria-label={`Ship date, ${density}`} defaultValue={new Date(2026, 9, 19)} />
        </div>
      </div>
      <div className="specimenRow">
        <span className="specimenSize">calendar</span>
        <div className="specimenItems">
          <Measured>
            <Calendar defaultValue={new Date(2026, 9, 19)} />
          </Measured>
        </div>
      </div>
    </div>
  )
}
