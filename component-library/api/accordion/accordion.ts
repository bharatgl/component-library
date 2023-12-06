import { CSSProperties } from 'react';

export type Item = {
  title: string;
  id: string;
};

type ItemProps = {
  item: Item;
  accentColor: string;
};

export type ItemsPropsReact = ItemProps & {
  onClick: () => void;
  styling: Partial<CSSProperties>;
};

export type AccordionProps = {
  elementList: Item[];
};

export const footballTeams: Item[] = [
  {
    title: 'Mencahster United',
    id: '01',
  },
  {
    title: 'Barcelona',
    id: '02',
  },
  {
    title: 'Paris Saint G.',
    id: '03',
  },
  {
    title: 'Liverpool',
    id: '04',
  },
];
