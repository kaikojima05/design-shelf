import { useContext } from "react";
import { BackgroundColorContext } from "@/ui/hooks/use-body-background-color-context";
import classNames from "classnames";

type TitleProps = {
    themeColor?: "white" | "gray";
    as: "h1" | "h2" | "h3" | "h4";
    children: React.ReactNode;
    titleClassName?: string;
    titlePosition?: "text-center" | "text-left" | "text-right";
    titlePadding?: true | false;
};

export default function Title({
    themeColor = "white",
    as: Tag,
    children,
    titleClassName,
    titlePosition = "text-center",
    titlePadding = true,
}: TitleProps) {
    const { theme } = useContext(BackgroundColorContext);

    const titleSize = classNames({
        "text-[1.5rem]": Tag === "h1",
        "text-[1.25rem]": Tag === "h2",
        "text-4": Tag === "h3" || Tag === "h4",
    });

    const titleColor = classNames({
        "": themeColor === "white",
        "bg-light-gray text-white":
            themeColor === "gray" && theme === "bg-gray-black text-white",
        "bg-light-white":
            themeColor === "gray" && theme !== "bg-gray-black text-white",
    });

    return (
        <div
            className={classNames(
                `${titleColor}`,
                `${titlePosition}`,
                `${titlePadding ? "py-2 px-4" : ""}`,
                "rounded-lg"
            )}
        >
            <Tag className={classNames(`${titleSize}`, `${titleClassName}`)}>
                {children}
            </Tag>
        </div>
    );
}
