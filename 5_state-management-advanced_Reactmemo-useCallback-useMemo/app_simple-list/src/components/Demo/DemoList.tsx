import React, { useMemo } from "react";

interface DemoListProps {
  items: number[];
  title: string;
}

const DemoList: React.FC<DemoListProps> = ({ title, items }) => {
  // useMemo manages that the function is only executed
  // when the reference value, stated in the dependencies, changed
  const sortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
