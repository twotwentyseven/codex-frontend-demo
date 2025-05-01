# CODEXFIT Component Demo

## Welcome to Codexfit

This demo showcases the comprehensive suite of Vue.js components that power the Codexfit platform. Each component is designed with modern web standards and best practices in mind, providing a seamless and interactive user experience.

### 🚀 Key Features

- **Modular Components:** Explore our library of reusable Vue.js components
- **Interactive Examples:** See components in action with live demonstrations
- **Responsive Design:** All components are mobile-first and fully responsive
- **Easy Integration:** Simple setup process with comprehensive documentation

### 📚 Component Categories

#### Authentication & User Management
- [Login/Register Modal](./modals.html#login-register)
- [Login/Logout Flow](./login.html)
- [Registration Process](./register.html)
- [Password Management](./password.html)
- [SMS Verification](./verifysms.html)

#### E-commerce & Purchasing
- [Shopping Cart](./cart.html)
- [Bundle Management](./bundles.html)
- [Plan Selection](./plans.html)
- [Gift Cards](./giftcards.html)
- [SCA Confirmation](./sca-confirmation.html)

#### Booking System
- [Timetable View](./timetable.html)
- [List View](./timetable_list.html)
- [Event Management](./event.html)
- [Waitlist System](./waitlist.html)
- [Appointment Scheduling](./appointments.html)

#### Content Delivery
- [Video Library](./videos.html)
- [Video Collections](./video-collections.html)
- [Instructor Profiles](./instructors.html)

## 🛠 Getting Started

### Basic Setup

Add the following script to your HTML file:

```html
<script src="https://[your-codexfit-domain]/autoconfigure.js"></script>
```

### Styling Configuration

Create a custom CSS variables file for your project:

```html
<link rel="stylesheet" type="text/css" href="https://[your-domain]/css-variables.css">
```

Visit our [CSS Variables Documentation](./variables.html) for the complete list of customizable properties.

### Component Initialization

All Codexfit components must be wrapped in a `data-codex` attribute:

```html
<div data-codex>
    <codex-bundles></codex-bundles>
</div>
```

## 📞 Contact Information Template

| Contact Type | Details |
|-------------|---------|
| Technical Support | `[SUPPORT_EMAIL]` |
| Sales Inquiries | `[SALES_EMAIL]` |
| Emergency Contact | `[EMERGENCY_CONTACT]` |
| Business Hours | `[BUSINESS_HOURS]` |

## 🔧 Environment Configuration Template

### API Configuration
```yaml
api_endpoint: [YOUR_API_ENDPOINT]
environment: [development/staging/production]
version: [CURRENT_VERSION]
```

### Important URLs
- Status Page: `[STATUS_PAGE_URL]`
- API Documentation: `[API_DOCS_URL]`
- Support Portal: `[SUPPORT_PORTAL_URL]`

## 📖 Documentation Resources

Complete documentation and code examples can be found in our [GitHub repository](https://github.com/twotwentyseven/codex-frontend-docs/tree/v3).

## 🎨 Theme Customization

The appearance of Codexfit components can be customized through CSS variables. Common customizations include:

```css
:root {
  --codex-primary-color: [YOUR_PRIMARY_COLOR];
  --codex-secondary-color: [YOUR_SECONDARY_COLOR];
  --codex-font-family: [YOUR_FONT_FAMILY];
  --codex-border-radius: [YOUR_BORDER_RADIUS];
}
```

For detailed theming options, visit our [Variables Documentation](./variables.html). 