// Map styles
const mapStyle = [
  { featureType: 'administrative', elementType: 'all', stylers: [{ visibility: 'off' }] },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }, { hue: '#0066ff' }, { saturation: 74 }, { lightness: 100 }]
  },
  { featureType: 'poi', elementType: 'all', stylers: [{ visibility: 'simplified' }] },
  { featureType: 'road', elementType: 'all', stylers: [{ visibility: 'simplified' }] },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [{ visibility: 'off' }, { weight: 0.6 }, { saturation: -85 }, { lightness: 61 }]
  },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ visibility: 'on' }] },
  { featureType: 'road.arterial', elementType: 'all', stylers: [{ visibility: 'off' }] },
  { featureType: 'road.local', elementType: 'all', stylers: [{ visibility: 'on' }] },
  { featureType: 'transit', elementType: 'all', stylers: [{ visibility: 'simplified' }] },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ visibility: 'simplified' }, { color: '#5f94ff' }, { lightness: 26 }, { gamma: 5.86 }]
  }
];
let customMarkerImg = '/assets/img/gmaps/marker.svg';

// Setup
const setup = gmapContainer => {
  // Define position
  const lat = +gmapContainer.dataset.lat;
  const lng = +gmapContainer.dataset.lng;
  const zoom = +gmapContainer.dataset.zoom;

  // Setup map
  const map = new google.maps.Map(gmapContainer, {
    zoom: zoom,
    center: {
      lat: lat,
      lng: lng
    },
    styles: mapStyle
  });

  // Custom Marker
  // const customMarker = {
  //   url: customMarkerImg,
  //   size: new google.maps.Size(70, 84),
  //   scaledSize: new google.maps.Size(70, 84),
  //   origin: new google.maps.Point(0, 0),
  //   anchor: new google.maps.Point(17.5, 42)
  // };

  // const marker = new google.maps.Marker({
  //   position: {
  //     lat: lat,
  //     lng: lng
  //   },
  //   map: map,
  //   icon: customMarker
  // });
};

const maps = _ => {
  const gmapContainer = document.getElementById('gmap-container');

  if (gmapContainer) {
    setup(gmapContainer);
  }
};

export default maps;
