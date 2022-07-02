module.exports = function toReadable (number) {
    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20)
        return nums[number];

    let x = number % 10;

    if (number < 100)
        return tens[Math.floor(number / 10) - 2] + (x ? " " + nums[x] : "");
    else if (number < 1000)
        return nums[Math.floor(number / 100)] + " hundred" + (number % 100 == 0 ? "" : " " + toReadable(number % 100));
}
