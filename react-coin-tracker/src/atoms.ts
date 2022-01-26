import { atom } from "recoil";

export const isDarkAtom = atom({
  key: 'isDark',
  default: true,
});

export const isRootAtom = atom({
  key: 'isRoot',
  default: false,
});