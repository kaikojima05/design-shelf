import { useContext } from "react";
import NextImage from "next/image";
import { BackgroundColorContext } from "@/ui/hooks/use-body-background-color-context";
import classNames from "classnames";
import Title from "@/ui/base/title";
import ContentBox from "@/ui/base/content-box";
import Section from "@/ui/base/section";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function About() {
    const { theme } = useContext(BackgroundColorContext);

    return (
        <>
            <Section
                articleClassName={classNames(
                    "flex justify-center gap-6 flex-col-reverse",
                    "md:flex-row"
                )}
            >
                <div className={classNames("w-full")}>
                    <Title as="h2" themeColor="gray">
                        HI, I'M A WEB ENGINEER.
                    </Title>
                    <ContentBox>
                        <p
                            className={classNames(
                                "leading-5",
                                "whitespace-normap",
                                "md:whitespace-nomal"
                            )}
                        >
                            THIS HP WAS CREATED TO HELP ME LEARN WEB DESIGN.
                            <br />I WILL ACTIVELY REINVENT THE WHEEL.
                            <br />
                            HAPPINESS TO ALL ENGINEERS!
                        </p>
                    </ContentBox>
                </div>
                <div className={classNames("flex items-center justify-center")}>
                    <div
                        className={classNames(
                            `${
                                theme === "bg-gray-black text-white"
                                    ? "border-orange-300"
                                    : "border-light-white"
                            }`,
                            "border-[3px] rounded-[50%] w-[6.5rem] h-[6.5rem] overflow-hidden shadow-2xl duration-300"
                        )}
                    >
                        <NextImage
                            alt="selfie"
                            src="/images/selfie.JPG"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </Section>
            <Section isTopMargin={false}>
                <ContentBox contentTitle="BIO" boxClassName="mb-8">
                    <ContentText headline="1997">
                        BORN IN KAWASAKI CITY, KANAGAWA
                    </ContentText>
                    <ContentText headline="2023">
                        WORKING AT FRONTVISION
                    </ContentText>
                </ContentBox>
            </Section>
            <Section isTopMargin={false}>
                <ContentBox contentTitle="LIKE">
                    <ContentText headline="[COMMIC]">
                        KATSUHIRO OHTMO, KIM JUNG GI
                    </ContentText>
                    <ContentText headline="[MUSIC]">HIKARU UTADA</ContentText>
                </ContentBox>
            </Section>
            <Section isTopMargin={false}>
                <ContentBox contentTitle="CONNECT">
                    <Connect iconName={faGithub} href="/">
                        GITHUB
                    </Connect>
                    <Connect iconName={faTwitter} isAfterNode={true} href="/">
                        TWITTER
                    </Connect>
                </ContentBox>
            </Section>
        </>
    );
}

type ContentTextProps = {
    headline: string;
    children: React.ReactNode;
};

function ContentText({ headline, children }: ContentTextProps) {
    return (
        <div className="flex">
            <p className="w-[6rem]">
                <span>{headline}</span>
            </p>
            <p>{children}</p>
            <hr className="my-3 h-0" />
        </div>
    );
}

type ConnectProps = {
    iconName: IconProp;
    children: React.ReactNode;
    href: string;
    isAfterNode?: boolean;
};

function Connect({
    iconName,
    children,
    href,
    isAfterNode = false,
}: ConnectProps) {
    return (
        <div
            className={classNames(
                "flex items-center gap-4",
                `${isAfterNode && "mt-3"}`
            )}
        >
            <FontAwesomeIcon icon={iconName} className="w-6 h-6" />
            <p>
                <span>
                    <a href={href}>{children}</a>
                </span>
            </p>
        </div>
    );
}
