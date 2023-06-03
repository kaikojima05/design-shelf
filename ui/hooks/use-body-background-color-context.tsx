import { createContext } from "react";

export type BackgroundColorContextProps = {
    theme: string;
    setTheme: (theme: string) => void;
};

export const BackgroundColorContext =
    createContext<BackgroundColorContextProps>({
        theme: "",
        setTheme: () => {},
    });
