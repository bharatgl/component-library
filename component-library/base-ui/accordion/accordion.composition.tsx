import { footballTeams } from '@bharatgl/component-library.api.accordion';
import { Accordion } from './accordion';

export const BasicAccordion = () => {
  return <Accordion elementList={footballTeams} />;
};
