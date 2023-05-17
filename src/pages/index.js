import { ListCharacters } from '../components/Home/ListCharacters';
import { SectionHero } from '../components/Home/sectionHero';
import { PageTitle } from '../components/PageTitle';
import { getPrismicClient } from '../service/prismic';

export default function Home({ dataPage, characters }) {
  return (
    <>
      <PageTitle
        title="What If? - Codeboost"
        description="Um projeto desenvolvido no curso codeboost"
      />
      {dataPage && <SectionHero data={dataPage} />}
      {characters && <ListCharacters data={characters} />}
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const contentsPages = await prismic.getSingle('home');
  const characters = await prismic.getAllByType('character');
  return {
    props: {
      dataPage: contentsPages.data,
      characters,
    },
    revalidate: 86400,
  };
};
