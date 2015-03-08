// Q: How is this js file loaded?
function usersList(){

    console.log('listing repos')    
    
    $.get("https://api.instagram.com/v1/users/search?q=zhili", access_token, function(data) {

        // Q: What is the parameter 'github'? Where was it defined? What's the purpose? 

        // Q: Why is JSON.parse no longer necessary?
        var users = data.data
        console.log(users)
        
        // Q. Why are these templates files stored in a separate folder inside contents/?
        $.get("/instagram/templates/usersList.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: users})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            userView(users[0].username)

        })

    })

}