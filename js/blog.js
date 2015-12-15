/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("cawLbOWUk15FFQ9xj7kQOGqEs5jS7QQZ1XurDSWp", "emTwPf0PO6aTvZNubBExHUlbDn6R65Vj2UqaJMF3");
 
    var Blog = Parse.Object.extend("Blog");
	var Blogs = Parse.Collection.extend({
    	model: Blog
	});
	
	var blogs = new Blogs();
	
	var BlogsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
	});

	
	blogs.fetch({
	success: function(blogs) {
		var blogsView = new BlogsView({ collection: blogs });
    	blogsView.render();
    	$('.main-container').html(blogsView.el);
	},
	error: function(blogs, error) {
		console.log(error);
	}
	});
	
});
 