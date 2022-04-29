import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaBirthdayCake, FaMobileAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

import { parseDate } from "../utils";

interface Props {
  user: TUser;
  onClick: () => void;
}

const User = ({ user, onClick }: Props) => {
  const {
    name: { first: firstName, last: lastName },
    picture: { medium: imgSrc },
    dob: { date: DoB },
    location: { country },
    gender,
    cell,
  } = user;

  return (
    <div
      className="shadow-xllg:max-w-lg relative m-2 flex w-full min-w-[350px] max-w-xl border-2 2xl:max-w-xl"
      onClick={onClick}
    >
      <img
        className="relative h-[130px] max-w-none object-contain md:h-[200px] xl:h-[160px]"
        src={imgSrc}
      />
      <div className="flex w-full flex-col">
        <div className="ml-2 mt-1 mb-1 text-xl font-bold leading-none md:my-0 md:mr-2 md:text-3xl xl:text-2xl ">{`${firstName} ${lastName}`}</div>
        <div className="my-2 flex h-full flex-col justify-between md:mt-8 md:text-2xl xl:mt-4 xl:text-xl">
          <div className="flex items-center ">
            <div className="mx-2">
              <MdLocationPin color="white" size={20} />
            </div>
            {country}
          </div>
          <div className="flex items-center">
            <div className="mx-2">
              <FaMobileAlt color="white" size={18} />
            </div>
            {cell}
          </div>
          <div className="flex items-center">
            <div className="mx-2">
              <FaBirthdayCake color="white" size={18} />
            </div>
            {parseDate(DoB)}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 transform">
        {gender === "male" ? (
          <BsGenderMale color="blue" size={30} />
        ) : (
          <BsGenderFemale color="#FD5DA8" size={32} />
        )}
      </div>
    </div>
  );
};

export default User;
