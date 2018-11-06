import React from 'react';

function SleepingArrangements(props) {
  return (
    <div id="sleepingarrangements">
      <div>
        <span>
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            id="sumarymodule_sleepingarrangements_svg"
          >
            <path
              d="m20.99 15.39-1.99-8.45v-5.44c0-.83-.68-1.5-1.5-1.5h-10a1.5 1.5 0 0 0 -1.5 1.5v5.44l-1.99 8.44-.01.12v5.01c0 .66.43 1.2 1.02 1.4-.01.03-.02.06-.02.09v1.5a.5.5 0 0 0 1 0v-1.5h13v1.5a.5.5 0 0 0 1 0v-1.5c0-.03-.01-.06-.02-.09a1.49 1.49 0 0 0 1.02-1.4v-5.01l-.01-.12zm-13.99-13.89a.5.5 0 0 1 .5-.5h9.99c.27 0 .5.23.5.5v4.5h-2v-2.51c.01-.82-.66-1.49-1.48-1.49h-4.02c-.82 0-1.49.67-1.49 1.49v2.51h-2zm8 1.99v4.02a.5.5 0 0 1 -.49.49h-4.02a.5.5 0 0 1 -.49-.49v-4.02c0-.27.22-.49.49-.49h4.02c.27 0 .49.22.49.49zm-8.01 3.63.01-.12h2v .51c0 .82.67 1.49 1.49 1.49h4.02c.82 0 1.49-.67 1.49-1.49v-.51h2l .01.12 1.86 7.88h-14.74l1.86-7.89zm13.01 13.39a.5.5 0 0 1 -.5.49h-14c-.28 0-.5-.22-.5-.49v-4.51h15z"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <span>
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            id="sumarymodule_sleepingarrangements_svg"
          >
            <path
              d="m22.95 16.29v-.01l-.95-1.9-.01-5.38c0-1.47-1.46-2.77-2.99-2.97v-1.53a2.5 2.5 0 0 0 -2.51-2.5h-9.98a2.5 2.5 0 0 0 -2.51 2.5v1.55c-1.57.21-3 1.48-3 2.96v5.38l-.95 1.89v.01a.49.49 0 0 0 -.05.21v3a .5.5 0 0 0 .5.5h.5v1.5a.5.5 0 0 0 1 0v-1.5h19v1.5a.5.5 0 0 0 1 0v-1.5h.5a.5.5 0 0 0 .5-.5v-3a .49.49 0 0 0 -.05-.21zm-3.95-9.25c1.02.19 1.99 1.08 1.99 1.97v3.37l-1.99-4zm-7-4.04h4.49c.83 0 1.51.67 1.51 1.5v3.5h-6zm0 6h6.19l3.5 7h-20.38l3.5-7zm-7-4.5a1.5 1.5 0 0 1 1.51-1.5h4.49v5h-6zm-3 4.51c0-.89.94-1.76 2-1.96v1.33l-2 4zm20 9.99h-21v-2h21z"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div id="summarymodule_sleepingarrangements_config">Common spaces</div>
      <div>
        {Math.ceil(props.bedno / 2)} {props.bedno / 2 > 1 ? 'beds' : 'bed'},{' '}
        {Math.floor(props.bedno / 2)} {props.bedno / 2 < 2 ? 'sofa bed' : 'sofa beds'}
      </div>
    </div>
  );
}

export default SleepingArrangements;
