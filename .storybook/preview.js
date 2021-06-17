import React, { Suspense } from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import store from '@redux/store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback='loading'>
        <ReduxProvider store={store}>
          <Story />
        </ReduxProvider>
      </Suspense>
    </I18nextProvider>
  ),
];
