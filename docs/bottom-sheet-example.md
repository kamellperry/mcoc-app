<!-- DetachedSheet.css -->
```css
.DetachedSheet-view {
  /* SELF-LAYOUT */
  z-index: 1;
  /* Adding 60px to make it fully visible below iOS Safari's bottom UI */
  height: calc(var(--silk-100-lvh-dvh-pct) + 60px);
}
.DetachedSheet-view.contentPlacement-center {
  height: 100vh;
}

.DetachedSheet-content {
  /* SELF-LAYOUT */
  box-sizing: border-box;
  max-width: 650px;
  height: auto;
  min-height: 100px;

  /* APPEARANCE */
  background-color: transparent;

  /* INNER-LAYOUT */
  padding-inline: 0.375rem;
  padding-block: max(env(safe-area-inset-bottom, 0px), 0.375rem);
}

.DetachedSheet-innerContent {
  /* SELF-LAYOUT */
  height: 100%;

  /* APPEARANCE */
  border-radius: 36px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.DetachedSheet-handle {
  /* SELF-LAYOUT */
  width: 50px;
  height: 6px;

  /* APPEARANCE */
  border: 0;
  border-radius: 9999px;
  background-color: rgb(209, 213, 219);

  /* INTERACTIVITY */
  cursor: pointer;
}
```

<!-- DetachedSheet.tsx -->
```tsx
"use client";
import React from "react";
import { Sheet, SheetViewProps, useClientMediaQuery } from "@silk-hq/components";
import "./DetachedSheet.css";

// ================================================================================================
// Root
// ================================================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type DetachedSheetRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const DetachedSheetRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  DetachedSheetRootProps
>(({ children, ...restProps }, ref) => {
  return (
    <Sheet.Root license="commercial" {...restProps} ref={ref}>
      {children}
    </Sheet.Root>
  );
});
DetachedSheetRoot.displayName = "DetachedSheet.Root";

// ================================================================================================
// View
// ================================================================================================

const DetachedSheetView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ children, className, ...restProps }, ref) => {
  const largeViewport = useClientMediaQuery("(min-width: 650px)");
  const contentPlacement = largeViewport ? "center" : "bottom";
  const tracks: SheetViewProps["tracks"] = largeViewport ? ["top", "bottom"] : "bottom";

  return (
    <Sheet.View
      className={`DetachedSheet-view contentPlacement-${contentPlacement} ${className ?? ""}`}
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
DetachedSheetView.displayName = "DetachedSheet.View";

// ================================================================================================
// Backdrop
// ================================================================================================

const DetachedSheetBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Backdrop
      className={`DetachedSheet-backdrop ${className ?? ""}`.trim()}
      travelAnimation={{
        opacity: ({ progress }) => Math.min(progress * 0.2, 0.2),
      }}
      themeColorDimming="auto"
      {...restProps}
      ref={ref}
    />
  );
});
DetachedSheetBackdrop.displayName = "DetachedSheet.Backdrop";

// ================================================================================================
// Content
// ================================================================================================

const DetachedSheetContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ children, className, ...restProps }, ref) => {
  return (
    <Sheet.Content
      className={`DetachedSheet-content ${className ?? ""}`.trim()}
      {...restProps}
      ref={ref}
    >
      <div className="DetachedSheet-innerContent">{children}</div>
    </Sheet.Content>
  );
});
DetachedSheetContent.displayName = "DetachedSheet.Content";

// ================================================================================================
// Handle
// ================================================================================================

const DetachedSheetHandle = React.forwardRef<
  React.ElementRef<typeof Sheet.Handle>,
  React.ComponentPropsWithoutRef<typeof Sheet.Handle>
>(({ className, ...restProps }, ref) => {
  return (
    <Sheet.Handle
      className={`DetachedSheet-handle ${className ?? ""}`.trim()}
      action="dismiss"
      {...restProps}
      ref={ref}
    />
  );
});
DetachedSheetHandle.displayName = "DetachedSheet.Handle";

// ================================================================================================
// Unchanged Components
// ================================================================================================

const DetachedSheetPortal = Sheet.Portal;
const DetachedSheetTrigger = Sheet.Trigger;
const DetachedSheetOutlet = Sheet.Outlet;
const DetachedSheetTitle = Sheet.Title;
const DetachedSheetDescription = Sheet.Description;

export const DetachedSheet = {
  Root: DetachedSheetRoot,
  Portal: DetachedSheetPortal,
  View: DetachedSheetView,
  Backdrop: DetachedSheetBackdrop,
  Content: DetachedSheetContent,
  Trigger: DetachedSheetTrigger,
  Handle: DetachedSheetHandle,
  Outlet: DetachedSheetOutlet,
  Title: DetachedSheetTitle,
  Description: DetachedSheetDescription,
};
```

<!-- ExampleDetachedSheet.css -->
```css
.ExampleDetachedSheet-root {
  /* INNER-LAYOUT */
  padding: 1.5rem;
  padding-top: 0;
  display: grid;
  justify-items: center;
}
@media (min-width: 600px) {
  .ExampleDetachedSheet-root {
    /* SELF-LAYOUT */
    padding-bottom: 3rem;
  }
}

.ExampleDetachedSheet-presentTrigger {
  /* SELF-LAYOUT */
  height: 2.75rem;

  /* APPEARANCE */
  border-radius: 9999px;
  appearance: none;
  border: none;
  background-color: rgb(31, 41, 55);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  /* INTERACTIVITY */
  cursor: pointer;

  /* INNER-LAYOUT */
  padding-inline: 1.25rem;

  /* TEXT */
  text-box: trim-both cap alphabetic;
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
}

.ExampleDetachedSheet-handle {
  /* SELF-LAYOUT */
  grid-area: 1 / -1;
  justify-self: center;
  align-self: start;
  margin-top: 0.5rem;
}

.ExampleDetachedSheet-illustration {
  /* SELF-LAYOUT */
  margin-top: 3rem;
  height: 12rem;
  width: 12rem;

  /* APPEARANCE */
  border-radius: 16px;
  background-image: conic-gradient(
    from -140deg at 100% 100%,
    rgba(239, 36, 36, 1),
    rgba(250, 179, 179, 1) 120deg,
    rgba(239, 36, 36, 1)
  );
  background-origin: border-box;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
@media (min-width: 600px) {
  .ExampleDetachedSheet-illustration {
    /* SELF-LAYOUT */
    margin-top: 4rem;
    height: 14rem;
    width: 14rem;
  }
}

.ExampleDetachedSheet-information {
  /* SELF-LAYOUT */
  margin-block: 2.75rem;

  /* INNER-LAYOUT */
  display: grid;
  gap: 1rem;
  justify-items: center;
}
@media (min-width: 600px) {
  .ExampleDetachedSheet-information {
    /* SELF-LAYOUT */
    margin-block: 3rem;

    /* INNER-LAYOUT */
    gap: 1.5rem;
  }
}

.ExampleDetachedSheet-title {
  /* SELF-LAYOUT */
  margin: 0;
  justify-self: center;
  max-width: 400px;

  /* TEXT */
  text-align: center;
  text-wrap: balance;
  line-height: 1.1;
  font-size: 1.875rem;
  font-weight: 800;
  color: rgb(31, 41, 55);
}
@media (min-width: 600px) {
  .ExampleDetachedSheet-title {
    /* TEXT */
    font-size: 2.25rem;
  }
}

.ExampleDetachedSheet-description {
  /* SELF-LAYOUT */
  margin: 0;
  justify-self: center;
  max-width: 500px;

  /* TEXT */
  text-align: center;
  line-height: 1.375;
  font-size: 1.125rem;
  font-weight: 500;
  color: rgb(107, 114, 128);
}
@media (min-width: 600px) {
  .ExampleDetachedSheet-description {
    /* TEXT */
    font-size: 1.25rem;
  }
}

.ExampleDetachedSheet-validateTrigger {
  /* SELF-LAYOUT */
  justify-self: stretch;
  height: 3.5rem;

  /* APPEARANCE */
  border-radius: 9999px;
  appearance: none;
  border: none;
  background-color: rgb(31, 41, 55);

  /* INTERACTIVITY */
  cursor: pointer;

  /* INNER-LAYOUT */
  padding-inline: 2.5rem;

  /* TEXT */
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
}
@media (min-width: 600px) {
  .ExampleDetachedSheet-validateTrigger {
    /* SELF-LAYOUT */
    justify-self: center;
  }
}
```

<!-- ExampleDetachedSheet.tsx -->
```tsx
"use client";
import { DetachedSheet } from "./DetachedSheet";
import "./ExampleDetachedSheet.css";

const ExampleDetachedSheet = () => {
  return (
    <DetachedSheet.Root>
      <DetachedSheet.Trigger className="ExampleDetachedSheet-presentTrigger">
        Detached Sheet
      </DetachedSheet.Trigger>
      <DetachedSheet.Portal>
        <DetachedSheet.View>
          <DetachedSheet.Backdrop />
          <DetachedSheet.Content>
            <div className="ExampleDetachedSheet-root">
              <DetachedSheet.Handle className="ExampleDetachedSheet-handle" />
              <div className="ExampleDetachedSheet-illustration" />
              <div className="ExampleDetachedSheet-information">
                <DetachedSheet.Title className="ExampleDetachedSheet-title">
                  Your Meal is Coming
                </DetachedSheet.Title>
                <DetachedSheet.Description className="ExampleDetachedSheet-description">
                  Your food is on its way and will arrive soon! Sit back and get ready to enjoy your
                  meal.
                </DetachedSheet.Description>
              </div>
              <DetachedSheet.Trigger
                className="ExampleDetachedSheet-validateTrigger"
                action="dismiss"
              >
                Got it
              </DetachedSheet.Trigger>
            </div>
          </DetachedSheet.Content>
        </DetachedSheet.View>
      </DetachedSheet.Portal>
    </DetachedSheet.Root>
  );
};

export { ExampleDetachedSheet };
```