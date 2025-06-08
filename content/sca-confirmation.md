# Payment Confirmtion

This component requires stripe ID, this is generated and emailed to the customer through the backend order/payment.

You should then recieve an email including your stripe ID and the cart=true param to trigger the model to open. Take everything after and including the ? from the email to test this.

It should look similar to:

```
www.[website-domain].com?cart=true&stripe_id=pi_2RXWgQUN20ARV9fZ0lDUgL67
```