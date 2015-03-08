// Q: How is this js file loaded?
function mediasList(){

    console.log('listing repos')    
    
    $.get("https://api.instagram.com/v1/media/popular", access_token, function(data) {

        // Q: What is the parameter 'github'? Where was it defined? What's the purpose? 

        // Q: Why is JSON.parse no longer necessary?
        var medias = data.data
        console.log(medias)
        
        // Q. Why are these templates files stored in a separate folder inside contents/?
        $.get("/instagram/templates/mediasList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: medias})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            mediaView(medias[0].filter, medias[0].link)

        })

    })

}