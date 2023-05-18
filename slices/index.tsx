// ../slices/index.js

import React from 'react';
import { SliceComponentType } from '@prismicio/react';

// Defina o tipo do objeto `components`
type ComponentsType = Record<string, SliceComponentType<any, unknown>>;

// Crie os componentes que deseja exportar
const MeuComponente: SliceComponentType<any, unknown> = () => {
  // Implementação do componente MeuComponente
  return <div>Meu Componente</div>;
};

const OutroComponente: SliceComponentType<any, unknown> = () => {
  // Implementação do componente OutroComponente
  return <div>Outro Componente</div>;
};

// Exporte os componentes como um objeto
export const components: ComponentsType = {
  MeuComponente,
  OutroComponente,
};
