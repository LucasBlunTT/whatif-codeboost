import { useEffect } from "react";
import { PageTitle } from "../components/PageTitle";
import { ListCharacters } from "../components/home/listCharacters";
import { SectionHero } from "../components/home/sectionHero";
import { getPrismicClient } from "../service/prismic";

export default function Home({ dataPage, characters }) {

  useEffect(() => {


  }, []);

  return (
    <>
      <PageTitle title={"What If? - Codeboost"} description={"Um projeto desenvolvido no curso Codeboost"} />
      <SectionHero data={dataPage} />
      <ListCharacters data={characters} />
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentPages = await prismic.getSingle('home');

  const characters = await prismic.getAllByType('character');

  return {
    props: {
      dataPage: contentPages.data,
      characters,
    },
    revalidate: 60,
  };
}