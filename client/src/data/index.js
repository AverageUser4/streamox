export * from './prop-types';

const API_BASE = 'http://127.0.0.1:3000/';
export const API_STREAMERS_LIST = API_BASE + 'streamers';
export const API_SINGLE_STREAMER_WILDCARD = API_BASE + 'streamers/:id';
export const API_ADD_STREAMER = API_BASE + 'streamers';
export const API_VOTE_WILDCARD = API_BASE + 'streamers/:id/vote';
export const API_IMAGES = API_BASE;

export const PATH_LANDING = '/';
export const PATH_STREAMERS_LIST = '/streamers/list';
export const PATH_SINGLE_STREAMER_PAGE_WILDCARD = '/streamers/:id';

export const STREAMER_MAX_NAME_LENGTH = 50;
export const STREAMER_MAX_DESCRIPTION_LENGTH = 250;