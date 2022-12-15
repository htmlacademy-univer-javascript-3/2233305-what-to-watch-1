import {NameSpace} from '../../const';
import {State} from '../../types/state';


export const getFilmsCount = (state: State): number => state[NameSpace.Films].filmsCount
