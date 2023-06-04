import {
    BackgroundColorContext,
    useBodyColor,
} from "@/ui/hooks/use-body-background-color-context";
import Body from "@/ui/base/body";
import Header from "@/ui/base/header";
import Footer from "@/ui/base/footer";

export default function Uses() {
    const [bodyColor, setBodyColor] = useBodyColor();

    return (
        <>
            <BackgroundColorContext.Provider
                value={{ theme: bodyColor, setTheme: setBodyColor }}
            >
                <Header />
                <Body></Body>
                <Footer />
            </BackgroundColorContext.Provider>
        </>
    );
}
