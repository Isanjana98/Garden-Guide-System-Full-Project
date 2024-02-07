import React, {useEffect, useState} from "react";
import { View, TouchableOpacity, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PlaceInfoBox from "../components/PlaceInfoBox";
import { places } from "../constants";
import axios from "axios";
import {BASE_URL} from "../constants/config";

const MapPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null)
  // const [popupData, setPopupData] = useState({
  //   loc_name: "",
  //   loc_desc: "",
  //   // plantNames: [],
  // });

  useEffect(()=>{
    if(popupData != null){
      console.log(popupData)
      setShowPopup(true);
    }
  },[popupData])

  const handleMapIconClick = (loc_id) => {
    // Find the clicked location in the places array
    // const clickedLocation = places.find((place) => place.loc_id === loc_id);

    // if (clickedLocation) {
    //   setPopupData({
    //     loc_name: clickedLocation.loc_name,
    //     loc_desc: clickedLocation.loc_desc,
    //   });
    //   setShowPopup(true);
    // }

    axios.get(`${BASE_URL}/garden/area_detail_by_id?area_id=${loc_id}`).then((res)=>{
      console.log(loc_id)
      setPopupData(null);
      setPopupData({
        loc_name : res.data.name,
        loc_desc : res.data.description
      })
      setShowPopup(true);
    })

  };



  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <ImageBackground
      source={require("../assets/images/bg3.png")}
      style={{ flex: 1 }}
    >
      <Image
        source={require("../assets/images/map.png")}
        style={{ flex: 1, height: "100%", width: "110%" }}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.buttonTopLeft}
        onPress={() => handleMapIconClick(1)}
      >
        <Icon name="map-pin" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonTopMiddle}
        onPress={() => handleMapIconClick(2)}
      >
        <Icon name="map-pin" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTopRight}
        onPress={() => handleMapIconClick(3)}
      >
        <Icon name="map-pin" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBottomLeft}
        onPress={() => handleMapIconClick(4)}
      >
        <Icon name="map-pin" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBottomMiddle}
        onPress={() => handleMapIconClick(5)}
      >
        <Icon name="map-pin" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBottomRight}
        onPress={() => handleMapIconClick(6)}
      >
        <Icon name="map-pin" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonMiddleLeft}
        onPress={() => handleMapIconClick(7)}
      >
        <Icon name="map-pin" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonMiddleRight}
        onPress={() => handleMapIconClick(8)}
      >
        <Icon name="map-pin" size={30} color="white" />
      </TouchableOpacity>

      {/* Popup */}
      {showPopup && popupData &&(
          <PlaceInfoBox
              visible={showPopup}
              onClose={handlePopupClose}
              placeName={popupData.loc_name}
              placeDescription={popupData.loc_desc}
              // plantNames={popupData.plantNames}
          />
      )}
    </ImageBackground>
  );
};

const styles = {
  //First Zone
  buttonTopLeft: {
    position: "absolute",
    top: "40%",
    left: "25%",
  },
  //Second Zone
  buttonTopMiddle: {
    position: "absolute",
    top: "15%",
    left: "50%",
    alignSelf: "center",
  },
  //Third Zone
  buttonTopRight: {
    position: "absolute",
    top: "20%",
    right: "25%",
  },
  //Fourth Zone
  buttonBottomLeft: {
    position: "absolute",
    bottom: "40%",
    left: "25%",
  },
  buttonMiddleLeft: {
    position: "absolute",
    alignSelf: "center",
    top: "40%",
    right: "25%",
  },
  buttonBottomMiddle: {
    position: "absolute",
    top: "70%",
    left: "20%",
    alignSelf: "center",
  },
  buttonBottomRight: {
    position: "absolute",
    bottom: "40%",
    right: "35%",
  },

  buttonMiddleRight: {
    position: "absolute",
    top: "75%",
    right: "25%",
  },
};

export default MapPage;

// import * as React from "react";
// import { StyleSheet, View, Text, Image } from "react-native";
// import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

// const MapPage = () => {
//   return (
//     <View style={styles.map}>
//       <Image
//         style={styles.icon}
//         contentFit="cover"
//         source={require("../assets/images/bg7.png")}
//       />
//       <Image
//         style={styles.mapEdited1}
//         contentFit="cover"
//         source={require("../assets/images/map.png")}
//       />
//       <View style={styles.mapChild} />
//       <View style={styles.mapItem} />
//       <Text style={[styles.text, styles.textTypo]}>1</Text>
//       <Text style={[styles.placeName, styles.textTypo]}>Place Name</Text>
//       <Image
//         style={[styles.mapInner, styles.mapInnerLayout]}
//         contentFit="cover"
//         source={require("../assets/images/backArrow.png")}
//       />
//       <Image
//         style={[styles.groupIcon, styles.mapInnerLayout]}
//         contentFit="cover"
//         source={require("../assets/images/dropDownIcon.png")}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   textTypo: {
//     color: Color.white,
//     fontFamily: FontFamily.poppinsRegular,
//     fontSize: FontSize.size_xl,
//     position: "absolute",
//   },
//   mapInnerLayout: {
//     height: 13,
//     position: "absolute",
//   },
//   icon: {
//     width: "100%",
//     position: "absolute",
//     height: "100%",
//   },
//   mapEdited1: {
//     top: "10%",
//     left: "12%",
//     width: "80%",
//     height: "60%",
//     position: "absolute",
//   },

//   //White box in page name
//   mapChild: {
//     top: "80%",
//     left: "1.5%",
//     borderRadius: Border.br_6xl,
//     backgroundColor: "rgba(217, 217, 217, 0.08)",
//     width: "97%",
//     height: "10%",
//     position: "absolute",
//   },
//   //Black box in page name
//   mapItem: {
//     top: "82%",
//     left: "5%",
//     borderRadius: Border.br_xs,
//     backgroundColor: "rgba(0, 0, 0, 0.67)",
//     width: "90%",
//     height: "6%",
//     position: "absolute",
//   },
//   //Number
//   text: {
//     top: "83.5%",
//     left: "10%",
//     textAlign: "left",
//   },
//   //place name text
//   placeName: {
//     top: "83.5%",
//     left: "25%",
//     letterSpacing: 2,
//     textAlign: "center",
//     //width: 252,
//     //height: 30,
//   },
//   //BackArrow
//   mapInner: {
//     top: "3.5%",
//     left: "5.5%",
//     width: 8,
//   },
//   groupIcon: {
//     top: "3.5%",
//     right: "5.5%",
//     width: 17,
//   },
//   map: {
//     backgroundColor: Color.white,
//     flex: 1,
//     width: "100%",
//     overflow: "hidden",
//     height: "100%",
//   },
// });

// export default MapPage;
