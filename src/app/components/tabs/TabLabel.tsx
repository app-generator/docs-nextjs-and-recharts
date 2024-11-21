import React from "react";

type TTabLabel = {
  name: string;
  isActive?: Boolean;
  clickHandler?: () => void;
};

export const TabLabel = ({ name, isActive, clickHandler }: TTabLabel) => {
  return (
    <a
      className={`text-l tab text-gray-400 font-bold tab-bordered${isActive ? " tab-active" : ""}`}
      onClick={clickHandler}
    >
      {name}
    </a>
  );
};