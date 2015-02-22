function myRepos(){

    // display my repos in #list
    // e.g., https://api.github.com/users/doubleshow/repos

    $.get("https://api.github.com/users/zhya215/repos", github, function(data) {
    	var myRepos = data

    	$.get("/git-jquery/templates/myRepoList.jade", function(template){
    		// render the template
            var html = jade.render(template, {items: myRepos})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first repo to view
            repoView(repos[0].full_name)
    	})
    })
}