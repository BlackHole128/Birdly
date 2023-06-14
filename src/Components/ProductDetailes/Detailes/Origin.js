import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'



const Origin = () => {
    const position = [51.505, -0.09]
    return (
        <div className='grid grid-cols-2 gap-28'>
            <div className='my-auto'>
                <h2 className='text-center text-2xl text-bold'>Place : Amazon Rainforrest</h2>
            </div>
            <div>
           
            
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
 
 <Marker position={position}  >  
 <Popup>
        Amazon Rainforrest!
      </Popup>
 </Marker>
  </MapContainer>,
           
            </div>
            
        </div>
        
    );
    
};



export default Origin;

