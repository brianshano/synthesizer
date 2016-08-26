const OCTAVES = ['3', '4'];
const NOTES = new Map([
  ['C', 'left'],
  ['C#', 'black'],
  ['D', 'center'],
  ['D#', 'black'],
  ['E', 'right'],
  ['F', 'left'],
  ['F#', 'black'],
  ['G', 'center'],
  ['G#', 'black'],
  ['A', 'center'],
  ['A#', 'black'],
  ['B', 'right']
]);
export const KEY_CONFIGURATION = OCTAVES.map((octave) => {
  const configuration = [];
  for(let [key, value] of NOTES) {
    configuration.push({note: key.concat(octave), keyPosition: value});
  }
  return configuration;
}).reduce( (prev, next) => prev.concat(next) );
