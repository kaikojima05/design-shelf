import About from "@/ui/pages/about/index";
import Header from "@/ui/base/header";
import {
    BackgroundColorContext,
    useBodyColor,
} from "@/ui/hooks/use-body-background-color-context";
import Body from "@/ui/base/body";
import Footer from "@/ui/base/footer";

export default function Home() {
    const [bodyColor, setBodyColor] = useBodyColor();

    console.log(bodyColor);
    console.log(setBodyColor);

    return (
        <>
            <BackgroundColorContext.Provider
                value={{ theme: bodyColor, setTheme: setBodyColor }}
            >
                <Header />
                <Body>
                    <About />
                </Body>
                <Footer />
            </BackgroundColorContext.Provider>
        </>
    );
}
