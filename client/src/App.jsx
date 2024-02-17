import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";

function App() {
  const [internData, setInternData] = useState([]);

  useEffect(() => {
    async function fetchInternsData() {
      const fetchedResult = await fetch("/api");
      const jsonDataOfInterns = await fetchedResult.json();

      setInternData(jsonDataOfInterns);
    }

    fetchInternsData();
  }, []);

  return (
    <div className="pt-20 flex items-center justify-center flex-wrap gap-10 bg-gray-200 min-h-screen">
      {internData.map((data) => {
        return (
          <ProfileCard
            key={data.id}
            img={`${data.github}.png`}
            name={data.name}
            instagram={data.instagram}
            linkedin={data.linkedin}
            github={data.github}
            country={data.country == "SL" ? "Sri Lanka 🇱🇰" : "India 🇮🇳"}
          />
        );
      })}
    </div>
  );
}

export default App;
