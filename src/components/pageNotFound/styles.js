import { styled } from '../../styles';
import { Container } from '../../styles/global';

export const StylePageNotFound = styled("section", {
    marginTop: 96,
    paddingTop: 95,
    paddingBottom: 150,
    [`${Container}`]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
        h1: {
            maxWidth: 718,
            fontWeight: 600,
            fontSize: "4.9rem",
            lineHeight: "5.9rem",
            color: "$white",
            marginBottom: 24,
        },
        p: {
            textAlign: "center",
            maxWidth: 641,
            fontWeight: 400,
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
            color: "$white",
            marginBottom: 40,
        },
        a: {
            display: "inline-block",
            fontWeight: 600,
            fontSize: "1.6rem",
            lineHeight: "54px",
            color: "white",
            padding: "0px 73px",
            backgroundColor: "$red900",
            borderRadius: 5,
            marginBottom: 87,
            transition: "filter .3s ease",
            "&:hover": {
                filter: "brightness(0.8)",
            },
        },
    }
})