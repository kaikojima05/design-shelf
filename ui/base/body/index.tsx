import classNames from "classnames";

type BodyProps = {
    children: React.ReactNode;
};

export default function Body({ children }: BodyProps) {
    return (
        <main className={classNames("mx-4", "md:mx-[17%]", "xl:mx-[22%]")}>
            {children}
        </main>
    );
}
