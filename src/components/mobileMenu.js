/* This Header requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import "twin.macro";
import { Popover } from "@headlessui/react";
import Icon from "./icon";
import Fader from "./fader";
import MobileMenuItems from "./mobileMenuItems";

export default function MobileMenu() {
  return (
    <Popover tw="-mr-2 -my-2 md:hidden">
      {({ open }) => (
        <>
          {!open && (
            <Popover.Button tw="bg-backdrop-light rounded-md p-2 inline-flex items-center justify-center text-shade-light hover:text-shade-neutral hover:bg-shade-lightest focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-neutral">
              <span tw="sr-only">Open menu</span>
              <Icon icon="menu" tw="h-6 w-6" />
            </Popover.Button>
          )}
          <Fader>
            <Popover.Panel
              focus
              tw="absolute p-2 transition transform origin-top-right md:hidden bg-shade-darkest bg-opacity-60 backdrop-blur-xl bottom-0 top-16 right-0 left-0 h-screen"
            >
              <div tw="rounded-lg shadow-lg bg-backdrop-light">
                <MobileMenuItems />
              </div>
            </Popover.Panel>
          </Fader>
        </>
      )}
    </Popover>
  );
}
