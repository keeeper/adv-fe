var template = Handlebars.compile( $('#template').html() );
$('.posts-list').append( template(data) );