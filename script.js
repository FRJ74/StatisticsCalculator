/* Calculate mean logic */
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);  
    const median = getMedian(numbers);

    console.log(getMode(numbers));

    document.querySelector("#median").textContent = median;  
    document.querySelector("#mean").textContent = mean;
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
        (el in counts) ? counts[el] += 1 : counts[el] = 1;
    });
    return counts;
};