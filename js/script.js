$(document).ready(function() {
    $("[data-box]").empty();
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
            const container = $(`[data-box="${type.charAt(0).toUpperCase() + type.slice(1)}s"]`);
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
    $("[data-filter]").on('click', function(e){
        const filterType = $(this).data('filter');
        
        // Hide all boxes
        $("[data-box]").hide();
        
        // Show all or specific box based on filter
        if (filterType === 'All') {
            $("[data-box]").show();
        } else {
            $(`[data-box='${filterType}s']`).show();
        }
    });

    // More Info button handler function
    function attachMoreInfoHandlers() {
        $(".btn1").on('click', function(e){
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
});
    //    $.get("xml/pets.xml", function(xml){
    //             var txt='';
    //             $(xml).find("pet").each(function(){
    //                     txt += ' <div class="col" >'
    //                         txt += '<div class="card">'
    //                             txt += '<img src="DogPhotos/dog11.jpg" class="card-img-top" alt="...">'
    //                                 txt += '<div class="card-body">'
    //                                 txt += '<h5 id="name">Benji</h5>'
    //                                 txt += '<p id="gender">Gender: male </p>'
    //                                 txt += '<p id="age">Age: 2-3 years</p>'
    //                                 txt += '<p id="breed">Breed</p>'
    //                                     txt += '<div class="more-info">'
    //                                         txt += '<p id="price"></p>'
    //                                         txt += '<p id="comment">A friendly dog always eager for a game of fetch.</p>'
    //                                     txt += '<button type="button" class="btn1">More Info</button>'
    //                                     txt += '</div>'
    //                              txt += '</div>'
    //                         txt += '</div>'
    //                     txt += '</div>'


    //                 $(xml).find("pet").each(function(){   
    //                     var name = $(this).find("name").text();
    //                     $("#name").html(name);
    //                     var age = $(this).find("age").text();
    //                     $("#age").html(age);
    //                     var gender = $(this).find("gender").text();
    //                     $("#gender").html(gender);
    //                     var breed = $(this).find("breed").text();
    //                     $("#breed").html(breed);
    //                     var price = $(this).find("price").text();
    //                     $("#price").html(price);
    //                     var comment = $(this).find("comment").text();
    //                     $("#comment").html(comment);
    //                 });
    //             });
    //             $(".content").html(txt);
    //         });