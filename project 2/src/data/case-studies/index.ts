import { utep } from './utep';
import { ohioStateLacrosse } from './ohio-state-lacrosse';
import { pennState } from './penn-state';
import { kentState } from './kent-state';
import { lsu } from './lsu';
import { pitt } from './pitt';

export const caseStudies = {
  'utep': utep,
  'ohio-state-lacrosse': ohioStateLacrosse,
  'penn-state': pennState,
  'kent-state': kentState,
  'lsu': lsu,
  'pitt': pitt
};

export type { CaseStudyData } from './types';
export { schoolColors } from '../schoolColors';