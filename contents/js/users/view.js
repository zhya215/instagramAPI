function userView(username){

    console.log('viewing repo: ', username)

    $.get("https://api.instagram.com/v1/users/search?q="+username, access_token,function(data) {
        
        var user = data.data[0]
        console.log(user)

        $.get("/instagram/templates/userView.jade", function(template) {

            var html = jade.render(template, {item: user})
            
            $("#details").html(html)

        })

    })


}