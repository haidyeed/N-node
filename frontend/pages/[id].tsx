import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ApartmentDetails() {
  const { query } = useRouter();
  const [apartment, setApartment] = useState<any>(null);

  useEffect(() => {
    if (query.id) {
      axios.get(`http://localhost:3001/apartments/${query.id}`)
        .then(res => setApartment(res.data));
    }
  }, [query.id]);

  if (!apartment) return <div>Loading...</div>;

  return (
    <div>
      <h1>{apartment.unit_name}</h1>
      <p>{apartment.unit_number}</p>
      <p>{apartment.project}</p>
      <p>{apartment.description}</p>
      <p>${apartment.price}</p>
    </div>
  );
}