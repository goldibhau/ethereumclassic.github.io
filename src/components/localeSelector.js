import React from "react";
import tw from "twin.macro";
import { Popover } from "@headlessui/react";

import Icon from "./icon";
import PopDownMenu from "./popDownMenu";
import LocaleButtons from "./localeButtons";

export default function LocaleSelector() {
  return (
    <Popover.Group tw="flex">
      <Popover tw="relative">
        {({ open }) => (
          <>
            <div tw="flex items-center">
              <Popover.Button
                className="group"
                css={[
                  tw`bg-backdrop-light rounded-md inline-flex items-center text-base font-medium hover:text-shade-darkest focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-neutral`,
                  open ? tw`text-shade-darkest` : tw`text-shade-neutral`,
                ]}
              >
                <Icon
                  icon="globe"
                  css={[
                    tw`h-6 w-6 group-hover:text-shade-neutral`,
                    open ? tw`text-shade-neutral` : tw`text-shade-light`,
                  ]}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
            <PopDownMenu
              left
              cta={
                <a
                  href="#"
                  tw="-m-3 p-3 px-5 flex items-center rounded-md text-base font-medium text-shade-darkest hover:bg-shade-lightest"
                >
                  <Icon
                    icon="coins"
                    tw="flex-shrink-0 h-6 w-6 text-shade-light"
                    aria-hidden="true"
                  />
                  <span tw="ml-3">
                    Earn ETC by helping to translate this website!
                  </span>
                </a>
              }
            >
              <LocaleButtons />
            </PopDownMenu>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
}
