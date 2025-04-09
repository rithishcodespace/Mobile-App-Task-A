import React from "react";
import {Text,View,TouchableOpacity,ImageBackground,TextInput,Switch,ScrollView,Alert,SafeAreaView,Modal,Image} from "react-native";
import { useState } from "react";

const App = () =>{

  const [isEnabled, setIsEnabled] = useState(false);
  const [name,setname] = useState("");
  const [emailId,setemailId] = useState("");
  const [successmessage,setsuccessmessage] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  function handlelogout()
  {
    Alert.alert("Logged out successully");
  }

  return(
    <View style={{ flex: 1 }}>

      <SafeAreaView>
        <ScrollView>

        <View style={{position:"relative"}}>
          <ImageBackground 
          source={{uri:"https://img.freepik.com/free-vector/gradient-violet-glowing-particles-background_23-2148338416.jpg?t=st=1744092915~exp=1744096515~hmac=5b679bda2e8427a4145e371ee241881718b212a4cb47f63c5f0dcae4180b2813&w=1380"}}
          resizeMode="cover"
          style={{height:225}}
          />

          <ImageBackground
          source={{uri:"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1744093507~exp=1744097107~hmac=ece0b55fd715f4c62a1f1896b9cbfb6cde0b609b3999173c51ff5fafdad647dc&w=740"}}
          style={{
            marginLeft: 125,
            height: 140,
            width: 140,
            position:"absolute",
            top:40,
            borderRadius: 80, // half of 100 to make it circular
            overflow: "hidden", // optional, ensures round clipping
          }}
          resizeMode="cover"
          />

          <TextInput value={name} style={{position:"absolute",color:"white",left:"50%",top:170,width:200,transform: [{ translateX: -100 }],fontSize:20}}></TextInput>
        </View>

        <View style={{height:450,width:350,marginLeft:14,marginTop:40,borderRadius:15,shadowColor:"gray",elevation: 6,borderColor:"gray",backgroundColor: isEnabled ? "black" : "white"}}>
          <Text style={{padding:18,fontSize:17,fontWeight:"bold"}}>Profile Infomation</Text>
          <Text style={{marginLeft:15}}>Name:</Text>
          <TextInput value={name} onChangeText={(text)=>setname(text)} placeholder="Enter your name" style={{height:50,position:"relative",left:16,marginTop:7,borderRadius:5,width:320,backgroundColor:"lightgray"}}/>
          <Text style={{marginLeft:15,marginTop:20}}>Email:</Text>
          <TextInput value={emailId} onChangeText={(text)=>setemailId(text)} placeholder="Enter your emailId" style={{height:50,position:"relative",left:16,marginTop:7,borderRadius:5,width:320,backgroundColor:"lightgray"}}/>
          <Text style={{marginLeft:15,marginTop:30,position:"relative",top:26}}>Dark Mode</Text>
          <Switch
            thumbColor={isEnabled ? 'darkviolet' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <TouchableOpacity style={{height:45,width:325,backgroundColor:"blue",borderRadius:8,flex:0,alignItems:"center",justifyContent:"center",position:"relative",left:14,marginTop:35}} onPress={()=>setsuccessmessage(true)}>
            <Text>SAVE CHANGES</Text>
          </TouchableOpacity>
        </View>

        <View style={{height:350,width:350,marginLeft:14,marginTop:40,borderRadius:15,shadowColor:"gray",elevation: 6,borderColor:"gray",backgroundColor: isEnabled ? "black" : "white"}}>
        <Text style={{marginLeft:15,marginTop:60,fontWeight:"bold"}}>Preferences                                                       &gt;</Text>
        <Text style={{marginLeft:15,marginTop:60}}>Languages                                                   &gt;</Text>
        <Text style={{marginLeft:15,marginTop:60}}>Notification                                                 &gt;</Text>
        </View>

        <View style={{height:350,width:350,marginLeft:14,marginTop:40,borderRadius:15,shadowColor:"gray",elevation: 6,borderColor:"gray",backgroundColor: isEnabled ? "black" : "white"}}>
        <Text style={{marginLeft:15,marginTop:60,}}>General                                                         &gt;</Text>
        <Text style={{marginLeft:15,marginTop:60}}>Account Info                                                &gt;</Text>
        <Text style={{marginLeft:15,marginTop:60}}>Security                                                        &gt;</Text>
        </View>

        <TouchableOpacity style={{position:"flex",justifyContent:"center",alignItems:"center",height:60,backgroundColor:"blue",margin:20,borderRadius:10}} onPress={handlelogout}>
          <Text>Logout</Text>
        </TouchableOpacity>

        </ScrollView>

        <Modal visible={successmessage} animationType="slide" transparent={true} onRequestClose={()=>setsuccessmessage(!successmessage)}>
          <View style={{flex:0,alignItems:"center",justifyContent:"center",backgroundColor:'rgba(0,0,0,0.5)',height:800}}>
            <View style={{height:280,width:320,borderRadius:15,shadowColor:"gray",elevation: 6, backgroundColor:'black',flex:0,alignItems:"center",justifyContent:"center",paddingBottom:100}}>
            <Image
            source={{ uri: 'https://www.pngall.com/wp-content/uploads/9/Green-Tick-Vector-PNG-Images.png' }}
            style={{ width: 100, height: 100 }} />
            <Text style={{fontSize:25}}>Success!!</Text>
            <TouchableOpacity  onPress={()=>setsuccessmessage(false)} style={{position:"relative",top:50,backgroundColor:"blue",flex:1,justifyContent:"center",alignItems:"center",height:50,width:250,borderRadius:10}}>
              <Text>close</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>

      </SafeAreaView>

    </View>  
  )
}

export default App;

const ModalComponent = () =>{
  return(
    <View>
      
    </View>  
  )
}