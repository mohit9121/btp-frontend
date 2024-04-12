import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import cropDetails from '../assets/cropDetails.json';
import { Picker } from '@react-native-picker/picker';


const CropInfoPage = () => {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [selectedCropInfo, setSelectedCropInfo] = useState(null);

  const handleDiseaseChange = (disease) => {
    setSelectedDisease(disease);
    // Find the selected disease in cropDetails.json and set the corresponding crop info
    const selectedCrop = cropDetails.find(crop => crop.common_diseases.some(d => d.disease_name === disease));
    setSelectedCropInfo(selectedCrop);
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Select Crop:</Text>
        <Picker
          selectedValue={selectedDisease}
          style={{ height: 50, width: '100%', fontSize: 20 }}
          itemStyle={{ color: 'blue' }}
          onValueChange={(itemValue) => handleDiseaseChange(itemValue)}
        >
          <Picker.Item label="Tomato" value="Tomato" />
          {cropDetails.map(crop => (
            <Picker.Item
              key={crop.crop_name}
              label={crop.crop_name}
              value={crop.crop_name}
              style={{ fontSize: 20 }}
            />


          ))}

        </Picker>

        {selectedCropInfo && (
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>{selectedCropInfo.crop_name}</Text>
            <Text>{selectedCropInfo.description}</Text>
            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Recommended Control Methods for {selectedDisease}:</Text>
            {/* Map through the control methods for the selected disease */}
            {selectedCropInfo.common_diseases.map(disease => (
              disease.disease_name === selectedDisease ? (
                <View key={disease.disease_name}>
                  <Text>{disease.control_methods}</Text>
                </View>
              ) : null
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CropInfoPage;
