import { Container } from '../../../styles/global';
import { AreaSocial, ContentText, SectionHeroStyle } from './styles';
import IconYouTube from '../../../assets/youtube.svg';
import IconInstagram from '../../../assets/instagram.svg';
import Image from 'next/image';
import { PopupVideo } from '../../PopupVideo';

const socials = [
  {
    name: 'YouTube',
    url: '#',
    icon: IconYouTube,
  },
  {
    name: 'Instagram',
    url: '#',
    icon: IconInstagram,
  },
];

export function SectionHero({ data }) {
  return (
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            {socials.map(({ name, url, icon }) => {
              return (
                <li key={`social-${name}`}>
                  <a href={url} target="_blank" rel="noreferrer">
                    <Image src={icon} alt={name} />
                  </a>
                </li>
              );
            })}
          </ul>
        </AreaSocial>

        <ContentText>
          <div className="left">
            <h3 data-aos="fade-left">{data.subtitle_hero}</h3>
            <h1 data-aos="fade-left">{data.title_hero}</h1>
            <p data-aos="fade-left">{data.description_hero[0].text}</p>
            <a
              data-aos="fade-left"
              href={data.url_button.url}
              target="_blank"
              rel="noreferrer"
            >
              {data.label_button}
            </a>
          </div>

        </ContentText>
      </Container>
    </SectionHeroStyle>
  );
}
