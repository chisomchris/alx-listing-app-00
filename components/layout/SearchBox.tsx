import React from "react";
import { DateInput, NumberInput, TextInput } from "../common/Inputs";
import Icon from "../common/Icon";

export const SearchBox: React.FC = () => {
  return (
    <div className="@container max-w-[580px] flex-1">
      <form className="border border-[#F6F6F6] rounded-full pl-8 pr-2 py-1.5 hidden justify-between gap-4 @min-[530px]:flex">
        <div className="flex gap-4 items-center">
          <TextInput label="Location" placeholder="Search for destination" />
          <DateInput placeholder="Add date" label="Check in" />
          <DateInput placeholder="Add date" label="Check Out" />
          <NumberInput placeholder="Add guest" label="People" />
        </div>
        <div className="bg-[#FFA800] w-12 h-12 aspect-square rounded-full grid place-items-center">
          <Icon name="Magnifier" size={24} />
        </div>
      </form>

      <form className="flex justify-between gap-4 border border-[#F6F6F6] rounded-full pl-8 pr-2 py-1.5 @min-[530px]:hidden">
        <TextInput label="Where to" placeholder="Location . Date . Add guest" />

        <div className="bg-[#FFA800] w-12 h-12 aspect-square rounded-full grid place-items-center">
          <Icon name="Magnifier" size={24} />
        </div>
      </form>
    </div>
  );
};
