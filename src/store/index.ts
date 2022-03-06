import { ThemeSlice } from '@src/types/theme';
import { TimerSlice } from '@src/types/timer';
import create, { SetState } from 'zustand';

import { createThemeSlice } from './theme';
import { createTimerSlice } from './timer';

export type StoreState = ThemeSlice & TimerSlice;

export type StoreSlice<T> = (set: SetState<StoreState>) => T;

export const useStore = create<StoreState>((set) => ({
  ...createThemeSlice(set),
  ...createTimerSlice(set),
}));
