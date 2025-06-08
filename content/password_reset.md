# Password Reset

This component requires an reset token, this is generated and emailed to the customer through the [password recover component](password-recover.html).

You should then recieve an email including your email address, a unique token and the password-reset=true param to open the popup. copy starting from the ? from the link in recovery email to test this (you may need to right click the link to copy this depending on the email client used).

It should look similar to:

```
www.[website-domain].com?password-reset=true&email=[user.email]%[emailclient].com&token=a06d0d1c5438d5c17317efd075b2b963a81e20b4eb077d2f73afe1aaa557290a
```

