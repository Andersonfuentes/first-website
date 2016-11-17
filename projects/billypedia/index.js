/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('div').css('color', 'blown');
        $('#section-quotes').css('background-color', '#162747').css('border-radius', '4px');
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
        $('.quote').css('color', 'white').css('font-style', 'italic');
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        
         $('#section-disco').css('background-color', '#0cf943').css('border-radius', '4px');
        $('.heading-disco').css('color', 'white').css('padding-left', '10px');
        $('.disco').css('color', 'white').css('font-style', 'italic');
        $('#disco').css('padding-right', '10px').css('padding-left', '10px');
        $('#disco:last-child').css('padding-bottom', '4px');
        
         $('#section-bio').css('background-color', '#f9200c').css('border-radius', '4px');
        $('.heading-bio').css('color', 'white').css('padding-left', '10px');
        $('.bio').css('color', 'white').css('font-style', 'italic');
        $('bio').css('padding-right', '10px').css('padding-left', '10px');
        $('#bio:last-child').css('padding-bottom', '4px');
        
         $('#section-praise').css('background-color', '#0cf1f9').css('border-radius', '4px');
        $('.heading-praise').css('color', 'white').css('padding-left', '10px');
        $('.praise').css('color', 'white').css('font-style', 'italic');
        $('#praise').css('padding-right', '10px').css('padding-left', '10px');
        $('#praise:last-child').css('padding-bottom', '4px');
        

        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


