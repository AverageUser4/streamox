import pt from 'prop-types';

export const streamerPT = pt.shape({
  _id: pt.string.isRequired,
  name: pt.string.isRequired,
  description: pt.string.isRequired,
  imageSrc: pt.string.isRequired,
  upvotesCount: pt.number.isRequired,
  downvotesCount: pt.number.isRequired,
  userVote: pt.number.isRequired,
  // votes: pt.arrayOf(pt.shape({
  //   id: pt.string,
  //   vote: pt.string,
  // })).isRequired,
});

export const arrayOfStreamersPT = pt.arrayOf(streamerPT);