"use client";

import { useId, type ComponentProps, type ReactNode } from "react";
import { Fieldset } from "@base-ui/react/fieldset";
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

export interface FormFieldGroupProps extends ComponentProps<"fieldset"> {
  /** Names the group: "Billing address", "By email". */
  legend: ReactNode;
  /** A line under the legend. Screen readers hear it with the group's name. */
  description?: ReactNode;
  /** The fields. Give each input `isFullWidth`. */
  children: ReactNode;
  /** Lay the group's fields out two to a row (one on narrow screens). */
  columns?: 1 | 2;
}

/**
 * Related fields inside a FormSection, under a legend: an address, a set of
 * checkboxes. A `<fieldset>`, so `disabled` turns off every field in it. It
 * takes a whole row of a two-column section and lays out its own columns.
 */
// Base UI's Fieldset, not a bare <fieldset>: a native disabled fieldset only
// reaches native controls, while Checkbox, Switch and Radio are <span>s that
// would stay clickable and undimmed. Its context disables every Field inside.
export function FormFieldGroup({
  legend,
  description,
  children,
  columns = 1,
  className,
  "aria-describedby": describedBy,
  ...props
}: FormFieldGroupProps) {
  const descriptionId = useId();
  return (
    <Fieldset.Root
      {...props}
      className={cn(styles.group, className)}
      aria-describedby={
        cn(description && descriptionId, describedBy) || undefined
      }
    >
      <legend className={styles.legend}>{legend}</legend>
      {description && (
        <p id={descriptionId} className={styles.description}>
          {description}
        </p>
      )}
      <div className={cn(styles.fields, columns === 2 && styles.twoColumns)}>
        {children}
      </div>
    </Fieldset.Root>
  );
}

export interface FormActionsProps extends ComponentProps<"div"> {
  /** Buttons, the primary one last. */
  children: ReactNode;
}

/** The row of buttons at the end of a form: secondary actions first, the primary one last, at the end. */
export function FormActions({ className, ...props }: FormActionsProps) {
  return <div className={cn(styles.actions, className)} {...props} />;
}
