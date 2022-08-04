import React, { useEffect, useState } from "react";

interface ItemsListProps {
  getItems: () => string[];
}

export default function ItemsList({ getItems }: ItemsListProps) {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
  }, [getItems]);

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}
