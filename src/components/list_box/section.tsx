import {useListBoxSection, useSeparator} from 'react-aria';
import {ListBoxOption} from './option.tsx'

export function ListBoxSection({ section, state }) {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label']
  });

  const { separatorProps } = useSeparator({
    elementType: 'li'
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      <li {...itemProps}>
        {section.rendered &&
          (
            <span
              {...headingProps}
                className="flex w-full justify-center align-center first:pt-3"
            >
                <div className="flex w-full items-center pr-3">
                    <span className="w-full border-b border-b-2 border-purple-500 h-min"></span>
                </div>
                <span className="font-bold text-purple-500">
                    {section.rendered}
                </span>
                <div className="flex w-full items-center pl-3">
                    <span className="w-full border-b border-b-2 border-purple-500 h-min"></span>
                </div>
            </span>
          )}
        <ul
          {...groupProps}
          className="p-0 list-none"
        >
          {[...section.childNodes].map((node) => (
            <ListBoxOption
              key={node.key}
              item={node}
              state={state}
            />
          ))}
        </ul>
      </li>
    </>
  );
}
