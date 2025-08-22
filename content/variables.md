# CSS Variables Reference

This document contains all CSS custom properties (variables) used in the Codex frontend system, organized by category.

## Core Properties

### Special Properties
- `--c-percent` - Used for pie chart animations (syntax: `<number>`, initial: 0)

## Typography

### Font Families
- `--c-heading-font-family` - Font family for headings (default: sans-serif)
- `--c-body-font-family` - Font family for body text (default: sans-serif)

### Font Sizes
- `--c-text-display` - Display text size (default: 3.75rem / 60px mobile)
- `--c-text-3xl` - Extra large text (default: 2.25rem / 36px mobile)
- `--c-text-2xl` - Double extra large text (default: 2rem / 32px mobile)
- `--c-text-xxl` - Extra extra large text (default: 1.75rem / 28px mobile)
- `--c-text-xl` - Extra large text (default: 1.5rem / 24px mobile)
- `--c-text-lg` - Large text (default: 1.25rem / 20px)
- `--c-text-md` - Medium text (default: 1rem / 16px)
- `--c-text-sm` - Small text (default: 0.875rem / 14px)
- `--c-text-xs` - Extra small text (default: 0.75rem / 12px)
- `--c-text-icon` - Icon text size (default: 1.5rem / 24px)
- `--c-text-icon-sm` - Small icon text size (default: 1rem / 16px)
- `--c-text-icon-xs` - Extra small icon text size (default: 13px)

### Line Heights
- `--c-leading-display` - Display text line height (default: 1.2em)
- `--c-leading-3xl` - Extra large line height (default: 1.2em)
- `--c-leading-2xl` - Double extra large line height (default: 1.2em)
- `--c-leading-xxl` - Extra extra large line height (default: 1.2em)
- `--c-leading-xl` - Extra large line height (default: 1.2em)
- `--c-leading-lg` - Large line height (default: 1.2em)
- `--c-leading-md` - Medium line height (default: 1.5em)
- `--c-leading-sm` - Small line height (default: 1.2em)
- `--c-leading-xs` - Extra small line height (default: 1.66em)
- `--c-leading-icon` - Icon line height (default: 1em)
- `--c-leading-icon-sm` - Small icon line height (default: 1em)
- `--c-leading-icon-xs` - Extra small icon line height (default: 1em)

### Font Weights
- `--c-text-bold` - Bold font weight (default: 600)
- `--c-text-normal` - Normal font weight (default: 400)
- `--c-text-light` - Light font weight (default: 200)

### Font Scaling
- `--c-desktop-font-scale` - Desktop font scale multiplier (default: 1.111)

## Colors

### Text Colors
- `--c-display-color` - Display text color (default: #000000)
- `--c-title-color` - Title text color (default: #000000)
- `--c-subtitle-color` - Subtitle text color (default: #000000)
- `--c-card-text-color` - Card text color (default: #000000)
- `--c-focal-text-color` - Focal text color (default: #000000)
- `--c-helper-text-color` - Helper text color (default: #000000)
- `--c-hint-text-color` - Hint text color (default: #000000)
- `--c-label-text-color` - Label text color (default: #000000)
- `--c-input-text-color` - Input text color (default: #000000)
- `--c-input-focus-text-color` - Input focus text color
- `--c-link-color` - Link color (default: #000)
- `--c-link-hover-color` - Link hover color (default: #000)
- `--c-close-color` - Close button color (default: #000000)

### State Colors
- `--c-danger-color` - Danger/error color (default: #C72121)
- `--c-danger-text-color` - Danger text color (default: #ffffff)
- `--c-success-color` - Success color (default: #78C012)
- `--c-success-text-color` - Success text color (default: #ffffff)
- `--c-warning-color` - Warning color (default: #F59F0A)
- `--c-warning-text-color` - Warning text color (default: #ffffff)
- `--c-processing-color` - Processing color (default: #123bc0)
- `--c-processing-text-color` - Processing text color (default: #ffffff)

### Background Colors
- `--c-card-background-color` - Card background (default: #ffffff)
- `--c-card-footer-background-color` - Card footer background
- `--c-modal-background-color` - Modal overlay background (default: #00000066)
- `--c-modal-footer-background-color` - Modal footer background
- `--c-input-background-color` - Input background (default: transparent)
- `--c-input-focus-background-color` - Input focus background
- `--c-dropdown-background-color` - Dropdown background (default: #FFFFFF)
- `--c-option-hover-background-color` - Option hover background (default: #F5F5F5)
- `--c-option-selected-background-color` - Option selected background (default: #c2c2c2)
- `--c-scrollbar-background-color` - Scrollbar background (default: transparent)
- `--c-popup-background-color` - Popup background (default: #ffffff)
- `--c-tooltip-background-color` - Tooltip background (default: #ffffff)

### UI Element Colors
- `--c-scrollbar-color` - Scrollbar color (default: #cccccc)
- `--c-checkbox-color` - Checkbox color (default: #000000)
- `--c-bookmark-color` - Bookmark color
- `--c-share-color` - Share button color
- `--c-share-hover-color` - Share button hover color (default: #ffffff)
- `--c-icon-color` - Icon color

## Layout & Spacing

### Grid System
- `--c-grid-gap-y` - Grid vertical gap (default: 24px)
- `--c-grid-gap-x` - Grid horizontal gap (default: 24px)

### Card Layout
- `--c-card-border-color` - Card border color (default: #000000)
- `--c-card-border-width` - Card border width (default: 1px)
- `--c-card-border-radius` - Card border radius (default: 8px)
- `--c-card-padding-y` - Card vertical padding (default: 16px)
- `--c-card-padding-x` - Card horizontal padding (default: 16px)
- `--c-card-header-gap` - Card header gap (default: 0.5rem)
- `--c-card-content-gap` - Card content gap (default: 0.5rem)
- `--c-card-footer-gap` - Card footer gap (default: 0.5rem)
- `--c-card-footer-padding-y` - Card footer vertical padding (default: 16px)

### Modal Layout
- `--c-modal-width` - Modal width (default: 336px)
- `--c-computed-modal-height` - Computed modal height (default: 75dvh)
- `--c-x-translate` - X translation for positioning
- `--c-y-translate` - Y translation for positioning
- `--c-close-x` - Close button X position (default: 16px)
- `--c-close-y` - Close button Y position (default: 16px)

## Form Elements

### Input Styling
- `--c-input-border-color` - Input border color (default: #000000)
- `--c-input-border-width` - Input border width (default: 1px)
- `--c-input-border-radius` - Input border radius (default: 8px)
- `--c-input-padding-y` - Input vertical padding (default: 12px)
- `--c-input-padding-x` - Input horizontal padding (default: 8px)

### Button Styling
- `--c-btn-text-decoration` - Button text decoration (default: none)
- `--c-btn-padding-y` - Button vertical padding (default: 12px)
- `--c-btn-padding-x` - Button horizontal padding (default: 16px)
- `--c-btn-border-width` - Button border width (default: 1px)
- `--c-btn-border-color` - Button border color (default: transparent)
- `--c-btn-border-radius` - Button border radius (default: 8px)
- `--c-btn-font-size` - Button font size (default: 16px)
- `--c-btn-line-height` - Button line height (default: 1.5em)
- `--c-btn-background-color` - Primary button background (default: #000000)
- `--c-btn-text-color` - Primary button text color (default: #ffffff)
- `--c-btn-hover-border` - Button hover border color
- `--c-btn-hover-background-color` - Button hover background
- `--c-btn-hover-text-color` - Button hover text color

### Secondary Button Colors
- `--c-btn-2-border-color` - Secondary button border (default: #000000)
- `--c-btn-2-background-color` - Secondary button background (default: #ffffff)
- `--c-btn-2-text-color` - Secondary button text (default: #000000)

### Tertiary Button Colors
- `--c-btn-3-border-color` - Tertiary button border (default: #000000)
- `--c-btn-3-background-color` - Tertiary button background (default: #000000)
- `--c-btn-3-text-color` - Tertiary button text (default: #ffffff)

### Button Container
- `--c-btn-alignment` - Button alignment (default: start)
- `--c-btn-gap-y` - Button vertical gap (default: 8px)
- `--c-btn-gap-x` - Button horizontal gap (default: 8px)

### Form Fields
- `--c-form-field-gap` - Form field gap (default: 0.5em)

## Select & Dropdown Elements

### Select Styling
- `--c-dropdown-border-color` - Dropdown border color (default: #000000)
- `--c-dropdown-border-width` - Dropdown border width (default: 1px)
- `--c-dropdown-border-radius` - Dropdown border radius (default: 8px)

### Option Styling
- `--c-option-padding-y` - Option vertical padding (default: 8px)
- `--c-option-padding-x` - Option horizontal padding (default: 8px)

### Tag Styling
- `--c-tag-padding-y` - Tag vertical padding (default: 0.25rem)
- `--c-tag-padding-x` - Tag horizontal padding (default: 0.25rem)
- `--c-tag-border-width` - Tag border width (default: 1px)
- `--c-tag-border-color` - Tag border color (default: #000000)
- `--c-tag-border-radius` - Tag border radius (default: 8px)
- `--c-tag-font-size` - Tag font size (default: 14px)
- `--c-tag-line-height` - Tag line height (default: 1.25rem)
- `--c-tag-background-color` - Tag background (default: #000000)
- `--c-tag-text-color` - Tag text color (default: #ffffff)
- `--c-tag-gap-y` - Tag vertical gap (default: 8px)
- `--c-tag-gap-x` - Tag horizontal gap (default: 8px)

## Filter Elements

### Filter Button Styling
- `--c-filter-padding-y` - Filter vertical padding (default: 8px)
- `--c-filter-padding-x` - Filter horizontal padding (default: 12px)
- `--c-filter-border-width` - Filter border width (default: 1px)
- `--c-filter-border-color` - Filter border color (default: #000000)
- `--c-filter-border-radius` - Filter border radius (default: 8px)
- `--c-filter-font-size` - Filter font size (default: 14px)
- `--c-filter-line-height` - Filter line height (default: 1.5em)
- `--c-filter-background-color` - Filter background (default: #ffffff)
- `--c-filter-text-color` - Filter text color (default: #000000)

### Filter Active States
- `--c-filter-active-border-color` - Filter active border (default: #000000)
- `--c-filter-active-background-color` - Filter active background (default: #000000)
- `--c-filter-active-text-color` - Filter active text (default: #ffffff)

### Filter Hover States
- `--c-filter-btn-hover-border-color` - Filter hover border (default: #000000)
- `--c-filter-btn-hover-background-color` - Filter hover background (default: #f5f5f5)
- `--c-filter-btn-hover-text-color` - Filter hover text (default: #000000)

## Switch/Toggle Elements

### Switch Styling
- `--c-switch-border-color` - Switch border color (default: #000000)
- `--c-switch-background-color` - Switch background (default: #ffffff)
- `--c-switch-background-active-color` - Switch active background (default: #000000)
- `--c-switch-thumb-color` - Switch thumb color (default: #000000)
- `--c-switch-thumb-active-color` - Switch thumb active color (default: #ffffff)

## Badge & Status Elements

### Badge Styling
- `--c-badge-padding-y` - Badge vertical padding (default: 4px)
- `--c-badge-padding-x` - Badge horizontal padding (default: 8px)
- `--c-badge-border-width` - Badge border width (default: 1px)
- `--c-badge-border-color` - Badge border color (default: #000000)
- `--c-badge-border-radius` - Badge border radius (default: 8px)
- `--c-badge-font-size` - Badge font size (default: 12px)
- `--c-badge-line-height` - Badge line height (default: 1.25em)
- `--c-badge-background-color` - Badge background (default: #000000)
- `--c-badge-text-color` - Badge text color (default: #ffffff)

### Status Styling
- `--c-status-padding-y` - Status vertical padding (default: 8px)
- `--c-status-padding-x` - Status horizontal padding (default: 8px)
- `--c-status-border-width` - Status border width (default: 0px)
- `--c-status-border-color` - Status border color (default: transparent)
- `--c-status-border-radius` - Status border radius (default: 999px)
- `--c-status-font-size` - Status font size (default: 12px)
- `--c-status-line-height` - Status line height (default: 1.5em)

### Flag Styling
- `--c-flag-padding-y` - Flag vertical padding (default: 2px)
- `--c-flag-padding-x` - Flag horizontal padding (default: 4px)
- `--c-flag-border-width` - Flag border width (default: 1px)
- `--c-flag-border-color` - Flag border color (default: #000000)
- `--c-flag-border-radius` - Flag border radius (default: 4px)
- `--c-flag-font-size` - Flag font size (default: 12px)
- `--c-flag-line-height` - Flag line height (default: 1.5em)
- `--c-flag-background-color` - Flag background (default: #000000)
- `--c-flag-text-color` - Flag text color (default: #ffffff)

## Interactive Elements

### Bookmark Styling
- `--c-bookmark-size` - Bookmark size (default: 24px)
- `--c-bookmark-padding` - Bookmark padding (default: 11px)
- `--c-bookmark-background-color` - Bookmark background (default: transparent)
- `--c-bookmark-border-width` - Bookmark border width (default: 1px)
- `--c-bookmark-border-color` - Bookmark border color (default: #000000)
- `--c-bookmark-border-radius` - Bookmark border radius (default: 8px)

### Share Button Styling
- `--c-share-size` - Share button size (default: 24px)
- `--c-share-padding` - Share button padding (default: 8px)
- `--c-share-background-color` - Share button background (default: transparent)
- `--c-share-border-width` - Share button border width (default: 1px)
- `--c-share-border-color` - Share button border color (default: #000000)
- `--c-share-border-radius` - Share button border radius (default: 8px)

### Floating Button
- `--c-floating-btn-margin-y` - Floating button vertical margin (default: 40px)
- `--c-floating-btn-margin-x` - Floating button horizontal margin (default: 24px)

### Link Styling
- `--c-link-decoration` - Link text decoration (default: underline)
- `--c-link-weight` - Link font weight (default: 700)
- `--c-link-hover-decoration` - Link hover decoration (default: underline)

## Toast & Notification Elements

### Toast Styling
- `--c-toast-padding-y` - Toast vertical padding (default: 4px)
- `--c-toast-padding-x` - Toast horizontal padding (default: 8px)
- `--c-toast-border-width` - Toast border width (default: 1px)
- `--c-toast-border-color` - Toast border color (default: #000000)
- `--c-toast-border-radius` - Toast border radius (default: 8px)
- `--c-toast-font-size` - Toast font size (default: 16px)
- `--c-toast-line-height` - Toast line height (default: 1.25em)
- `--c-toast-background-color` - Toast background (default: #000000)
- `--c-toast-text-color` - Toast text color (default: #ffffff)

### Notification Styling
- `--c-notification-summary-background-color` - Notification summary background (default: #000000)
- `--c-notification-summary-text-color` - Notification summary text (default: #ffffff)
- `--c-notification-unread-background` - Unread notification background
- `--c-summary-size` - Summary indicator size (default: 0.75rem)
- `--c-summary-font-size` - Summary font size (default: 0.5rem)

## Tooltip Elements

### Tooltip Styling
- `--c-tooltip-text` - Tooltip text size (default: var(--c-text-md, 16px))
- `--c-tooltip-color` - Tooltip color
- `--c-tooltip-text-color` - Tooltip text color (default: #000000)
- `--c-tooltip-border-radius` - Tooltip border radius (default: 4px)

## Chart Elements

### Pie Chart
- `--c-pie-color` - Pie chart color (default: #000000)
- `--c-pie-bg-color` - Pie chart background (default: #F5F5F5)
- `--c-pie-text-color` - Pie chart text color (default: #000000)
- `--c-pie-text-bg-color` - Pie chart text background (default: #1F1F1F1A)

## Calendar & Time Elements

### Day Styling
- `--c-day-selected-color` - Selected day color (default: #000000)
- `--c-day-selected-text-color` - Selected day text (default: #ffffff)
- `--c-day-unavailable-color` - Unavailable day color (default: #1F1F1F33)
- `--c-day-unavailable-text-color` - Unavailable day text (default: #1F1F1F33)
- `--c-day-high-color` - High availability color (default: #00B828)
- `--c-day-high-text-color` - High availability text (default: #ffffff)
- `--c-day-medium-color` - Medium availability color (default: #FFAB1F)
- `--c-day-medium-text-color` - Medium availability text (default: #ffffff)
- `--c-day-low-color` - Low availability color (default: #EE0000)
- `--c-day-low-text-color` - Low availability text (default: #ffffff)

## Booking & Slot Elements

### Slot Styling
- `--c-slot-height` - Slot height (default: 20px)
- `--c-slot-width` - Slot width (default: 20px)
- `--c-slot-text` - Slot text size (default: 10px)
- `--c-slot-border-width` - Slot border width (default: 1px)
- `--c-slot-border-color` - Slot border color (default: #000000)
- `--c-slot-border-radius` - Slot border radius (default: 4px)
- `--c-slot-available-color` - Available slot color (default: transparent)
- `--c-slot-available-text-color` - Available slot text (default: #000000)

### Slot States
- `--c-slot-selected-border-color` - Selected slot border (default: #000000)
- `--c-slot-selected-color` - Selected slot color (default: #000000)
- `--c-slot-selected-text-color` - Selected slot text (default: #ffffff)
- `--c-slot-reserved-border-color` - Reserved slot border (default: transparent)
- `--c-slot-reserved-color` - Reserved slot color (default: #1F1F1F33)
- `--c-slot-reserved-text-color` - Reserved slot text (default: #1F1F1F33)
- `--c-slot-unavailable-border-color` - Unavailable slot border (default: #000000)
- `--c-slot-unavailable-color` - Unavailable slot color (default: transparent)
- `--c-slot-unavailable-text-color` - Unavailable slot text (default: #000000)
- `--c-slot-booked-border-color` - Booked slot border (default: #78C012)
- `--c-slot-booked-color` - Booked slot color (default: #78C012)
- `--c-slot-booked-text-color` - Booked slot text (default: #ffffff)
- `--c-slot-instructor-border-color` - Instructor slot border (default: #123bc0)
- `--c-slot-instructor-color` - Instructor slot color (default: #123bc0)
- `--c-slot-instructor-text-color` - Instructor slot text (default: #ffffff)

## Cart & E-commerce Elements

### Cart Styling
- `--c-cart-border-color` - Cart border color (default: #000000)
- `--c-cart-border-width` - Cart border width (default: 1px)
- `--c-cart-border-radius` - Cart border radius (default: 8px)
- `--c-cart-background-color` - Cart background (default: #ffffff)
- `--c-cart-text-color` - Cart text color (default: #000000)

### Checkout Elements
- `--c-checkout-card-background-color` - Checkout card background (default: #F4F4F5)

### Quantity Selector
- `--c-qty-selector-padding-y` - Quantity selector vertical padding (default: 4px)
- `--c-qty-selector-padding-x` - Quantity selector horizontal padding (default: 8px)
- `--c-qty-selector-border-radius` - Quantity selector border radius (default: 4px)

## Special Elements

### Gift Card Styling
- `--c-giftcard-border-radius` - Gift card border radius (default: 8px)
- `--c-giftcard-background-color` - Gift card background (default: #F0EEEE)
- `--c-giftcard-padding-y` - Gift card vertical padding (default: 16px)
- `--c-giftcard-padding-x` - Gift card horizontal padding (default: 16px)

### Payment Card Styling
- `--c-payment-card-border-radius` - Payment card border radius (default: 16px)
- `--c-payment-card-text-color` - Payment card text (default: #ffffff)
- `--c-payment-card-background-color` - Payment card background (default: #000000)
- `--c-payment-card-padding-y` - Payment card vertical padding (default: 24px)
- `--c-payment-card-padding-x` - Payment card horizontal padding (default: 24px)

### Signature Elements
- `--c-signature-font-family` - Signature font family (default: 'Brush Script MT', cursive)

### Image Elements
- `--c-image-border-radius` - Image border radius (default: 8px)

## Navigation & Tab Elements

### Tab System
- `--c-tab-system-background-color` - Tab system background (default: #FFFFFF)
- `--c-tab-system-color` - Tab system color (default: #000000)
- `--c-tab-nav-width` - Tab navigation width (default: 240px)
- `--c-tab-nav-background-color` - Tab nav background (default: #F5F5F5)
- `--c-tab-nav-padding-y` - Tab nav vertical padding (default: 16px)
- `--c-tab-nav-padding-x` - Tab nav horizontal padding (default: 16px)
- `--c-tab-content-padding-y` - Tab content vertical padding (default: 24px)
- `--c-tab-content-padding-x` - Tab content horizontal padding (default: 16px)
- `--c-tab-nav-container-sticky-top` - Tab nav sticky position (default: 6.25rem)

### Tab Button States
- `--c-tab-button-background` - Tab button background (default: linear-gradient(90deg, #000 0%, #000 100%))
- `--c-tab-button-background-active` - Active tab button background (default: linear-gradient(90deg, #FF512F 0%, #DD2476 100%))

### Calendar Navigation
- `--c-nav-count` - Navigation item count (default: 7)
- `--c-nav-gap-x` - Navigation horizontal gap (default: 8px)
- `--c-card-selected-background-color` - Selected card background (default: #000000)
- `--c-card-selected-text-color` - Selected card text (default: #ffffff)

## Pagination Elements

### Pagination Styling
- `--c-paginate-padding` - Pagination padding (default: 4px)
- `--c-paginate-background` - Pagination background (default: transparent)
- `--c-paginate-border-radius` - Pagination border radius (default: 4px)
- `--c-paginate-border-color` - Pagination border color (default: #1F1F1F)
- `--c-paginate-text-color` - Pagination text color (default: #1F1F1F)
- `--c-paginate-background-active` - Active pagination background (default: #1F1F1F)
- `--c-paginate-text-color-active` - Active pagination text (default: #ffffff)

## Skeleton Loading

### Skeleton Styling
- `--c-skeleton-card-background` - Skeleton card background (default: #E5E5E5)
- `--c-skeleton-loader-background` - Skeleton loader background (default: linear-gradient...)

## Miscellaneous

### Border & Accent Elements
- `--c-accent-border-width` - Accent border width (default: 1px)
- `--c-accent-border-color` - Accent border color (default: #1F1F1F33)
- `--c-accent-border-padding-bottom` - Accent border padding bottom (default: 1rem)
- `--c-border-color` - General border color (default: rgba(0, 0, 0, 0.2))

### List Elements
- `--list-icon-size` - List icon size (default: 1.5rem)
- `--c-paragraph-gap` - Paragraph gap (default: 1rem)

### Box Shadow
- `--c-popup-box-shadow` - Popup box shadow (default: 0 0 10px 0 rgba(0, 0, 0, 0.1))

### Body Layout
- `--c-body-max-width` - Body maximum width (default: 1440px)

### Helper Text Styling
- `--c-helper-text-style` - Helper text style (default: italic)

### Special Color Variables
- `--c-low-color` - Low priority color (default: #78C012)
- `--c-low-text-color` - Low priority text (default: #ffffff)

---

*Note: All variables include fallback values in parentheses. These can be overridden by defining them in your CSS.* 