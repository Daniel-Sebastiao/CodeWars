// Daniel Sebastião😜

const reverserNumber = (number) => {
    const integer  = Number.isInteger(number);

    // Checking Wrong way
    if(number < 0 && integer === false) return undefined;

    // Checking Right Way
    if(number > 0 && integer === true) {
        const result = number
        .toString()
        .split('')
        .reverse('')
        .join('')
        console.log(result);
    }
    
}
