import { StyleListCharacters, StyleSectionCharacters } from "./styles";
import { Container } from "../../../styles/global";
import { CardCharacter } from "../../cardCharacter";
import LogoMarvel from "../../../assets/logo.svg"
import Image from "next/image";
import ImageCharacter from "../../../assets/character.jpg";

const characters = [
    {
        name: "Killmonger",
        image: ImageCharacter,
        slug: "killmonger",
    }
]

export function ListCharacters({ data }) {
    return (
        <StyleSectionCharacters>
            <Container>
                <div className="title">
                    <span>
                        What if
                    </span>
                    <h2>
                        Personagens Marvel
                    </h2>
                </div>
                <StyleListCharacters>
                    {
                        data.map(character => {
                            return (
                                <CardCharacter
                                    key={character.id}
                                    image={character.data.image_character.url}
                                    name={character.data.name_character}
                                    slug={character.data.slug}
                                />
                            )
                        })
                    }
                    <div className="marvel">
                        <Image
                            src={LogoMarvel}
                            alt="LogoMarvel"
                        />
                    </div>
                </StyleListCharacters>
            </Container>
        </StyleSectionCharacters>
    )
}