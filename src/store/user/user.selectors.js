import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getUserId = createSelector([usersSelector], (state) => state.uid);
export const getUsername = createSelector([usersSelector], (state) => state.username);
export const getRole = createSelector([usersSelector], (state) => state.role);
export const getIsSignedIn = createSelector([usersSelector], (state) => state.isSignedIn);
