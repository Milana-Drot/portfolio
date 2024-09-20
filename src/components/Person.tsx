import PersonData from "../data/PersonData";

const Person = () => {
  return (
    <div className="">
      <p className="">My portfolio</p>

      <div className="">{PersonData.name}</div>
      <div className="">{PersonData.story}</div>
      <img className="" src={PersonData.image} alt={PersonData.name} />
    </div>
  );
};

export default Person;
