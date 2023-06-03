import About from "@/ui/pages/about/index";
import { useState, useEffect, useMemo } from "react";
import Header from "@/ui/base/header";
import { BackgroundColorContext } from "@/ui/hooks/use-body-background-color-context";
import classNames from "classnames";
import Body from "@/ui/base/body";

export default function Home() {
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

    const BooleanBackground = useMemo(() => {
        if (bodyColor === "bg-gray-black text-white") {
            return "border-white";
        } else {
            return "border-orange-300";
        }
    }, [bodyColor]);

    return (
        <>
            <BackgroundColorContext.Provider
                value={{ theme: bodyColor, setTheme: setBodyColor }}
            >
                <Header />
                <Body>
                    <About />
                </Body>
            </BackgroundColorContext.Provider>
        </>
    );
}
