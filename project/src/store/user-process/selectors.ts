import {State} from '../../types/state';
import {UserData} from '../../types/types';
import {AuthorizationStatus, NameSpace} from '../../const';

export const getUser = (state: State): UserData | undefined => state[NameSpace.User].user;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
