import classNames from "classnames";
import Link from "next/link";
import { faTent } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback, useEffect } from "react";

type HeaderProps = {
    tailWindClassName?: string;
};

export default function Header({ tailWindClassName }: HeaderProps) {
    const [theme, setTheme] = useState<boolean>(true);
    const [anime, setAnime] = useState<string>("");
    const [buttonDisable, setButtonDisable] = useState<boolean>(false);
    const [isInitialMount, setIsInitialMount] = useState<boolean>(true);

    const animateFlip = "animate-flip-vertical-right";

    const handelChangeBackgroundColor = useCallback(() => {
        setTheme((theme) => !theme);
    }, [theme]);

    useEffect(() => {
        document.body.className = theme
            ? "bg-gray-black text-white"
            : "bg-peach text-gray-black";
    }, [theme]);

    useEffect(() => {
        if (isInitialMount) {
            setIsInitialMount(false);
        } else {
            if (theme || !theme) {
                setAnime(animateFlip);
                setButtonDisable(true);
                setTimeout(() => {
                    setAnime("");
                    setButtonDisable(false);
                }, 700);
            }
        }
    }, [theme]);

    return (
        <nav>
            <header
                className={classNames(
                    "p-0 m-0 w-full h-[4.5rem] opacity-7 flex gap-8 justify-center fixed top-0 backdrop-blur-[10px] items-center z-[100]",
                    "[&_a]:text-[1rem]",
                    tailWindClassName
                )}
            >
                <h1>
                    <Link
                        href="/"
                        className={classNames(
                            `${
                                theme
                                    ? "bg-purple text-white"
                                    : "bg-gray-black text-orange-300"
                            }`,
                            "font-bold rounded-lg py-2 px-4 duration-300"
                        )}
                    >
                        TOP
                    </Link>
                </h1>
                <ul className="flex gap-8">
                    <li>
                        <Link
                            href="/design/"
                            className={classNames("font-silkscreen relative")}
                        >
                            DESIGN
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="font-silkscreen">
                            USES
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://github.com/kojima-kai"
                            className="font-silkscreen"
                        >
                            GITHUB
                        </Link>
                    </li>
                </ul>
                <button
                    onClick={handelChangeBackgroundColor}
                    className={classNames(
                        `${
                            theme
                                ? "bg-purple text-white"
                                : "bg-gray-black text-orange-300"
                        }`,
                        "py-2 px-4 rounded-lg duration-300",
                        "focus: outline-none",
                        `${anime}`
                    )}
                    disabled={buttonDisable}
                >
                    {theme ? (
                        <FontAwesomeIcon
                            icon={faTent}
                            className={classNames("w-5 h-5")}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faLightbulb}
                            className={classNames("w-5 h-5")}
                        />
                    )}
                </button>
            </header>
        </nav>
    );
}
