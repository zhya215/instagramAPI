function mediaView(filter, url){




    $.get("/instagram/templates/mediaView.jade", function(template) {

        var html = jade.render(template, {filter: filter, url: url})
        
        $("#details").html(html)

    })

    

}