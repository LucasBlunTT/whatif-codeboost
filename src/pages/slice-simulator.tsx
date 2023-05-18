import { SliceSimulator } from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

import { components } from '../../slices/index';

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={(props) => <SliceZone {...props} components={components} />}
    />
  );
};

export default SliceSimulatorPage;
