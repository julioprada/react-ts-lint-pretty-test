import * as c from '../constants';

export const testAction = (input: any) => ({
  type: c.TEST,
  payload: input,
});
