import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

const PlaceInfoBox = ({ visible, onClose, placeName, placeDescription }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.placeName}>{placeName}</Text>
          <Text style={styles.placeDescription}>{placeDescription}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 0,
    alignItems: "center",
    width: "100%",
    minHeight: 200,
  },
  placeName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  placeDescription: {
    fontSize: 18,
    marginBottom: 20,
    color: "white",
  },
  closeButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default PlaceInfoBox;
