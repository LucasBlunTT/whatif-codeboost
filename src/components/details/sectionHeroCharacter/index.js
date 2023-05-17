import { SectionCharacterStyle } from "./styles";
import { Container } from "../../../styles/global";
import ImageCharacter from "../../../assets/characterPlus.jpg";
import Image from "next/image";

export function SectionHeroCharacter({ data }) {
    return (
        <SectionCharacterStyle>
            <Container>
                <div className="image">
                    <Image src={data.character.image_character.url}
                        width={data.character.image_character.dimensions.width}
                        height={data.character.image_character.dimensions.height}
                        alt="Imagem Character" />
                </div>
                <div className="info">
                    <span>A História</span>
                    <div>
                        <h1>{data.character.name_character}</h1>
                        <p>
                            {data.character.description_character[0].text}
                        </p>
                    </div>

                </div>
            </Container>
        </SectionCharacterStyle>
    )
}