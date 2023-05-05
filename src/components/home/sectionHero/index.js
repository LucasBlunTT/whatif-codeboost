import { SectionHeroStyle, AreaSocial, ContentText } from "./styles";
import { Container } from "../../../styles/global";

import IconYoutube from '../../../assets/youtube.svg'
import InconInstagram from '../../../assets/instagram.svg'
import Image from "next/image";
import { PopupVideo } from "../../popupVideo";

const socials = [
    {
        name: "Youtube",
        url: "#",
        icon: IconYoutube,
    },
    {
        name: "Instagram",
        url: "#",
        icon: InconInstagram,
    },
];

export function SectionHero() {
    return (
        <SectionHeroStyle>
            <Container>
                <AreaSocial>
                    <ul>
                        {socials.map(({ name, url, icon }) => {
                            return (
                                <li key={`social-${name}`}>
                                    <a href={url} target="_blank" rel="noreferrer"></a>
                                    <Image src={icon} alt={name} />
                                </li>
                            );
                        })}
                    </ul>
                </AreaSocial>
                <ContentText>
                    <div className="left">
                        <h3>COMING SON</h3>
                        <h1>Lorem ipsum dolor sit amet, elit consectetur</h1>
                        <p>Maecenas tristique eu quam sed pretium. Pellentesque sagittis elit et porttitor consequat. Nam augue turpis, tincidunt commodo lacus at, auctor suscipit ex</p>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            Saiba mais
                        </a>
                    </div>
                    <PopupVideo />
                </ContentText>
            </Container>
        </SectionHeroStyle >
    )
};
