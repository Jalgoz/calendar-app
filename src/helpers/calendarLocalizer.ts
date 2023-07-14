/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import esEs from 'date-fns/locale/es';
import { dateFnsLocalizer } from 'react-big-calendar';

import { LANGUAGE } from '../constants';

const locales = {
  us: {
    'en-US': enUS,
  },
  es: {
    'es': esEs,
  }
};

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: locales[LANGUAGE],
});
