import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./FormLayouts.module.css";

export interface FormSectionProps extends Omit<
  ComponentProps<"section">,
  "title"
> {
  title: ReactNode;
  /** What these fields are for, or who sees them. */
  description?: ReactNode;
  /** The fields. Give each input `isFullWidth`; wrap one in FormFullWidth to span both columns. */
  children: ReactNode;
  /**
   * `split`: title and description in a column beside the fields, as on a
   * settings page. `stacked`: title above the fields. Split stacks by itself
   * when the section is narrower than 48rem.
   */
  layout?: "split" | "stacked";
  /** Lay the fields out two to a row (one on narrow screens). */
  columns?: 1 | 2;
  /** Put the fields on a card. With `footer`, the footer is the card's bottom band. */
  isCard?: boolean;
  /** Usually FormActions. */
  footer?: ReactNode;
  headingLevel?: 2 | 3;
}

/**
 * A group of related fields with a heading: one block of a settings page or
 * a form. Stack several, with FormActions after them.
 */
export function FormSection({
  title,
  description,
  children,
  layout = "split",
  columns = 1,
  isCard = false,
  footer,
  headingLevel = 2,
  className,
  ...props
}: FormSectionProps) {
  const Heading = `h${headingLevel}` as const;
  return (
    // The section is the container and .layout inside it the grid: an
    // element cannot query its own size.
    <section
      className={cn(styles.section, styles[layout], className)}
      {...props}
    >
      <div className={styles.layout}>
        <div className={styles.intro}>
          <Heading className={styles.title}>{title}</Heading>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        <div className={cn(styles.body, isCard && styles.card)}>
          <div
            className={cn(styles.fields, columns === 2 && styles.twoColumns)}
          >
            {children}
          </div>
          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      </div>
    </section>
  );
}

/** In a two-column FormSection, a field that takes the whole row. */
export function FormFullWidth({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn(styles.fullWidth, className)} {...props} />;
}

export interface FormActionsProps extends ComponentProps<"div"> {
  /** Buttons, the primary one last. */
  children: ReactNode;
}

/** The row of buttons at the end of a form: secondary actions first, the primary one last, at the end. */
export function FormActions({ className, ...props }: FormActionsProps) {
  return <div className={cn(styles.actions, className)} {...props} />;
}
