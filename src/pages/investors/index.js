import React, { useRef, useState, Component } from 'react';
import Navigation from '../../components/Layout/Navigation';
import Head from 'next/head';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import Footer from 'components/Layout/Footer';
const defaultOptions = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8ec3b9',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1a3646',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#4b6878',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#64779e',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fce94f',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#283d6a',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#023e58',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#304a7d',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#98a5be',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2c6675',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#255763',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#b0d5ce',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#023e58',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#98a5be',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1d2c4d',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#283d6a',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3a4762',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#0e1626',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#4e6d70',
      },
    ],
  },
];
const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  state = {
    markers: [
      {
        position: { lat: 33.589886, lng: -7.603869 },
        title: 'The marker`s title will appear as a tooltip.',
        name: 'Soma ',
        visible: false,
        description: 'The Description',
      },
      {
        position: { lat: 18.07353, lng: -15.958237 },
        title: 'The marker`s title will appear as a tooltip.',
        name: 'Soma ',
        visible: false,
        description: 'The Description',
      },
      {
        position: { lat: 12.639232, lng: -8.002889 },
        title: 'The marker`s title will appear as a tooltip.',
        name: 'Soma ',
        visible: false,
        description: 'The Description',
      },
    ],
  };
  _mapLoaded(mapProps, map) {
    console.log(' ready');
    map.setOptions({
      styles: defaultOptions,
    });
  }
  onMarkerClick = (props, marker, e, i) => {
    const newMarkers = [...this.state.markers];
    newMarkers[i].visible = true;
    newMarkers[i].marker = marker;
    this.setState({ markers: newMarkers });
  };
  onMapClicked = (props) => {};

  render() {
    console.log(' ++>', this.state.markers);
    return (
      <Map
        onClick={this.onMapClicked}
        google={this.props.google}
        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        style={mapStyles}
        initialCenter={{
          lat: 13.543728,
          lng: 17.5155137,
        }}
        zoom={3.2}
      >
        {this.state.markers.map((marker, i) => (
          <Marker
            key={i}
            title={marker.title}
            name={marker.name}
            position={marker.position}
            onClick={(props, m, e) => this.onMarkerClick(props, m, e, i)}
          >
            <InfoWindow
              marker={marker.marker}
              visible={marker.visible}
              //  style={styles.infoWindow}
            >
              <div className="p-2 bg-gray-300">
                <p>{marker.description}</p>
              </div>
            </InfoWindow>
          </Marker>
        ))}

        <Marker
          title={'The marker`s title will appear as a tooltip.'}
          name={'SOMA'}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
      </Map>
    );
  }
}

export const MapAll = GoogleApiWrapper({
  //   apiKey: 'AIzaSyBqawZzj7ZhfcWrLMfZ60KO9OyCVX0SWhY',
})(MapContainer);

const Index = () => {
  const mapRef = useRef();
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <section className="text-gray-600 body-font relative w-full h-[80vh]">
        {/* <iframe
          ref={mapRef}
          className="absolute inset-0"
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.googleapis.com/maps/api/staticmap?center=15.750910590876538,-8.220801436154874&zoom=3&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x1d2c4d&style=element:labels%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x8ec3b9&style=element:labels.text.stroke%7Ccolor:0x1a3646&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.country%7Celement:geometry.stroke%7Ccolor:0x4b6878&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0x64779e%7Cvisibility:off&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:landscape.man_made%7Cvisibility:off&style=feature:landscape.man_made%7Celement:geometry.stroke%7Cvisibility:off&style=feature:landscape.natural%7Celement:geometry%7Ccolor:0xfce94f%7Cvisibility:on&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0x283d6a&style=feature:poi%7Celement:labels.text.stroke%7Cvisibility:off&style=feature:poi.park%7Celement:geometry.fill%7Ccolor:0x023e58&style=feature:poi.park%7Celement:labels.text.fill%7Cvisibility:off&style=feature:road%7Cvisibility:off&style=feature:road%7Celement:geometry%7Ccolor:0x304a7d&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x255763&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xb0d5ce&style=feature:road.highway%7Celement:labels.text.stroke%7Ccolor:0x023e58&style=feature:transit%7Cvisibility:off&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x98a5be&style=feature:transit%7Celement:labels.text.stroke%7Ccolor:0x1d2c4d&style=feature:transit.line%7Celement:geometry.fill%7Ccolor:0x283d6a&style=feature:transit.station%7Celement:geometry%7Ccolor:0x3a4762&style=feature:water%7Celement:geometry%7Ccolor:0x0e1626&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x4e6d70&size=480x360"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe> */}
        <div className="h-96 relative">
          <MapAll />
        </div>
        <section className="text-gray-800 text-2xl continuer lg:p-28">
          <div className="py-10">
            Establishment of a Joint Venture with the largest poultry operator in Mali « Société Marroco-Malienne
            d’aviculture » specialized in the production of a one-day meat- type and prawn-type as well as raising meat
            type chicken and hatching hens.
          </div>
          <h2 className="text-6xl py-6">2018</h2>
          <div className=" py-6">
            Establishment of a second Joint Venture in Mauritania in partnership with local operators « Société
            Mauritanienne de volailles », la SMV and launching of construction of an integrated poultry complex which
            includes a feed manufacturing unit, a hatchery, production of meat-type chicken and an industrial poultry
            abattoir.
          </div>
          <div className="flex">
            <div className="py-6">
              <div>
                La société Mauritanienne de volaille a permis la réalisation d’un complexe avicole comportant un premier
                batiment de la pondeuse, l'extension du couvoir, le materiel de transport de l'abattoir et de l'usine
                d'aliment.
              </div>
              <div>
                <ul>
                  <li>3 Fermes de Reproducteurs chair</li>
                  <li>1 Couvoir chair et ponte</li>
                  <li>4 Fermes de poulets et 2 de pondeuses</li>
                  <li>1 Usine d’aliments composés</li>
                  <li>1 Abattoir moderne de volailles</li>
                </ul>
              </div>
            </div>
            <div>
              <Skeleton containerClassName="h-90" height={500} />
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </div>
  );
};

export default Index;
