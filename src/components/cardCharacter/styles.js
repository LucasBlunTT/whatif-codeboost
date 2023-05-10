import { styled } from '../../styles';

export const StyleCard = styled('div', {
    width: '100%',
    maxWidth: '28rem',
    "&:hover": {
        ".image": {
            img: {
                transform: "scale(1.05)"
            }
        },
        ".info": {
            h3: {
                color: "$red800"
            }
        }
    },
    a: {
        display: 'block',
    },
    ".image": {
        width: '100%',
        height: '37.2rem',
        marginBottom: '1.6rem',
        borderRadius: 5,
        overflow: 'hidden',
        img: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: "transform .3s ease"
        }
    },
    ".info": {
        "& > div": {
            display: "flex",
            justifyContent: "space-between",
            h3: {
                fontWeight: 600,
                fontSize: "1.8rem",
                lineHeight: "2.7rem",
                color: "$white",
                marginBottom: 4,
                transition: "color .3s ease"
            },
            span: {
                fontWeight: 400,
                fontSize: "1.4rem",
                lineHeight: "2.1rem",
                color: "$grey500",
            },
        },
        span: {
            fontWeight: 400,
            fontSize: "1.4rem",
            lineHeight: "2.1rem",
            color: "$grey500",
        }
    }
});