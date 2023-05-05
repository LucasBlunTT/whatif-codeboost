import { styled } from "../../../styles"
import bgHero from "../../../assets/bg-hero.jpg"
import { Container } from '../../../styles/global';

export const SectionHeroStyle = styled("section", {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: 731,
    background: `url(${bgHero.src}) no-repeat top center`,
    backgroundSize: "cover",
    paddingTop: 96,
    display: "flex",
    [`${Container}`]: {
        display: "flex",
        alignItems: "flex-start",
    },
    "&:after": {
        content: "",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 300,
        backgroundImage: "Linear-gradient(transparent, #000000)",
        zIndex: -1,
    }
});

export const AreaSocial = styled("div", {
    width: 72,
    height: "100%",
    borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    ul: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        listStyle: "none",
        padding: "30px 0",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        li: {
            "&:not(:last-child)": {
                marginBottom: 32,
            },
        },
        a: {
            display: "block",
        },
    },
})

export const ContentText = styled("div", {
    height: "100%",
    paddingLeft: 96,
    paddingRight: 71,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
    paddingBottom: 31,
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    ".left": {
        flex: 1,
        maxWidth: 574,
        paddingBottom: "10.1rem"
    },
})