'use client';

import * as React from 'react';
import { Sheet, SheetViewProps, useClientMediaQuery } from '@silk-hq/components';
import { cn } from '@/lib/utils';

// ================================================================================================
// Root
// ================================================================================================

type DrawerRootProps = Omit<React.ComponentPropsWithoutRef<typeof Sheet.Root>, 'license'> & {
  license?: React.ComponentPropsWithoutRef<typeof Sheet.Root>['license'];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const DrawerRoot = React.forwardRef<React.ComponentRef<typeof Sheet.Root>, DrawerRootProps>(
  ({ children, open, onOpenChange, ...restProps }, ref) => {
    return (
      <Sheet.Root
        license='non-commercial'
        presented={open}
        onPresentedChange={onOpenChange}
        {...restProps}
        ref={ref}
      >
        {children}
      </Sheet.Root>
    );
  }
);
DrawerRoot.displayName = 'Drawer.Root';

// ================================================================================================
// View
// ================================================================================================

const DrawerView = React.forwardRef<
  React.ComponentRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ children, className, ...restProps }, ref) => {
  const largeViewport = useClientMediaQuery('(min-width: 640px)');
  const contentPlacement = largeViewport ? 'center' : 'bottom';
  const tracks: SheetViewProps['tracks'] = largeViewport ? ['top', 'bottom'] : 'bottom';

  return (
    <Sheet.View
      className={cn('z-50', largeViewport ? 'h-screen' : 'h-[calc(100vh+60px)]', className)}
      contentPlacement={contentPlacement}
      tracks={tracks}
      nativeEdgeSwipePrevention={true}
      {...restProps}
      ref={ref}
    >
      {children}
    </Sheet.View>
  );
});
DrawerView.displayName = 'Drawer.View';

// ================================================================================================
// Backdrop
// ================================================================================================

const DrawerBackdrop = React.forwardRef<
  React.ComponentRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Backdrop
      className={cn('fixed inset-0 z-50 bg-black/80', className)}
      travelAnimation={{
        opacity: ({ progress }) => Math.min(progress * 0.8, 0.8),
      }}
      themeColorDimming='auto'
      {...restProps}
      ref={ref}
    />
  );
});
DrawerBackdrop.displayName = 'Drawer.Backdrop';

// ================================================================================================
// Content
// ================================================================================================

interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof Sheet.Content> {
  showHandle?: boolean;
}

const DrawerContent = React.forwardRef<React.ComponentRef<typeof Sheet.Content>, DrawerContentProps>(
  ({ children, className, showHandle = true, ...restProps }, ref) => {
    return (
      <Sheet.Content
        className={cn(
          'box-border h-auto min-h-[100px] max-w-[650px] bg-transparent',
          'px-1.5 pb-[max(env(safe-area-inset-bottom,0px),0.375rem)] pt-1.5',
          className
        )}
        {...restProps}
        ref={ref}
      >
        <div
          className={cn('bg-background relative flex h-full flex-col rounded-3xl shadow-lg', 'ring-border/50 ring-1')}
        >
          {showHandle && (
            <div className='flex justify-center pt-3 pb-2'>
              <Sheet.Handle
                className='bg-muted-foreground/30 h-1.5 w-12 cursor-pointer rounded-full border-0'
                action='dismiss'
              />
            </div>
          )}
          <div className='flex-1 overflow-auto px-6 pb-6'>{children}</div>
        </div>
      </Sheet.Content>
    );
  }
);
DrawerContent.displayName = 'Drawer.Content';

// ================================================================================================
// Handle (standalone)
// ================================================================================================

const DrawerHandle = React.forwardRef<
  React.ComponentRef<typeof Sheet.Handle>,
  React.ComponentPropsWithoutRef<typeof Sheet.Handle>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Handle
      className={cn('bg-muted-foreground/30 h-1.5 w-12 cursor-pointer rounded-full border-0', className)}
      action='dismiss'
      {...restProps}
      ref={ref}
    />
  );
});
DrawerHandle.displayName = 'Drawer.Handle';

// ================================================================================================
// Header
// ================================================================================================

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('grid gap-1.5 pb-4 text-center sm:text-left', className)}
    {...props}
  />
);
DrawerHeader.displayName = 'Drawer.Header';

// ================================================================================================
// Footer
// ================================================================================================

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-auto flex flex-col gap-2 pt-4', className)}
    {...props}
  />
);
DrawerFooter.displayName = 'Drawer.Footer';

// ================================================================================================
// Title
// ================================================================================================

const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof Sheet.Title>,
  React.ComponentPropsWithoutRef<typeof Sheet.Title>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Title
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...restProps}
      ref={ref}
    />
  );
});
DrawerTitle.displayName = 'Drawer.Title';

// ================================================================================================
// Description
// ================================================================================================

const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof Sheet.Description>,
  React.ComponentPropsWithoutRef<typeof Sheet.Description>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Description
      className={cn('text-muted-foreground text-sm', className)}
      {...restProps}
      ref={ref}
    />
  );
});
DrawerDescription.displayName = 'Drawer.Description';

// ================================================================================================
// Unchanged Components
// ================================================================================================

const DrawerPortal = Sheet.Portal;
const DrawerTrigger = Sheet.Trigger;
const DrawerOutlet = Sheet.Outlet;
const DrawerClose = Sheet.Trigger;

// ================================================================================================
// Export
// ================================================================================================

export const Drawer = {
  Root: DrawerRoot,
  Portal: DrawerPortal,
  View: DrawerView,
  Backdrop: DrawerBackdrop,
  Content: DrawerContent,
  Trigger: DrawerTrigger,
  Handle: DrawerHandle,
  Header: DrawerHeader,
  Footer: DrawerFooter,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Outlet: DrawerOutlet,
  Close: DrawerClose,
};

export {
  DrawerRoot,
  DrawerPortal,
  DrawerView,
  DrawerBackdrop,
  DrawerContent,
  DrawerTrigger,
  DrawerHandle,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerOutlet,
  DrawerClose,
};
