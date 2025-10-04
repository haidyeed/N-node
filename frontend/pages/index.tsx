import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/apartments')
      .then(res => setApartments(res.data));
  }, []);

  return (
    <div>
      <h1>Apartment Listings</h1>
      {apartments.map((apt: any) => (
        <div key={apt.id}>
          <h2>{apt.unit_name} - {apt.unit_number}</h2>
          <p>{apt.project}</p>
          <p>{apt.description}</p>
          <p>💰 ${apt.price}</p>
          <p>🛏 {apt.bedrooms} BR | 🛁 {apt.bathrooms} BA</p>
          <p>📐 {apt.area} sqm | 🏢 Floor {apt.floor}</p>
          <p>{apt.is_available ? '✅ Available' : '❌ Not Available'}</p>
        </div>
      ))}
    </div>
  );
}