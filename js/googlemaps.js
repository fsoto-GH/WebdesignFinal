function initializeMap() {
    var location = {lat: 41.816991, lng: -87.699214};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, center: location
    }); 

    var mark = new google.maps.Marker({
        position: location,
        map: map
    }) ;
}

