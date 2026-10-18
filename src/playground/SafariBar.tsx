import { Safari } from './Safari'
import styles from './SafariBar.module.css'

/** What the address field shows until the visitor types their own domain. */
export const DEFAULT_ADDRESS = 'example.com'

type BarProps = {
  appearance: 'light' | 'dark'
  address: string
  onAddress: (address: string) => void
}

/**
 * Safari's chrome on Desktop: Magic UI's macOS toolbar (1280×52, see
 * Safari.tsx). Tablet and Mobile have none: PreviewWindow draws the device
 * there. Only the address field is real; the rest is decoration and hidden
 * from assistive tech.
 */
export function SafariBar({ appearance, address, onAddress }: BarProps) {
  return (
    <Safari appearance={appearance}>
      <AddressInput address={address} onAddress={onAddress} />
    </Safari>
  )
}

/**
 * The address input, as wide as its text (a hidden copy sets the width), so
 * whatever sits beside it stays centred with it. The text size is the field's.
 */
function AddressInput({ address, onAddress }: Pick<BarProps, 'address' | 'onAddress'>) {
  return (
    <span className={styles.sizer}>
      <span aria-hidden className={styles.copy}>
        {address || ' '}
      </span>
      <input
        aria-label="Address"
        // One character wide on its own: the copy beside it sets the width.
        size={1}
        className={styles.input}
        value={address}
        onChange={(e) => onAddress(e.target.value)}
        // On leaving, the field shows what a shared link would: trimmed, or the default when empty.
        onBlur={(e) => onAddress(e.currentTarget.value.trim() || DEFAULT_ADDRESS)}
        inputMode="url"
        spellCheck={false}
        autoComplete="off"
      />
    </span>
  )
}
