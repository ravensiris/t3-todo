import type {AriaListBoxProps} from 'react-aria';
import {useListState} from 'react-stately';
import {useListBox} from 'react-aria';
import {ListBoxOption} from './option.tsx'
import {ListBoxSection} from './section.tsx'
import {useRef} from 'react'

export function ListBox<T extends object>(props: AriaListBoxProps<T>) {
  // Create state based on the incoming props
  const state = useListState(props);

  // Get props for the listbox element
  const ref = useRef(null);
  const { listBoxProps, labelProps } = useListBox(props, state, ref);

  return (
    <>
      <div {...labelProps}>{props.label}</div>
      <ul
        {...listBoxProps}
        ref={ref}
        className="p-0 list-none overflow-auto dark:bg-slate-800 border dark:border-none rounded-xl"
      >
        {[...state.collection].map((item) => (
          item.type === 'section'
            ? <ListBoxSection key={item.key} section={item} state={state} />
            : <ListBoxOption key={item.key} item={item} state={state} />
        ))}
      </ul>
    </>
  );
}
