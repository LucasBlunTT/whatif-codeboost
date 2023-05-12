
import { PageTitle } from "../components/PageTitle";
import { ListCharacters } from "../components/home/listCharacters";
import { SectionHero } from "../components/home/sectionHero";

export default function Home() {
  return (
    <>
      <PageTitle title={"What If? - Codeboost"} description={"Um projeto desenvolvido no curso Codeboost"} />
      <SectionHero />
      <ListCharacters />
    </>
  )
}