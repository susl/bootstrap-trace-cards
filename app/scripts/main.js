// jshint devel:true

$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});

$('#msg-test-data').jsonView({
  "$id": "1",
  "AccountIdentifier": "+79260366832",
  "DestinationCurrencyCode": null,
  "PaymentRequestId": 79604,
  "PaymentReference": "e9776e4b-ce95-4515-995f-f48da69d61aa",
  "SiteName": "triobet.com",
  "PaymentMethod": {
    "$id": "2",
    "Id": 118,
    "Name": "QIWI",
    "NoOfAccountLimit": 1,
    "IsWalletAccountNamedInternally": false
  },
  "MethodAction": 1,
  "IsDeposit": true,
  "IsWithdrawal": false,
  "CustomerInformation": {
    "$id": "3",
    "UserGuid": "320860be-bff0-4385-b5b7-7b251b033878",
    "CustomerReference": "320860be-bff0-4385-b5b7-7b251b033878",
    "LoginName": "yule7@ciklum.com",
    "AdditionalInfo": null,
    "FirstName": "yu",
    "LastName": "le",
    "BirthDate": "1982-04-16T00:00:00",
    "Address": "sdfgsdg",
    "ZipCode": "345234",
    "City": "xfgsd",
    "CountryCode": "UA",
    "LanguageCode": "en",
    "PhoneNumber": "+380 939086125",
    "Email": "yule7@ciklum.com",
    "AccountCurrency": "EUR",
    "DepositLimits": [],
    "DepositAllowed": true,
    "WithdrawalAllowed": true,
    "Created": "2015-06-18T16:01:14.7835086Z",
    "CustomerSegments": [],
    "VipType": "Unknown"
  },
  "LoginInformation": {
    "$id": "4",
    "IpAddress": "192.168.205.28",
    "IsMobile": false
  },
  "PaymentBill": {
    "$id": "5",
    "Amount": 1,
    "Fee": 0,
    "Currency": "RUB"
  },
  "BaseBill": {
    "$id": "6",
    "Amount": 0.01,
    "Fee": 0,
    "Currency": "EUR"
  },
  "UserBill": {
    "$id": "7",
    "Amount": 0.01,
    "Fee": 0,
    "Currency": "EUR"
  },
  "FeeRequestedFromWeb": null
})
