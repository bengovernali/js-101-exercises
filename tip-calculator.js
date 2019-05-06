function tipAmount(bill, service) {
  if (service === 'good') {
    return bill * 0.20
  } else if (service === 'fair') {
    return bill * 0.15
  } else {
    return bill * 0.10
  }
}
  
const tip = tipAmount(100, 'bad')
console.log(tip)