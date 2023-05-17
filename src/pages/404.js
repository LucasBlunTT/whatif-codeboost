import { PageTitle } from '../components/PageTitle';
import { Section404 } from '../components/PageNotFound';

export default function PageNotFound() {
  return (
    <>
      <PageTitle
        title="What If? - Codeboost | Página não encontrada"
        description="Um projeto desenvolvido no curso codeboost"
      />
      <Section404 />
    </>
  );
}
