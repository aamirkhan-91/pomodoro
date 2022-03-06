import { ThemeSlice } from '@src/types/theme';

import { StoreSlice } from '.';

export const createThemeSlice: StoreSlice<ThemeSlice> = (set) => ({
  selectedFont: 'sans',
  selectedColor: 'red',
  setSelectedFont: (selectedFont) =>
    set(() => ({
      selectedFont,
    })),
  setSelectedColor: (selectedColor) =>
    set(() => ({
      selectedColor,
    })),
});
