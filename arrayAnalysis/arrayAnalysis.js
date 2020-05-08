export function analyze(array) {
    const average = array.reduce((avg,number) => avg + number/array.length, 0);
    const min = array.reduce((min,number) => Math.min(min,number),Number.MAX_VALUE);
    const max = array.reduce((max,number) => Math.max(max,number),Number.MIN_VALUE);
    const length = array.length;
    return {average,min,max,length}
}