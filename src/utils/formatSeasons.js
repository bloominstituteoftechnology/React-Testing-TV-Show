export const formatSeasons = allEpisodes => {
  console.log('formatSeasons.js: ', allEpisodes)
  const seasons = {};
  allEpisodes.forEach(e => {
    if (!seasons.hasOwnProperty(`Season ${e.season}`)) {
      seasons[`Season ${e.season}`] = [];
    }
    seasons[`Season ${e.season}`].push(e);
  });
  console.log(seasons);
  return seasons;
};
