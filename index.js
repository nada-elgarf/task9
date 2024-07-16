function scoreWithIf (score) {
  if (isNaN(score)) {
    return 'Not a Number X'
  }

  if (score === 100) {
    return 'Perfect Score'
  }

  if (score < 0 || score > 100) {
    return `Invalid Score ${score}`
  }

  if (score >= 85 && score < 100) {
    return 'You got an A'
  } else if (score >= 75 && score < 85) {
    return 'You got a B'
  } else if (score >= 65 && score < 75) {
    return 'You got a C'
  } else if (score >= 50 && score < 65) {
    return 'You got a D'
  } else if (score >= 0 && score < 50) {
    return 'You got a FC'
  }
}

function scoreWithSwitch (score) {
  switch (true) {
    case isNaN(score):
      return 'Not a Number X'
    case score === 100:
      return 'Perfect Score'
    case score < 0 || score > 100:
      return `Invalid Score ${score}`
    case score >= 85 && score < 100:
      return 'You got an A'
    case score >= 75 && score < 85:
      return 'You got a B'
    case score >= 65 && score < 75:
      return 'You got a C'
    case score >= 50 && score < 65:
      return 'You got a D'
    case score >= 0 && score < 50:
      return 'You got a FC'
    default:
      return 'Invalid Score X'
  }
}
