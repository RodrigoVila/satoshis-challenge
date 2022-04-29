import { useMemo } from "react";

import { NATS } from "../constants";

interface Props {
  remainingNats: INats[];
  onClickAdd: (item: INats) => void;
}

const Dropdown = ({ remainingNats, onClickAdd }: Props) => {
  const sortedNats = useMemo(
    () =>
      [...NATS].sort(function (a, b) {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      }),
    [NATS]
  );
  return (
    <div className="top-100 absolute z-40 mx-auto w-full overflow-y-auto rounded bg-white text-black shadow md:max-w-lg">
      <div className="flex w-full flex-col">
        {remainingNats.length > 0
          ? remainingNats.map((item, key) => {
              return (
                <div
                  key={key}
                  className="w-full cursor-pointer rounded-t border-b border-gray-100 hover:bg-teal-100"
                  onClick={() => onClickAdd(item)}
                >
                  <div className="relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 hover:border-teal-100">
                    <div className="flex w-full items-center">
                      <div className="mx-2 leading-6  ">{item.name}</div>
                    </div>
                  </div>
                </div>
              );
            })
          : sortedNats.map((item, key) => {
              return (
                <div
                  key={key}
                  className="w-full cursor-pointer rounded-t border-b border-gray-100 hover:bg-teal-100"
                  onClick={() => onClickAdd(item)}
                >
                  <div className="relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 hover:border-teal-100">
                    <div className="flex w-full items-center">
                      <div className="mx-2 leading-6  ">{item.name}</div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Dropdown;
