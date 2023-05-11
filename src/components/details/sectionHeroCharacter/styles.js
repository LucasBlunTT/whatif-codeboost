import { styled } from '../../../styles';
import { Container } from '../../../styles/global';

export const SectionCharacterStyle = styled("section", {
    marginTop: "9.8rem",
    height: 631,
    [`${Container}`]: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
        borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    },
    ".image": {
        borderRadius: "5px",
        overflow: "hidden",
        height: "100%",
    },
    ".info": {
        flex: 1,
        maxWidth: 650,
        marginLeft: 32,
        display: "flex",
        span: {
            fontWeight: 400,
            fontSize: "1.8rem",
            lineHight: "2.7rem",
            color: "$gray400",
            opacity: 0.6,
        },
        "& > div": {
            flex: 1,
            maxWidth: 546,
            paddingLeft: 24,
            marginLeft: 19,
            h1: {
                fontWeight: 600,
                fontSize: "6.1rem",
                lineHight: "7.1rem",
                color: "$white",
                marginBottom: 13,
            },
            p: {
                fontWeight: 400,
                fontSize: "1.6rem",
                lineHight: "2.4rem",
                color: "$gray400",
            },
        },
    },
})