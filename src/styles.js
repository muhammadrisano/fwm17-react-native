import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  box:{
    width: 300,
    height: 350,
    backgroundColor: 'yellow',
    alignItems: 'flex-start'
  },
  title:{
    fontSize: 30,
    color: '#023423'
  },
  boxChild:{
    width: 60,
    height: 60,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    backgroundColor: 'light blue'
  },
  btnClick: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 16,
    backgroundColor: 'blue',
   
  },
  logo:{
    width: 30,
    height: 30
  },
  textBtn: {
    color: 'white',
  }
})

export default styles