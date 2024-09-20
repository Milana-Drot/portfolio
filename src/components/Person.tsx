import PersonData from "../data/PersonData";

const Person = () => {
  return (
    <div className="text-white">
      <p className="text-white">My portfolio</p>

      <div className="">{PersonData.name}</div>
      <div className="">{PersonData.story}</div>
    </div>
  );
};

export default Person;
