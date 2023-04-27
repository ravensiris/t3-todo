import {useRef} from "react"
import {mergeProps, useFocusRing, useOption} from 'react-aria';

export function ListBoxOption({ item, state }) {
  // Get props for the option element
  const ref = useRef(null);
  const { optionProps, isSelected, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      className={`dark:text-white text-lg px-5 py-4 outline-none ${isDisabled ? '' : 'cursor-pointer'} ${isDisabled ? "bg-slate-400" : isSelected ? "bg-purple-600 text-white" : ''}`}
    >
      {isSelected &&
        <span className="mr-3 text-violet-300">S</span>
      }
        {item.rendered}
    </li>
  );
}
