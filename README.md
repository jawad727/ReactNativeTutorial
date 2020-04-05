# ReactNativeTutorial
Following The Net Ninjas tutorial to create a React Native app.


----

React Native FlexBox

container: {
    flex: 1 //  (usually applied to <View> component)applies flex container to all available space, think of like pieces to a pie. If there is only 1 component with flex:1 it will take all, if there is two they will each take half etc
    flexDirection: "column" // default value, can be changed just like web (row, rowReverse, column Reverse etc)
    justifyContent: // values same as web, but with camelCase 
    alignItems: // values same as web, but with camelCase 
},


----


https://expo.github.io/vector-icons/  <-- Vector image directory

import { MaterialIcons } from "@expo/vector-icons";  <-- Make import to use the directory

Example: <MaterialIcons name="delete" size={18} color="red" />


----