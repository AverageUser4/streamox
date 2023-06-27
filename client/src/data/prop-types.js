import pt from 'prop-types';

export const streamerPT = {
  _id: pt.string.isRequired,
  name: pt.string.isRequired,
  description: pt.string.isRequired,
  imageSrc: pt.string.isRequired,
  votes: pt.arrayOf(pt.shape({
    id: pt.string,
    vote: pt.string,
  })).isRequired,
};

export const arrayOfStreamersPT = pt.arrayOf(pt.shape(streamerPT));