/* Calculate mean logic */
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);  
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers); 

    
    document.querySelector("#median").textContent = median;  
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviationvariance;
}

/* Calculate median */

const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a-b);
    
    return !(sorted.length % 2 === 0) ? getMean([sorted[sorted.length / 2 - 1], sorted[sorted.lenght / 2]])
                               : sorted[Math.floor(sorted.length / 2)]; 
    
}

/* Calculate Mode */

const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
      counts[el] = (counts[el] || 0) + 1;
    })
    if (new Set(Object.values(counts)).size === 1) {
      return null;
    }
    const highest = Object.keys(counts).sort(
      (a, b) => counts[b] - counts[a])[0];
      const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
      return mode.join(", ");
  }
  
  /* Calculate the range */

  const getRange = (array) => Math.max(...array) -  Math.min(...array);

  /* Calculate the variance */

  const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    }, 0)  / array.length;
    return variance;
  }

/* Calculate the standard deviation */

  const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
  }