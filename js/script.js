
        // filter for animals
        $("[data-filter='All']").on('click', function(e){
            $("[data-box='Dogs']").show();
            $("[data-box='Fish']").show();
            $("[data-box='Birds']").show();
            $("[data-box='Rodents']").show();
            $("[data-box='Cats']").show();
        });
    
        $("[data-filter='Cats']").on('click', function(e){
            $("[data-box='Dogs']").hide();
            $("[data-box='Fish']").hide();
            $("[data-box='Birds']").hide();
            $("[data-box='Rodents']").hide(); 
            $("[data-box='Cats']").show();
        });
    
        $("[data-filter='Dogs']").on('click', function(e){
            $("[data-box='Cats']").hide();
            $("[data-box='Fish']").hide();
            $("[data-box='Birds']").hide();
            $("[data-box='Rodents']").hide();
            $("[data-box='Dogs']").show();
        });
        $("[data-filter='Fish']").on('click', function(e){
            $("[data-box='Cats']").hide();
            $("[data-box='Dogs']").hide();
            $("[data-box='Birds']").hide();
            $("[data-box='Rodents']").hide();
            $("[data-box='Fish']").show();
        });
        $("[data-filter='Birds']").on('click', function(e){
            $("[data-box='Cats']").hide();
            $("[data-box='Fish']").hide();
            $("[data-box='Dogs']").hide();
            $("[data-box='Rodents']").hide();
            $("[data-box='Birds']").show();
        });
        $("[data-filter='Rodents']").on('click', function(e){
            $("[data-box='Cats']").hide();
            $("[data-box='Fish']").hide();
            $("[data-box='Birds']").hide();
            $("[data-box='Dogs']").hide();
            $("[data-box='Rodents']").show();
        });
         
        // show more info button
        $(".more-info").hide();
        $(".btn1").on('click', function(e){
            $(this).siblings(".more-info").toggle();
            $(this).text("Less Info");

            // change button text
        if ($(this).text() == "Less Info" && $(this).siblings(".more-info").is(":visible")) {
                $(this).text("Less Info");}
            else {
                $(this).text("More Info");
            }
            
        });

    

