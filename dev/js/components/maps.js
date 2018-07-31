// Map styles
const mapStyle = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: [
      {
        hue: '#008eff'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: '0'
      },
      {
        lightness: '0'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified'
      },
      {
        saturation: '-60'
      },
      {
        lightness: '-20'
      }
    ]
  }
];

const positions = [
  {
    lat: 50.815708,
    lng: 3.327275
  }
];

// Setup
const setup = gmapContainer => {
  const map = new google.maps.Map(gmapContainer, {
    zoom: 10,
    styles: mapStyle
  });

  const bounds = new google.maps.LatLngBounds();

  for (const position of positions) {
    const marker = new google.maps.Marker({
      position: {
        lat: position.lat,
        lng: position.lng
      },
      map: map
    });

    bounds.extend(marker.position);
  }

  map.fitBounds(bounds);
};

const maps = _ => {
  const gmapContainer = document.getElementById('gmap-container');

  if (gmapContainer) {
    setup(gmapContainer);
  }
};

export default maps;
