import { createPortal } from "react-dom";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { AiTwotonePhone, AiOutlineMail, AiFillStar } from "react-icons/ai";

import { parseDate } from "../utils";

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  user: TUser | null;
}

const UserInfoModal = ({ isOpen, toggle, user }: IProps) => {
  // I leave this here to talk in the interview
  // TODO: How can I desctructure a possible null object?. TS complains:
  // Property '' does not exist on type 'TUser | null'
  const title = user?.name.title;
  const firstName = user?.name.first;
  const lastName = user?.name.last;
  const imgSrc = user?.picture.large;
  const DoB = user?.dob.date;
  const age = user?.dob.age;
  const phone = user?.phone;
  const cell = user?.cell;
  const email = user?.email;
  const state = user?.location.state;
  const city = user?.location.city;
  const country = user?.location.country;
  const postCode = user?.location.postcode;
  const registerDate = user?.registered.date.toString();
  const registerSince = user?.registered.age;

  const center = "flex justify-center items-center";
  const mainContainer = `fixed top-1/2 left-1/2 z-20 mx-auto flex max-h-screen w-full max-w-lg -translate-x-1/2 -translate-y-1/2 transform md:h-auto ${center} bg-gradient-to-b from-cyan-500 to-blue-500 md:max-w-xl md:rounded-xl md:py-10`;

  return isOpen
    ? createPortal(
        <>
          <div className="fixed inset-0 bg-overlay" onClick={toggle} />
          <div
            className={mainContainer}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="absolute top-2 right-2 text-white" onClick={toggle}>
              <GrFormClose color="#fff" size={45} />
            </div>
            <div className={`${center} m-2 w-full flex-col text-white`}>
              <img
                className="mx-auto my-4 h-[250px] max-w-none rounded-full object-contain shadow-2xl"
                src={imgSrc}
              />
              <div className="flex w-full flex-col ">
                <div className={`"${center} w-full flex-col`}>
                  <div className={`${center}`}>
                    <div className="mr-2 text-center text-3xl font-bold leading-none md:text-4xl 2xl:text-3xl">{`${title}. ${firstName} ${lastName}`}</div>
                  </div>
                  <div
                    className={`${center} mt-4 flex-col text-center text-xl md:text-2xl 2xl:text-xl `}
                  >
                    <div className="ml-1 flex md:ml-3">
                      <MdLocationPin color="white" size={30} />
                      <div className="">{`${city}, ${state},`}</div>
                    </div>
                    <div className="">{`${postCode}, ${country}`}</div>
                  </div>
                </div>
                {/* asd */}
                <div className="flex h-full flex-col items-center justify-between text-xl md:text-3xl 2xl:text-2xl">
                  <div className={`${center} my-2`}>
                    <FaBirthdayCake
                      className="mr-1 md:mr-2"
                      color="white"
                      size={22}
                    />
                    <>{DoB && `${parseDate(DoB)} (${age} Years old)`}</>
                  </div>
                  <div className={`${center} my-1`}>
                    <>
                      <AiTwotonePhone
                        className="mr-1 md:mr-2"
                        color="white"
                        size={22}
                      />
                      <>{phone}</>
                    </>
                    <>
                      <GoDeviceMobile
                        className="mr-1 ml-4 md:mr-2 md:ml-8"
                        color="white"
                        size={22}
                      />
                      <>{cell}</>
                    </>
                  </div>
                  <div className={`${center} mt-2`}>
                    <AiOutlineMail className="mr-2" color="white" size={22} />
                    <>{email}</>
                  </div>
                </div>
                <div
                  className={`${center} md:tex-2xl mt-4 w-full flex-col text-xl md:text-3xl 2xl:text-2xl`}
                >
                  <div className="flex items-center">
                    {/* Invisible container that helps align next element */}
                    <div className="mr-2 h-4 w-4" />
                    <div className="text-center text-slate-200  ">
                      Membership
                    </div>
                  </div>
                  <div className={`${center} mt-1`}>
                    <AiFillStar className="mr-2" color="gold" size={22} />
                    <div className="text-yellow-300">Gold Member</div>
                  </div>
                  <div className="flex">
                    <div className="text-white md:pt-2 2xl:text-xl">
                      {registerDate &&
                        `Since ${parseDate(
                          registerDate
                        )} (${registerSince} Years)`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;
};

export default UserInfoModal;
