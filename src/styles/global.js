import { globalCss, styled } from "./index";

export const GlobalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        textDecoration: "none",
        outline: "none",
        border: "none",
        boxSizing: "border-box",
        fontFamily: "Poppins, sans-serif",
    },
    html: {
        fontSize: "62.5%",
    },
    body: {
        "-webkit-font-smoothing": "antialiased",
        background: "linear-gradient(119.36deg, #010101 0%, #000000 100%)",
        color: "$white",
    },
    img: {
        maxWidth: "100%",
        display: "block",
    },
    button: {
        cursor: "pointer",
    }
})

export const Container = styled("div", {
    width: "100%",
    maxWidth: 1216,
    margin: "0 auto"
})