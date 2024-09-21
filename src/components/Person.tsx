import PersonData from "../data/PersonData";

const Person = () => {
  return (
    <div className="">
      <p className="">My portfolio</p>

      <div className="">{PersonData.name}</div>
      <div className="">{PersonData.story}</div>
      <img
        className=" flex items-center justify-center w-64 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem] max-w-full max-h-full object-contain"
        src={PersonData.image}
        alt={PersonData.name}
      />
    </div>
  );
};

export default Person;
