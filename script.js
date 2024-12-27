/* Calculate mean logic */
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);  
    const median = getMedian(numbers);

    document.querySelector("#median").textContent = median;  
    document.querySelector("#mean").textContent = mean;
}

/* Calculate median */

const getMedian = (array) => {
    const sorted = array.toSorted(function(a,b){return a-b});
    
    return !(array.length % 2) ? getMean([sorted[sorted.length / 2 - 1], sorted[sorted.lenght / 2]])
                               : sorted[Math.floor(sorted.length / 2)] 
    
};