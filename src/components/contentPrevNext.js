import React from "react";
import "twin.macro";

import { useNavigation } from "../utils/navigationProvider";

import Icon from "./icon";
import Link from "./link";

function Box({ item, prev }) {
  if (!item?.name) {
    return null;
  }
  return (
    <Link to={item.link} tw="flex-1 space-x-4 p-4 shadow-md bg-white flex">
      {item.icon && <Icon icon={item.icon} tw="h-12" />}
      <div tw="flex-grow">
        <div tw="uppercase text-sm tracking-widest">
          {prev ? "Previous" : "Next"}
        </div>
        <div tw="text-xl">{item.name}</div>
      </div>
    </Link>
  );
}

export default function PrevNextNav() {
  const { prev, next } = useNavigation();
  return (
    <div tw="mt-10 flex space-x-6">
      {/* <Box item={prev} prev /> */}
      <Box item={next} />
    </div>
  );
}
