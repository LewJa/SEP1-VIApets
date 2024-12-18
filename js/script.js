$(document).ready(function() {
    
    // Load and parse XML data
    $.get("xml/pets.xml", function(xml) {
        let petsByType = {
            dog: [], cat: [], bird: [], fish: [], rodent: [], various: []
        };
        
        // Parse XML and sort by type
        $(xml).find("pet").each(function() {
            const pet = {
                type: $(this).attr("type"),
                name: $(this).find("name").text(),
                age: $(this).find("age").text(),
                gender: $(this).find("gender").text() === 'f' ? 'Female' : 
                $(this).find("gender").text() === 'm' ? 'Male' : 
                $(this).find("gender").text(),
                comment: $(this).find("comment").text(),
                breed: $(this).find("breed").text(),
                price: $(this).find("price").text()
            };
            petsByType[pet.type].push(pet);
        });

        // Generate cards for each type
        Object.keys(petsByType).forEach(type => {
            // Special handling for 'fish' and 'various' which don't need pluralization
            const displayType = type === 'fish' || type === 'various' ? 
            type.charAt(0).toUpperCase() + type.slice(1) :
            type.charAt(0).toUpperCase() + type.slice(1) + 's';
            
            const container = $(`[data-box="${displayType}"]`);
            const pets = petsByType[type];
             
            pets.forEach(pet => {
            const card = createPetCard(pet);
            container.append(card);
            });
         });

        // Attach event handlers after dynamically creating cards
        attachMoreInfoHandlers();

    });

    // Card template function
    function createPetCard(pet) {
        return `
            <div class="col">
                <div class="card">
                    <img src="${getPetImage(pet)}" class="card-img-top" alt="${pet.name}">
                    <div class="card-body">
                        <h5 class="card-title">${pet.name}</h5>
                        <p class="card-text">Gender: ${pet.gender} <br> Age: ${pet.age}</p>
                        <div class="more-info" style="display: none;">
                            <p>Breed: ${pet.breed}<br>Price: ${pet.price} <br>${pet.comment}</p>
                        </div>
                        <button type="button" class="btn1">More Info</button>
                    </div>
                </div>
            </div>`;
    }

    // Helper function for pet images
    function getPetImage(pet) {
        const safeName = pet.name.toLowerCase();
        return `${pet.type}Photos/${safeName}.jpg`;
        
    }

    // Filter buttons event handlers
    $("[data-filter='All']").on('click', function(e){
        $("[data-box='Dogs']").show();
        $("[data-menu='Dogs']").show();
        $("[data-box='Fish']").show();
        $("[data-menu='Fish']").show();
        $("[data-box='Birds']").show();
        $("[data-menu='Birds']").show();
        $("[data-box='Rodents']").show();
        $("[data-menu='Rodents']").show();
        $("[data-box='Various']").show(); 
        $("[data-menu='Various']").show();
        $("[data-box='Cats']").show();
        $("[data-menu='Cats']").show();
        
    });
    $("[data-filter='Cats']").on('click', function(e){
        $("[data-box='Dogs']").hide();
        $("[data-menu='Dogs']").hide();
        $("[data-box='Fish']").hide();
        $("[data-menu='Fish']").hide();
        $("[data-box='Birds']").hide();
        $("[data-menu='Birds']").hide();
        $("[data-box='Rodents']").hide();
        $("[data-menu='Rodents']").hide();
        $("[data-box='Various']").hide(); 
        $("[data-menu='Various']").hide();
        $("[data-box='Cats']").show();
        $("[data-menu='Cats']").show();
    
    });
    $("[data-filter='Dogs']").on('click', function(e){
        $("[data-box='Cats']").hide();
        $("[data-menu='Cats']").hide();
        $("[data-box='Fish']").hide();
        $("[data-menu='Fish']").hide();
        $("[data-box='Birds']").hide();
        $("[data-menu='Birds']").hide();
        $("[data-box='Rodents']").hide();
        $("[data-menu='Rodents']").hide();
        $("[data-box='Various']").hide(); 
        $("[data-menu='Various']").hide();
        $("[data-box='Dogs']").show();
        $("[data-menu='Dogs']").show();
    
    });
    $("[data-filter='Birds']").on('click', function(e){
        $("[data-box='Dogs']").hide();
        $("[data-menu='Dogs']").hide();
        $("[data-box='Fish']").hide();
        $("[data-menu='Fish']").hide();
        $("[data-box='Cats']").hide();
        $("[data-menu='Cats']").hide();
        $("[data-box='Rodents']").hide();
        $("[data-menu='Rodents']").hide();
        $("[data-box='Various']").hide(); 
        $("[data-menu='Various']").hide();
        $("[data-box='Birds']").show();
        $("[data-menu='Birds']").show();
    
    });
    $("[data-filter='Rodents']").on('click', function(e){
        $("[data-box='Dogs']").hide();
        $("[data-menu='Dogs']").hide();
        $("[data-box='Fish']").hide();
        $("[data-menu='Fish']").hide();
        $("[data-box='Birds']").hide();
        $("[data-menu='Birds']").hide();
        $("[data-box='Cats']").hide();
        $("[data-menu='Cats']").hide();
        $("[data-box='Various']").hide(); 
        $("[data-menu='Various']").hide();
        $("[data-box='Rodents']").show();
        $("[data-menu='Rodents']").show();
    
    });
    $("[data-filter='Fish']").on('click', function(e){
        $("[data-box='Dogs']").hide();
        $("[data-menu='Dogs']").hide();
        $("[data-box='Cats']").hide();
        $("[data-menu='Cats']").hide();
        $("[data-box='Birds']").hide();
        $("[data-menu='Birds']").hide();
        $("[data-box='Rodents']").hide();
        $("[data-menu='Rodents']").hide();
        $("[data-box='Various']").hide(); 
        $("[data-menu='Various']").hide();
        $("[data-box='Fish']").show();
        $("[data-menu='Fish']").show();
    
    });
    $("[data-filter='Various']").on('click', function(e){
        $("[data-box='Dogs']").hide();
        $("[data-menu='Dogs']").hide();
        $("[data-box='Fish']").hide();
        $("[data-menu='Fish']").hide();
        $("[data-box='Birds']").hide();
        $("[data-menu='Birds']").hide();
        $("[data-box='Rodents']").hide();
        $("[data-menu='Rodents']").hide();
        $("[data-box='Cats']").hide(); 
        $("[data-menu='Cats']").hide();
        $("[data-box='Various']").show();
        $("[data-menu='Various']").show();
    
    });
});

    // More Info button handler function
    function attachMoreInfoHandlers() {
        $(".btn1").on('click', function(){
            const $moreInfo = $(this).siblings(".more-info");
            const $infoButton = $(this);
            
            // Toggle visibility of more info
            $moreInfo.toggle();
            
            // Toggle button text
            if ($moreInfo.is(":visible")) {
                $infoButton.text("Less Info");
            } else {
                $infoButton.text("More Info");
            }
        });
    }
