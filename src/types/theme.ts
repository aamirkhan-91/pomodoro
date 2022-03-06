export type FontType = 'sans' | 'serif' | 'mono';
export type ColorType = 'red' | 'blue' | 'pink';

export type ThemeSlice = {
  selectedFont: FontType;
  selectedColor: ColorType;
  setSelectedFont: (selectedFont: FontType) => void;
  setSelectedColor: (selectedColor: ColorType) => void;
};
