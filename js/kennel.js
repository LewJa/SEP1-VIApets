$(document).ready(function() {
    $.get("xml/kennel.xml", function(xml) {
        var txt = "";
        $(xml).find("kennel").each(function() {
            var occupancy = $(this).find("occupancy").text();
            for (var i = 0; i < occupancy; i++) {
                txt += "<button class=\"occupied\"></button>"
            }
            for (var j = 0; j < 10 - occupancy; j++) {
                txt += "<button class=\"available\"></button>"
            }
        });
        $(".kennel-grid").html(txt);
    });
});