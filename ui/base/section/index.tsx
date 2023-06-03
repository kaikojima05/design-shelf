import classNames from "classnames";

type sectionProps = {
    isTopMargin?: boolean;
    children: React.ReactNode;
    sectionClassName?: string;
    articleClassName?: string;
};

export default function sectionProps({
    isTopMargin = true,
    children,
    sectionClassName,
    articleClassName,
}: sectionProps) {
    return (
        <section
            className={classNames(
                `${isTopMargin ? "mt-36" : "mt-14"}`,
                `${sectionClassName}`
            )}
        >
            <article className={articleClassName}>{children}</article>
        </section>
    );
}
