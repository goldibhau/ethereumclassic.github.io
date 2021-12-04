import React from "react";
import tw from "twin.macro";

import LocalizedLink from "../../plugins/translations-plugin/src/components/localizedLink";
import Icon from "./icon";

export default function NewsPagination({ pageContext }) {
  // TODO i18n
  const { currentPage, numPages, filterBase } = pageContext;
  if (numPages === 1) {
    return null;
  }
  const btnStyle = tw`border-b-2 space-x-3 border-transparent py-4 px-1.5 md:px-3 inline-flex items-center text-sm font-medium hover:text-shade-dark hover:border-shade-light`;
  return (
    <nav tw="border-b border-shade-lighter flex items-center justify-between -mx-2 px-2 text-shade-light">
      <div tw="-mt-px w-0 flex-1 flex">
        {currentPage !== 1 && (
          <>
            <LocalizedLink to={filterBase} css={btnStyle}>
              <Icon icon="leftDouble" tw="h-4" aria-hidden="true" />
            </LocalizedLink>
            <LocalizedLink
              to={
                currentPage === 2
                  ? filterBase
                  : `${filterBase}/page/${currentPage - 1}`
              }
              css={btnStyle}
            >
              <Icon icon="left" tw="h-4" aria-hidden="true" />
              <span>Previous</span>
            </LocalizedLink>
          </>
        )}
      </div>
      <div tw="-mt-px flex">
        <span tw="border-transparent border-b-2 py-4 inline-flex items-center text-sm font-medium">
          Page {currentPage} of {numPages}
        </span>
      </div>
      <div tw="-mt-px w-0 flex-1 flex justify-end">
        {currentPage !== numPages && (
          <>
            <LocalizedLink
              to={`${filterBase}/page/${currentPage + 1}`}
              css={btnStyle}
            >
              <span>Next</span>
              <Icon icon="right" tw="h-4" aria-hidden="true" />
            </LocalizedLink>
            <LocalizedLink to={`${filterBase}/page/${numPages}`} css={btnStyle}>
              <Icon icon="rightDouble" tw="h-4" aria-hidden="true" />
            </LocalizedLink>
          </>
        )}
      </div>
    </nav>
  );
}