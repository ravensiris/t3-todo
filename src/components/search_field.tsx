import {useSearchFieldState} from 'react-stately';
import {useSearchField} from 'react-aria';
import {useRef} from 'react'

export function SearchField(props) {
  const { placeholder } = props;
  const state = useSearchFieldState(props);
  const ref = useRef(null);
  const { inputProps } = useSearchField(props, state, ref);

  return (
    <input {...inputProps} ref={ref} placeholder={placeholder} className="dark:text-white dark:bg-slate-800 border dark:border-none rounded-xl px-3 py-4 w-full outline-none"/>
  );
}
