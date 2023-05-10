import { styled } from '../../styles';
import { Container } from '../../styles/global';

export const FooterStyle = styled('footer', {

    [`${Container}`]: {
        padding: "40px 0",
        borderTop: "1px solid rgba(255, 255, 255, 0.2);",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        "& > div": {
            display: "flex",
            alignItems: "flex-start",
            strong: {
                color: "$white",
                fontWeight: 700,
                fontSize: "1.4rem",
                lineHeight: " 2.1rem"
            },
            p: {
                flex: 1,
                maxWidth: "59.3rem",
                fontWeight: 400,
                fontSize: "1.4rem",
                lineHeight: " 2.1rem",
                color: "$gray500",
                marginLeft: "18.6rem"
            }
        }
    }


});