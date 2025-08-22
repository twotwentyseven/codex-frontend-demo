window.codex.stripe = {
    // Locale configuration
    // locale: 'en',  // Default locale for Stripe elements

    // Theme configuration
    theme: 'night', // 'stripe', 'flat', 'night', etc.

    // Font configuration
    // fontUrl: 'https://fonts.googleapis.com/css2?family=Darumadrop+One&display=swap',
    // fontFamily: "'Darumadrop One', serif",

    // // Colors configuration
    // colors: {
    //     primary: '#0570de',           // Primary buttons, selected states
    //     background: '#ffffff',         // Background of form elements
    //     text: '#32325d',              // Main text color
    //     error: '#df1b41',             // Error states and messages
    //     textSecondary: '#6b7c93',     // Secondary text, labels
    //     backgroundSecondary: '#f8f9fa',// Secondary backgrounds
    //     border: '#e6e6e6'             // Border colors
    // },

    // // Additional Stripe variables
    // variables: {
    //     spacingUnit: '4px',
    //     borderRadius: '8px',
    //     fontWeightNormal: '400',
    //     fontWeightMedium: '500',
    //     fontWeightBold: '600',
    //     // You can add any Stripe-supported variables here
    //     // See: https://stripe.com/docs/elements/appearance-api#variables
    // },

    // // Custom rules for specific elements
    // rules: {
    //     '.Input': {
    //         padding: '12px 16px',
    //         transition: 'border 0.2s ease, box-shadow 0.2s ease'
    //     },
    //     '.Input:focus': {
    //         boxShadow: '0 0 0 1px #0570de, 0 1px 1px 0 rgba(0,0,0,0.07), 0 0 0 4px rgba(5,112,222,0.2)'
    //     },
    //     '.Label': {
    //         marginBottom: '8px',
    //         fontSize: '14px'
    //     },
    //     '.Error': {
    //         marginTop: '8px',
    //         fontSize: '14px'
    //     },
    //     '.Tab': {
    //         padding: '10px 12px 8px 12px'
    //     },
    //     '.Block': {
    //         padding: '12px'
    //     }
    // }
}

Codex().set(
    'auto_configure', {
        modals: {
            'codex-cart': {
                modalProps: { 
                    'v-slot': '{open, close}',
                    'x-position': 'right',
                    'y-position': 'bottom', 
                },
                props: {
                    'v-on:updated': 'open',
                    'v-on:open': 'open',
                    'v-on:close': 'close',
                }
            },
            'codex-login': {
                modalProps: { 
                    'v-slot': '{close}',
                    ':delay-close': 3000,
                },
                props: {
                    'v-on:close': 'close'
                }
            },
            'codex-register': {
                modalProps: { 
                    'v-slot': '{close}',
                    ':delay-close': 3000,
                },
                props: {
                    'v-on:close': 'close'
                }
            },
            'codex-password-recover': {
                modalProps: { 
                    'v-slot': '{close}',
                    ':delay-close': 3000,
                },
                props: {
                    'v-on:close': 'close'
                }
            },
            'codex-password-reset': {
                modalProps: { 
                    'v-slot': '{close}',
                    ':delay-close': 3000,
                },
                props: {
                    'v-on:close': 'close'
                }
            },
            'codex-verify-sms': {
                modalProps: { 
                    'v-slot': '{close}',
                    ':delay-close': 3000,
                    ':show-close-button': false
                },
                props: {
                    'v-on:close': 'close'
                }
            },
            'codex-waitlist-confirmation': {
                modalProps: { 
                    'v-slot': '{close, open}',
                    ':delay-close': 3000
                },
                props: {
                    'v-on:close': 'close',
                    'v-on:open': 'open'
                }
            }
            
        }
    }
)