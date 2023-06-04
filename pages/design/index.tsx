import {
    BackgroundColorContext,
    useBodyColor,
} from "@/ui/hooks/use-body-background-color-context";
import Header from "@/ui/base/header";
import Footer from "@/ui/base/footer";
import Body from "@/ui/base/body";

export default function Design() {
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
