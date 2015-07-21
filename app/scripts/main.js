// jshint devel:true

$('body').scrollspy({
    target: '.validation-trace .sidebar',
    offset: 40
});

$(".validation-trace .sidebar a").click(function() {
  var links = $(this).parents('.validation-trace .sidebar li').children('a');
  $(links.get().reverse()).each(function() {
     $($(this).attr("data-target-id")).collapse('show');
  });
});

function renderCustomer(id, el, json) {
}

function renderPolicyResult(id, el, json) {
    var errormsg = json.value.CustomErrorMessage
        ? ' Error Message: <span class="errormsg">'+json.value.CustomErrorMessage+'</span>' : '';
    $('<div>ResponseCode: <span class="errorcode">'+json.value.ErrorCode+'</span>'+errormsg+'</div>')
        .appendTo(el);
}

function renderAsJson(id, el, json, wrap_in_span) {
    var jsonEl = el;
    if(wrap_in_span)
    {
        $('<a/>', {
            'text': 'Full data as JSON',
            'class': 'jsondata collapsed',
            'data-toggle': 'collapse',
            'data-target': '#' + id + '-jsondata',
            'href': '#'+ id + '-jsondata'
        }).appendTo(el);
        jsonEl = $('<div/>', {
            'class': 'collapse',
            'id': id + '-jsondata'
        }).appendTo(el);
    }
    jsonEl.jsonView(json.value || json);
    //jsonEl.jsonView(json);
}

function renderData(id, json) {
    if (typeof json === 'string') { json = JSON.parse(json); }
    var el = $('#' + id + '-data');
    switch(json.type) {
//        case 'Paas.BusinessLogic.ValidationFlow.Contracts.WalletPaymentRequest':
//            el.append('<div class="paymentrequest">wallet request</div>');
//            break;
        case 'Paas.BusinessLogic.ValidationFlow.Entities.Customer':
            renderCustomer(id, el, json);
            renderAsJson(id, el, json, false);
            break;
        case 'Betsson.FlowEngine.PaasValidation.ValidationPolicyResultData':
            renderPolicyResult(id, el, json);
            renderAsJson(id, el, json, true);
            break;
        default:
            renderAsJson(id, el, json, false);
            break;
    }
}
