import { cn } from "@/lib/utils"

/**
 * A flexible grid component with customizable columns, rows, and optional decorative plus icons.
 *
 * @param columns - Number of columns in the grid (default: 9)
 * @param rows - Number of rows in the grid (default: 2)
 * @param height - Height of the grid container (default: "h-24")
 * @param width - Width of the grid container (default: "w-full")
 * @param showPlusIcons - Whether to show decorative plus icons at corners (default: true)
 * @param className - Additional CSS classes for the grid container
 * @param children - Content to render inside the grid
 * @param aria-label - ARIA label for accessibility
 */
export function Grid({
  columns = 9,
  rows = 2,
  height = "h-24",
  width = "w-full",
  showPlusIcons = true,
  className,
  children,
  "aria-label": ariaLabel
}) {
  const PlusIcon = ({
    className: iconClassName,
    ...rest
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        aria-hidden="true"
        {...rest}
        className={cn("absolute size-6 text-black dark:text-white", iconClassName)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  }

  const totalItems = columns * rows

  // Generate grid items if no children provided
  const gridItems =
    children ||
    Array.from({ length: totalItems }, (_, i) => {
      const isLastInRow = (i + 1) % columns === 0
      const isLastRow = i >= totalItems - columns

      return (
        <span
          key={i}
          className={cn("h-full w-full", !isLastInRow && "border-r", !isLastRow && "border-b")} />
      );
    })

  return (
    <div
      className={cn("relative grid border", height, width, className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
      role="grid"
      aria-label={ariaLabel || `Grid with ${columns} columns and ${rows} rows`}>
      {showPlusIcons && (
        <>
          <PlusIcon className="absolute -top-5 -left-5 h-10 w-10" />
          <PlusIcon className="absolute -right-5 -bottom-5 h-10 w-10" />
        </>
      )}
      {gridItems}
    </div>
  );
}

// Legacy component for backward compatibility
export function GridDemo() {
  return <Grid />;
}

export default Grid
