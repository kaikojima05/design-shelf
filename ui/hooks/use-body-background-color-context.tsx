import { useState, useEffect } from "react";
import { createContext } from "react";

interface BackgroundColorContextProps {
    theme: string;
    setTheme: (theme: string) => void;
}

export const BackgroundColorContext =
    createContext<BackgroundColorContextProps>({
        theme: "",
        setTheme: () => {},
    });

export const useBodyColor = (): [
    string,
    React.Dispatch<React.SetStateAction<string>>
] => {
    const [bodyColor, setBodyColor] = useState<string>("");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateClassName = () => {
            setBodyColor(document.body.className);
        };

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "class"
                ) {
                    updateClassName();
                }
            });
        });

        updateClassName();

        observer.observe(document.body, { attributes: true });

        return () => {
            observer.disconnect();
        };
    }, [bodyColor]);

    return [bodyColor, setBodyColor];
};
