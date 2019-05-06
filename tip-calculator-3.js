function tipAmount(bill, service) {
    if (service === 'good') {
      return bill * 0.20
    } else if (service === 'fair') {
      return bill * 0.15
    } else {
      return bill * 0.10
    }
}
  
function totalAmount(bill, service) {
    return bill + tipAmount(bill, service)
}
  
function splitAmount(bill, service, people) {
    return totalAmount(bill, service) / people
}