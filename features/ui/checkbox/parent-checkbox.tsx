import { useState } from "react";
import { NewCheckbox } from "./new-checkbox";

export function ParentCheckbox() {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const handleChange = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const toggleAll = (event: any) => {
    if (event.target.checked) {
      setCheckedIds(items.map(({ id }) => id));
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <>
      <div>Has {checkedIds.length} items</div>
      <NewCheckbox
        checked={checkedIds.length === items.length}
        indeterminate={
          checkedIds.length > 0 && checkedIds.length < items.length
        }
        onChange={toggleAll}
        text="Select all"
      />
      <div></div>
      <ul>
        {items.map(({ id, text }) => (
          <li key={id}>
            <NewCheckbox
              checked={checkedIds.includes(id)}
              onChange={() => handleChange(id)}
              {...{ text }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export const items = [
  {
    id: "item-1",
    text: "Item 1",
  },
  {
    id: "item-2",
    text: "Item 2",
  },
  {
    id: "item-3",
    text: "Item 3",
  },
  {
    id: "item-4",
    text: "Item 4",
  },
  {
    id: "item-5",
    text: "Item 5",
  },
];
