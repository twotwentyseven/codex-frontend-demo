// Codex().store('scriptUrl', 'https://codex-frontend.test/dist/main.js')

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