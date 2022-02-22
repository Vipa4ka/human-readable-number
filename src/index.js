module.exports = function toReadable(number) {
    let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    // let c = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  
    let numberString = number.toString()
    if (number === 0) {
        return 'zero';
    } else if (number < 20) {
        return a[number];
    } else if (number < 100) {
        return `${b[numberString.charAt(0)]} ${a[numberString.charAt(1)]}`.trim();
    } else if (number > 99 && number%100 !=0 ) {
        return  `${a[numberString.charAt(0)] +' hundred'} ${toReadable(number%100)}`.trim();
    } else {
       return `${a[numberString.charAt(0)] +' hundred'}`
    }
}