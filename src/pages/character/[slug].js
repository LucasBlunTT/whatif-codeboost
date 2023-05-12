import { PageTitle } from "../../components/PageTitle";
import { SectionHeroCharacter } from "../../components/details/sectionHeroCharacter";
import { ListCharacters } from "../../components/home/listCharacters";

export default function PageCharacter() {
    return (
        <>
            <PageTitle title={"What If? - Codeboost"} description={"Um projeto desenvolvido no curso Codeboost"} />
            <SectionHeroCharacter />
            <ListCharacters />
        </>
    )
}