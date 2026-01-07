import Dropdown from "./Dropdown";
import { useSearchParams } from "react-router-dom";

// interface CharacterFilterProps {
//   status: string;
//   species: string;
//   gender: string;
//   setStatus: (val: string) => void;
//   setSpecies: (val: string) => void;
//   setGender: (val: string) => void;
// }

const FilterOptions = {
  status: ["Alive", "Dead", "Unknown"],
  species: ["Human", "Alien", "Humanoid", "Robot","Mythological Creature","Poopybutthole","Unknown"],
  gender: ["Male", "Female", "Genderless", "Unknown"],
};

function CharacterFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status") || "";
  const species = searchParams.get("species") || "";
  const gender = searchParams.get("gender") || "";

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    setSearchParams(params);
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
      <Dropdown
        label="Status"
        value={status}
        options={FilterOptions.status}
        onChange={(val) => updateFilter("status", val)}
      />

      <Dropdown
        label="Species"
        value={species}
        options={FilterOptions.species}
        onChange={(val) => updateFilter("species", val)}
      />

      <Dropdown
        label="Gender"
        value={gender}
        options={FilterOptions.gender}
        onChange={(val) => updateFilter("gender", val)}
      />
    </div>
  );
}

export default CharacterFilter;
