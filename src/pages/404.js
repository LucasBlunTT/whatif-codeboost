import { PageTitle } from "../components/PageTitle";
import { ComponentPageNotFound } from "../components/pageNotFound";

export default function PageNotFound() {
    return (
        <>
            <PageTitle title={"What If? - Codeboost | Pagina não encontrada"} description={"Um projeto desenvolvido no curso Codeboost"} />
            <ComponentPageNotFound />
        </>
    )
}