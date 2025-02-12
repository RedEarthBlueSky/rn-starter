//  Create style sheet as JS Object rather than use key word StyleSheet.create({})

const parentStyles = {
  textStyle: { fontSize: 30 },
}

const screenStyles = {
  TOButton: { 
    alignItems: 'center',
    alignSelf: 'center', 
    backgroundColor: '#e31cad',
    borderRadius: 5,
    marginTop: 25, 
    paddingHorizontal: 17,
    paddingVertical: 8,
    width: 220,
  },
  TOButtonText: {
    fontSize: 14, fontWeight: 'bold', color: '#fff'
  },
  buttonWrapper: {
    alignSelf: 'center', 
    marginTop: 15,
    width: 220, 
  },
  screenTextStyle: {
    ...parentStyles.textStyle,
  },
  listViewStyle: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 10,
  },
  listTextStyle: {
    fontSize: 24,
  }
}

export { screenStyles }