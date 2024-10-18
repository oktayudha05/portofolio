import { ClassValue } from 'clsx'

import { cn } from '@/lib/utils'

export default function Avatar({
  className,
  imageUrl,
}: {
  className?: ClassValue
  imageUrl: string
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={cn(
        'h-28 w-28 rounded-full border-2 border-border bg-cover bg-center shadow-light dark:border-darkBorder dark:shadow-dark md:h-48 md:w-48',
        className,
      )}
    ></div>
  )
}
