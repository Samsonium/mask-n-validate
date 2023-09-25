import InputMapping from './InputMapping';
import SelectMapping from './SelectMapping';

/** Input mapping item */
type Mapping = ({

    /** Element name in result object */
    name: string;

    /** Class list */
    class?: string;
} & (InputMapping | SelectMapping)) | string;
export default Mapping;
