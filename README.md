# MessageBird SMS GitHub Action
Send an SMS from GitHub Actions using MessageBird

## Example usage
Set up your credentials as secrets in your repository settings using MESSAGEBIRD_API_KEY

Add the following to your workflow

```yml
- name: 'Send SMS'
  uses: nikitasavinov/messagebird-sms-action@v1
  with:
    originator: '+3160000000'
    recipients: '+3160000000,+3161111111'
    body: 'TestMessage'
  env:
    MESSAGEBIRD_API_KEY: ${{ secrets.MESSAGEBIRD_API_KEY }}
```

Please refer to the [official documentation](https://developers.messagebird.com/api/sms-messaging/#send-outbound-sms) for more information about `originator, recipients` and `body`