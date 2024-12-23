import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function TextButton(
  props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="text-orange-100 leading-[19.2px] font-[600]"
    />
  );
}

interface NextButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  svgClass?: string;
  class?: string;
}
export const NextButton = (
  props: NextButtonProps,
) => {
  const className =
    "text-orange-100 leading-[19.2px] font-[600] flex items-center gap-[15px]";

  return (
    <button
      {...props}
      class={className + (" " + props.class)}
      style={{
        opacity: props.disabled ? 0.5 : 1,
        cursor: props.disabled ? "not-allowed" : "pointer",
      }}
    >
      {props.children}
      <svg
        class={props.svgClass}
        width="8"
        height="13"
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.5L6.71429 6.2619L1 11.5"
          stroke="#FF7361"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};
