$( document ).ready(function() {
        console.log( 'ready!' );

    $(function(){
        $('.nav_button').on('click',function(evt){
            if($(evt.target).is("#home_button") && $("#home.section").is( ":hidden" )){
                console.log( 'home was hidden' );
                $('#home').fadeIn("slow");
                $('#profile').hide();
                $('#projects').hide();
            }

            else if($(evt.target).is("#profile_button") && $("#profile.section").is( ":hidden" )){
                console.log( 'profile was hidden' );
                $('#home').hide();
                $('#profile').fadeIn("slow");
                $('#projects').hide();
            }

            else if($(evt.target).is("#projects_button") && $("#projects.section").is( ":hidden" )){
                console.log( 'projects was hidden' );
                $('#home').hide();
                $('#profile').hide();
                $('#projects').fadeIn("slow");
            }
            
            else{}
        })
    })
});