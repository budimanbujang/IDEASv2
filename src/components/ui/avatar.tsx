import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@/lib/utils'

const sizeStyles = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
} as const

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: keyof typeof sizeStyles
  online?: boolean
}

const Avatar = React.forwardRef<React.ComponentRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size = 'md', online, children, ...props }, ref) => (
    <div className="relative inline-flex">
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          'relative flex shrink-0 overflow-hidden rounded-full',
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </AvatarPrimitive.Root>
      {online !== undefined && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block rounded-full border-2 border-surface',
            size === 'sm' ? 'h-2.5 w-2.5' : size === 'lg' ? 'h-4 w-4' : 'h-3 w-3',
            online ? 'bg-green-400' : 'bg-gray-500'
          )}
        />
      )}
    </div>
  )
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-surface-elevated text-text-secondary font-medium',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
export type { AvatarProps }
