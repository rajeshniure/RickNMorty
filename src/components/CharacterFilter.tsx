import Dropdown from "./Dropdown";

interface CharacterFilterProps {
  status: string;
  species: string;
  gender: string;
  setStatus: (val: string) => void;
  setSpecies: (val: string) => void;
  setGender: (val: string) => void;
}

const FilterOptions = {
  status: ["Alive", "Dead", "Unknown"],
  species: ["Human", "Alien", "Humanoid", "Robot"],
  gender: ["Male", "Female", "Genderless", "Unknown"],
};

function CharacterFilter({
  status,
  species,
  gender,
  setStatus,
  setSpecies,
  setGender,
}: CharacterFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
      <Dropdown
        label="Status"
        value={status}
        options={FilterOptions.status}
        onChange={setStatus}
      />

      <Dropdown
        label="Species"
        value={species}
        options={FilterOptions.species}
        onChange={setSpecies}
      />

      <Dropdown
        label="Gender"
        value={gender}
        options={FilterOptions.gender}
        onChange={setGender}
      />
    </div>
  );
}

export default CharacterFilter;
