//  Create style sheet as JS Object rather than use key word StyleSheet.create({})
const parentStyles = {
  textStyle: { fontSize: 36, fontWeight: 'bold', marginBottom: 10, },
  boxWrapperOne: {alignItems: 'center',alignSelf: 'center',borderColor: 'grey',borderRadius: 5,borderWidth: 0.5,
    height: 80,marginTop: 30,paddingTop: 12,width: 100},
  TOButton: {alignItems: 'center',alignSelf: 'center', backgroundColor: '#e31cad',borderRadius: 5,
    marginTop: 25, paddingHorizontal: 17,paddingVertical: 8,width: 220,},
} // ****** END parentStyles ******
const screenStyles = {
  TOButton: {...parentStyles.TOButton},
  TOButtonText: {fontSize: 14, fontWeight: 'bold', color: '#fff'},
  buttonWrapper: {alignSelf: 'center',marginTop: 15,width: 220},
  screenTextStyle: {...parentStyles.textStyle},
  listViewStyle: {fontSize: 24,marginLeft: 20,marginTop: 10},
  listTextStyle: {fontSize: 24},
  counterWrapper: {...parentStyles.boxWrapperOne},
  colorWrapper: {...parentStyles.boxWrapperOne,borderWidth: 0,alignSelf: 'left',
    marginLeft: 20,marginTop: 10,width: '73%'}, 
  SSTOButton: {...parentStyles.TOButton, marginTop: 5, },
  ccTextStyle: {fontSize: 24, fontWeight: 'bold', marginTop: 10, marginBottom: 0,}
} // ****** END screenStyles ******

export { screenStyles }