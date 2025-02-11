//  Create style sheet as JS Object rather than use key word StyleSheet.create({})

const parentStyles = {
  textStyle: {
    fontSize: 30,
    // fontWeight: 'bold',
  }
}

const screenStyles = {
  screenTextStyle: {
    ...parentStyles.textStyle,
  }
}

export { screenStyles }