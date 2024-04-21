import React, { useState } from 'react';
import axios from 'axios';

const BabyDetailsForm = ({ childID, onSuccess }) => {
  const [babyDetails, setBabyDetails] = useState({
    DHMO: '',
    DFWO: '',
    Birn: '',
    ChildName: '',
    PMRN: '',
    DateOfBirth: '',
    DateOfRegister: '',
    MotheName: '',
    MotherAge: '',
    Address: '',
    ChildCount: '',
    Hospital: '',
    DeliveryMethod: '',
    Apgar1: '',
    Apgar2: '',
    Apgar3: '',
    BirthWeight: '',
    HeadCircumference: '',
    LengthAtBirth: '',
    WeightAtDischarge: '',
    VitaminK: '',
    BreastfeedingStart: '',
    MotherWarmth: '',
    BabyAttachment: ''
  });

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:5050/save-baby-details', {
        childID,
        ...babyDetails
      });

      if (response.data.message === 'Baby details saved successfully') {
        onSuccess(); // Invoke the onSuccess callback passed from parent component
      } else {
        // Handle failure
      }
    } catch (error) {
      console.error('Saving baby details failed:', error);
      // Handle failure
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBabyDetails({ ...babyDetails, [name]: value });
  };

  return (
    <div>
      <h2>Baby Details</h2>
      <input type="text" name="DHMO" value={babyDetails.DHMO} onChange={handleChange} placeholder="DHMO" />
      <input type="text" name="DFWO" value={babyDetails.DFWO} onChange={handleChange} placeholder="DFWO" />
      <input type="text" name="Birn" value={babyDetails.Birn} onChange={handleChange} placeholder="Birn" />
      <input type="text" name="ChildName" value={babyDetails.ChildName} onChange={handleChange} placeholder="Child Name" />
      <input type="text" name="PMRN" value={babyDetails.PMRN} onChange={handleChange} placeholder="PMRN" />
      <input type="date" name="DateOfBirth" value={babyDetails.DateOfBirth} onChange={handleChange} placeholder="Date of Birth" />
      <input type="date" name="DateOfRegister" value={babyDetails.DateOfRegister} onChange={handleChange} placeholder="Date of Register" />
      <input type="text" name="MotheName" value={babyDetails.MotheName} onChange={handleChange} placeholder="Mother Name" />
      <input type="number" name="MotherAge" value={babyDetails.MotherAge} onChange={handleChange} placeholder="Mother Age" />
      <input type="text" name="Address" value={babyDetails.Address} onChange={handleChange} placeholder="Address" />
      <input type="number" name="ChildCount" value={babyDetails.ChildCount} onChange={handleChange} placeholder="Child Count" />
      <input type="text" name="Hospital" value={babyDetails.Hospital} onChange={handleChange} placeholder="Hospital" />
      <input type="text" name="DeliveryMethod" value={babyDetails.DeliveryMethod} onChange={handleChange} placeholder="Delivery Method" />
      <input type="number" name="Apgar1" value={babyDetails.Apgar1} onChange={handleChange} placeholder="Apgar 1" />
      <input type="number" name="Apgar2" value={babyDetails.Apgar2} onChange={handleChange} placeholder="Apgar 2" />
      <input type="number" name="Apgar3" value={babyDetails.Apgar3} onChange={handleChange} placeholder="Apgar 3" />
      <input type="number" name="BirthWeight" value={babyDetails.BirthWeight} onChange={handleChange} placeholder="Birth Weight" />
      <input type="number" name="HeadCircumference" value={babyDetails.HeadCircumference} onChange={handleChange} placeholder="Head Circumference" />
      <input type="number" name="LengthAtBirth" value={babyDetails.LengthAtBirth} onChange={handleChange} placeholder="Length at Birth" />
      <input type="number" name="WeightAtDischarge" value={babyDetails.WeightAtDischarge} onChange={handleChange} placeholder="Weight at Discharge" />
      <input type="text" name="VitaminK" value={babyDetails.VitaminK} onChange={handleChange} placeholder="Vitamin K" />
      <input type="text" name="BreastfeedingStart" value={babyDetails.BreastfeedingStart} onChange={handleChange} placeholder="Breastfeeding Start" />
      <input type="text" name="MotherWarmth" value={babyDetails.MotherWarmth} onChange={handleChange} placeholder="Mother Warmth" />
      <input type="text" name="BabyAttachment" value={babyDetails.BabyAttachment} onChange={handleChange} placeholder="Baby Attachment" />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default BabyDetailsForm;
