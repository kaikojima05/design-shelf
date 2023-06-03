import { useContext } from "react";
import { BackgroundColorContext } from "@/ui/hooks/use-body-background-color-context";
import classNames from "classnames";
import Title from "@/ui/base/title";

type ContentBoxProps = {
    contentTitle?: string;
    children: React.ReactNode;
    boxClassName?: string;
};

export default function ContentBox({
    contentTitle,
    children,
    boxClassName,
}: ContentBoxProps) {
    const { theme } = useContext(BackgroundColorContext);

    const backgroundColor = classNames(
        `${
            theme === "bg-gray-black text-white"
                ? "bg-orange-300"
                : "bg-gray-black text-orange-300"
        }`
    );

    return (
        <div className={classNames(`${boxClassName}`)}>
            {contentTitle && (
                <Title
                    as="h2"
                    themeColor="white"
                    titleClassName={classNames(
                        `${backgroundColor}`,
                        "inline-block py-[0.125rem] px-4 rounded-lg"
                    )}
                    titlePosition="text-left"
                    titlePadding={false}
                >
                    {contentTitle}
                </Title>
            )}
            <div className="text-[0.875rem] leading-[0.9375rem] mt-7">
                {children}
            </div>
        </div>
    );
}
