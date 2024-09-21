import PersonData from "../data/PersonData";

const Person = () => {
  return (
    <div className="h-screen  ">
      <p className="text-center text-red-800 ">My portfolio</p>

      <div className="text-center text-white ">{PersonData.name}</div>
      <div className="">{PersonData.story}</div>
      <img
        className=" w-full max-w-sm "
        src={PersonData.image}
        alt={PersonData.name}
      />
    </div>
  );
};

export default Person;
