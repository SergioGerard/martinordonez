"use client"

import { useEffect, useState } from "react";
import { getFirstProjectData } from "../lib/firebaseQueries";

export default function FirebaseExample() {
  const [firstData, setFirstData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const firstCollection = "sections";
      const firstProjectData = await getFirstProjectData(firstCollection);

      setFirstData(firstProjectData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Datos del primer proyecto</h1>
      <ul>
        {firstData.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>

    </div>
  );
}
