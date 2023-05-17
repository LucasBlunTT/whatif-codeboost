import { PageTitle } from "../../components/PageTitle";
import { SectionHeroCharacter } from "../../components/details/sectionHeroCharacter";
import { ListCharacters } from "../../components/home/listCharacters";
import { getPrismicClient } from "../../service/prismic";

export default function PageCharacter(character) {

    return (
        <>
            <PageTitle title={"What If? - Codeboost"} description={"Um projeto desenvolvido no curso Codeboost"} />
            <SectionHeroCharacter data={character} />
            {/* <ListCharacters />*/}
        </>
    )
}

export const getStaticPaths = async () => {
    const prismic = getPrismicClient();

    const characters = await prismic.getAllByType('character');

    const paths = characters.map(({ data }) => {
        return {
            params: { slug: data.slug },
        };
    });

    return {
        paths,
        fallback: true
    }
};

export const getStaticProps = async (context) => {
    const prismic = getPrismicClient();

    const characters = await prismic.getAllByType('character');

    const character = characters.find(({ data }) => {
        return data.slug === context.params.slug
    })

    return {
        props: {
            character: character.data,
        },
    };
}