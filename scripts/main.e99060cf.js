function renderData(a,b){"string"==typeof b&&(b=JSON.parse(b));var c=$(a);switch(b.type){default:c.jsonView(b)}}$("body").scrollspy({target:".validation-trace .sidebar",offset:40}),$(".validation-trace .sidebar a").click(function(){var a=$(this).parents(".validation-trace .sidebar li").children("a");$(a.get().reverse()).each(function(){$($(this).attr("data-target-id")).collapse("show")})}),renderData("#msg-test-data",{$id:"1",AccountIdentifier:"+79260366832",DestinationCurrencyCode:null,PaymentRequestId:79604,PaymentReference:"e9776e4b-ce95-4515-995f-f48da69d61aa",SiteName:"triobet.com",PaymentMethod:{$id:"2",Id:118,Name:"QIWI",NoOfAccountLimit:1,IsWalletAccountNamedInternally:!1},MethodAction:1,IsDeposit:!0,IsWithdrawal:!1,CustomerInformation:{$id:"3",UserGuid:"320860be-bff0-4385-b5b7-7b251b033878",CustomerReference:"320860be-bff0-4385-b5b7-7b251b033878",LoginName:"yule7@ciklum.com",AdditionalInfo:null,FirstName:"yu",LastName:"le",BirthDate:"1982-04-16T00:00:00",Address:"sdfgsdg",ZipCode:"345234",City:"xfgsd",CountryCode:"UA",LanguageCode:"en",PhoneNumber:"+380 939086125",Email:"yule7@ciklum.com",AccountCurrency:"EUR",DepositLimits:[],DepositAllowed:!0,WithdrawalAllowed:!0,Created:"2015-06-18T16:01:14.7835086Z",CustomerSegments:[],VipType:"Unknown"},LoginInformation:{$id:"4",IpAddress:"192.168.205.28",IsMobile:!1},PaymentBill:{$id:"5",Amount:1,Fee:0,Currency:"RUB"},BaseBill:{$id:"6",Amount:.01,Fee:0,Currency:"EUR"},UserBill:{$id:"7",Amount:.01,Fee:0,Currency:"EUR"},FeeRequestedFromWeb:null}),renderData("#customer-data",{$id:"1",Id:7635,CustomerReference:"320860be-bff0-4385-b5b7-7b251b033878",LoginName:"yule7@ciklum.com"});