import classNames from "classnames";

type BodyProps = {
    children?: React.ReactNode;
};

export default function Body({ children }: BodyProps) {
    return (
        <main
            className={classNames("mt-36 mx-4", "md:mx-[17%]", "xl:mx-[22%]")}
        >
            {children || (
                <p className="text-center text-purple">
                    WE ARE STILL GETTING READY...
                </p>
            )}
        </main>
    );
}
