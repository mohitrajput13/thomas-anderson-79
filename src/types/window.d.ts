declare global {
  interface Window {
    changeLanguage: (lang: string) => void;
  }
}

export {};