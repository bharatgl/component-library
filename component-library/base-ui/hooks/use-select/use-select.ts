import { useState } from 'react';

export function useSelect(initialValue?: string) {
  const [selectedId, setSelecteId] = useState<string | null>(
    initialValue ?? null
  );
  const setSelection = (id: string) => setSelecteId(id);
  return { selectedId, setSelection };
}
