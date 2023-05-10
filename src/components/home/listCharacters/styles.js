import { styled } from "../../../styles";

export const StyleSectionCharacters = styled("section", {
    paddingTop: 56,
    paddingBottom: 72,
    ".title": {
        width: "100%",
        maxWidth: "39.2rem",
        display: "flex",
        alignItems: "center",
        marginBottom: 56,
        span: {
            fontWeight: 400,
            fontSize: "1.8rem",
            lineHeight: "2.7rem",
            color: "$white",
            marginRight: "11.3rem",
            opacity: 0.4,
        },
        h2: {
            position: "relative",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "35px",
            color: "$white",
            maxWidth: "21.6rem",
            paddingLeft: 16,
            "&:before": {
                content: "",
                position: "absolute",
                top: 5.5,
                left: 0,
                width: 2,
                height: 59,
                backgroundColor: "$red800",
            }
        }
    }
});

export const StyleListCharacters = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "4rem 3.3rem",
    ".marvel": {
        width: "28rem",
        height: "36.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
});