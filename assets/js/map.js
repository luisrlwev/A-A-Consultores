function initMap() {

    /* ### Mapa con las coordenadas ### */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 20.698485, lng: -103.379684 },
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        },
        streetViewControl: false
    });
    /* ### Fin Mapa con las coordenadas ### */

    /* ### Estilos del mapa ### */
    var styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ], { name: 'A&A Consultores Fiscales' });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    /* ### Fin Estilos del mapa ### */
    /* ### Íconos en el mapa ### */
    var icon = 'assets/img/map.png';

    var contentGeneradores = '<div class="info-window">' +
        '<h3 class="color">A&A Consultores Fiscales</h3>' +
        '<div class="info-content">' +
        '<p class="text-dark">¡Encontraste los mejores consultores fiscales!</p>' +
        '<p>Bogota # 2596 - B Providencia Guadalajara Jalisco C.P. 44630</p>'+
        '</div>' +
        '</div>';

    var infowindowGeneradores = new google.maps.InfoWindow({
        content: contentGeneradores
    });

    var marker = new google.maps.Marker({
        position: { lat: 20.698485, lng: -103.379684 },
        map: map,
        title: 'A&A Consultores Fiscales',
        icon: icon
    });

    marker.addListener('click', function() {
        infowindowGeneradores.open(map, marker);
    });
}