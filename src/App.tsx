import * as React from 'react';
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';

import store from '@redux/store';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import { IStore } from '@redux/reducers';
import { testAction } from '@redux/actions';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <React.Suspense fallback={'loading'}>
        <ReduxProvider store={store}>
          <Sub />
        </ReduxProvider>
      </React.Suspense>
    </I18nextProvider>
  );
};

export const Sub: React.FC = () => {
  const { t } = useTranslation();
  const test = useSelector((state: IStore) => state.site.test);
  const dispatch = useDispatch();
  console.log(test);
  return (
    <div>
      rip me {t('teste')} <span onClick={() => dispatch(testAction({}))}>{JSON.stringify(test)}</span>
    </div>
  );
};

export default App;
