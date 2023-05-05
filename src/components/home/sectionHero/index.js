/* eslint-disable react/no-unescaped-entities */
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
                        <h1>Marvel's WHAT IF... ?</h1>
                        <p>Disponível no Disney+, What If… ? é uma série de animação que leva o público para um terreno desconhecido ao contar, de forma alternativa, momentos cruciais do Universo Cinematográfico Marvel, imaginando o que teria acontecido aos super-heróis se a história fosse totalmente diferente e se passasse em outra realidade.</p>
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
