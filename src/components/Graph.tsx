import { newPlot } from 'plotly.js-basic-dist';
import { onMount } from 'solid-js';

export default function Graph() {
  let graphDiv: HTMLDivElement;

  onMount(() => {
    newPlot(graphDiv, [{ x: [1, 2, 3], y: [2, 6, 3] }]);
  });
  return <div ref={graphDiv} style={{ width: '400px', height: '400px' }} />;
}
