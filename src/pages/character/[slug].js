import { useRouter } from "next/router";
import { SectionHeroCharacter } from "../../components/details/sectionHeroCharacter";
import { ListCharacters } from "../../components/home/listCharacters";

export default function PageCharacter() {
    return (
        <>
            <SectionHeroCharacter />
            <ListCharacters />
        </>
    )
}