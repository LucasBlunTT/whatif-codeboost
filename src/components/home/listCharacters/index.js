import Image from 'next/image';
import ImageCharacter from '../../../assets/character.jpg';
import LogoMarvel from '../../../assets/logo.svg';
import { Container } from '../../../styles/global';
import { StyleListCharacters, StyleSectionCharacters } from './styles';
import { CardCharacter } from '../../CardCharacter';

export function ListCharacters({ data }) {
  return (
    <StyleSectionCharacters data-aos="fade-up" data-aos-delay="120">
      <Container>
        <div className="title">
          <span data-aos="fade-up">What if</span>
          <h2 data-aos="fade-up" data-aos-delay="100">
            Personagens Marvel
          </h2>
        </div>
        <StyleListCharacters>
          {data.map((character) => {
            return (
              <CardCharacter
                key={character.id}
                image={character.data.image_character.url}
                name={character.data.name_character}
                slug={character.data.slug}
              />
            );
          })}

          <div className="marvel" data-aos="fade-up">
            <Image src={LogoMarvel} alt="Logo marverl" />
          </div>
        </StyleListCharacters>
      </Container>
    </StyleSectionCharacters>
  );
}
