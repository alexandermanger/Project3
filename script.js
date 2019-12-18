jQuery(document).ready(function(){
    $('#movies').html('<img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">');
    
   
    axios.get('http://csc225.mockable.io/movies')
        .then(function(response){
            console.log(response.data);
            var moviesHTML = response.data.map(function(movie){
            
            return '<p class="movie" data-movie="'+movie.id+'">' + 
                movie.title + '</p>' ;
            });
           
            $('#movies').html(moviesHTML);


        });

        $('body').on('click', '.movie', function(){
            var id = $(this).data('movie');
            var url = 'http://csc225.mockable.io/movies/' + id;
            
            axios.get(url).then(function(response){
                var movie = response.data;
                var movieHTML = '<div class= "card"><p>' + movie.title + '</p>';
                movieHTML += '<p>' + movie.director + '</p>';
                movieHTML += '<p>' + movie.release + '</p>';
                //movieHTML += '<a href="' + movie.poster + '">[POSTER]</a>';
                movieHTML += '<img src="'+ movie.poster +  '"> </img></div>';
                $('#current-movie').html(movieHTML);
                
            })
           $('#current-movie').html('<img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif">');

        });
        
});

