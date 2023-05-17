import Image from 'next/image';
import { Container } from '../../../styles/global';
import { StyleSectionHeroCharacter } from './styles';

export function SectionHeroCharacter({ data }) {
  return (
    <StyleSectionHeroCharacter>
      <Container>
        <div className="image" data-aos="fade-right">
          <Image
            src={data.image_character.url}
            width={data.image_character.dimensions.width}
            height={data.image_character.dimensions.height}
            alt="Image Person"
          />
        </div>
        <div className="info" data-aos="fade-left" data-aos-delay="100">
          <span>A história</span>
          <div className="text">
            <h1 className="title">{data.name_character}</h1>
            <p className="text">{data.description_character[0].text}</p>
          </div>
        </div>
      </Container>
    </StyleSectionHeroCharacter>
  );
}
