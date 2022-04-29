import { useState, MouseEvent } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

import Dropdown from "./Dropdown";
import { NATS } from "../constants";

interface IProps {
  isOpen: boolean;
  selectedNats: INats[];
  open: () => void;
  close: () => void;
  addItem: (item: INats) => void;
  removeItem: (item: INats) => void;
}

const Multiselect = ({
  isOpen,
  selectedNats,
  open,
  close,
  addItem,
  removeItem,
}: IProps) => {
  // Track dropdown remaining Nats that were not added to the selected ones (to avoid duplicate items)
  const [remainingNats, setRemainingNats] = useState<INats[]>([]);

  // If there is at least 1 Nat selected, then dropdown only shows the remaining ones
  const onClickAdd = (item: INats) => {
    addItem(item);
    remainingNats.length > 0
      ? setRemainingNats(remainingNats.filter((nat) => nat !== item))
      : setRemainingNats(NATS.filter((nat) => nat !== item));
  };

  const onClickRemove = (e: MouseEvent<HTMLDivElement>, item: INats) => {
    e.stopPropagation();
    removeItem(item);

    // Item is added back to the list. Then list is sorted alphabetically.
    const sortedNats = [...remainingNats, item].sort(function (a, b) {
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    setRemainingNats(sortedNats);
  };

  return (
    <div
      className="mx-auto flex h-full w-full max-w-xl flex-1 cursor-pointer flex-col items-center text-white lg:max-w-lg xl:ml-2 2xl:max-w-xl"
      onClick={isOpen ? close : open}
    >
      <div className="w-full">
        <div className="relative flex flex-col items-center">
          <div className="w-full ">
            <div
              className={`${
                selectedNats.length > 0 ? "py-[3px]" : "py-[7px]"
              } relative flex rounded border border-gray-200 bg-white `}
            >
              {selectedNats.length === 0 && (
                <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2 transform text-slate-400">
                  Search by nationality (max 3)
                </div>
              )}
              <div className="flex flex-auto flex-wrap">
                {selectedNats.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="m-1 flex items-center justify-center rounded-full border border-blue-300  bg-blue-100 py-1 px-2 font-medium text-blue-700 "
                    >
                      <div className="max-w-full flex-initial text-xs font-normal leading-none">
                        {item.name}
                      </div>
                      <div className="flex flex-auto flex-row-reverse">
                        <div
                          onClick={(e: MouseEvent<HTMLDivElement>) =>
                            onClickRemove(e, item)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x ml-2 h-4 w-4 cursor-pointer rounded-full hover:text-blue-300"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="flex-1"></div>
              </div>
              <div className="flex w-8 items-center border-l border-gray-200 py-1 pl-2 pr-1 text-gray-300">
                {isOpen ? (
                  <BiChevronUp size={18} color="black" />
                ) : (
                  <BiChevronDown size={18} color="black" />
                )}
              </div>
            </div>
          </div>
        </div>
        {isOpen ? (
          <Dropdown remainingNats={remainingNats} onClickAdd={onClickAdd} />
        ) : null}
      </div>
    </div>
  );
};

export default Multiselect;
