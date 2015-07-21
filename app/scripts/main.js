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

function renderData(id, json) {
    if (typeof json === 'string') { json = JSON.parse(json); }
    var el = $(id);
    switch(json.type) {
        default:
            el.jsonView(json);
            break;
    }
}
