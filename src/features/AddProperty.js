import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProduct, addProductLocally} from "../slices/productSlice";
import {clearPopup} from "../slices/commonSlice";
import PopupWrapper from "../shared/popup/PopupWrapper";
import Input from "../shared/input/Input";
import Button from "../shared/button/Button";
import TextArea from "../shared/textArea/TextArea";
import FileAdder from "../shared/fileAdder/FileAdder";
import Select from "../shared/select/Select";
import {PROPERTY_TYPES} from "../utils/constants";

const AddProperty = () => {
  const { currentUser } = useSelector(({user}) => ({currentUser: user.currentUser}));
  const [name, setName] = useState(null);
  const [type, setType] = useState(PROPERTY_TYPES[0].value);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [price, setPrice] = useState(0);
  const [briefDescription, setBriefDescription] = useState(null);
  const [detailedDescription, setDetailedDescription] = useState(null);
  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();

  const onAddFiles = (files) => {
    let fileNames = [];
    for(let file of files) {
      fileNames.push(file.name)
    }
    setFiles(fileNames);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      id: Date.now(),
      agentId: currentUser.id,
      price,
      name,
      type,
      address,
      location,
      briefDescription,
      detailedDescription,
      images: files
    }
    dispatch(addProduct({product: newProperty}));
    dispatch(addProductLocally(newProperty));
    dispatch(clearPopup());
  }

  return <PopupWrapper title="Add a new property">
    <form className="submission_form" onSubmit={onSubmit}>
      <Input required label="Name" placeholder="Property name here" onChange={(name) => setName(name)}/>
      <Select label="Type" placeholder="Property type here" options={PROPERTY_TYPES} onChange={(type) => setType(type.value)}/>
      <Input required label="Location" placeholder="Property location here" onChange={(location) => setLocation(location)}/>
      <Input required label="Address" placeholder="Property address here" onChange={(address) => setAddress(address)}/>
      <Input required label="Brief Description" placeholder="Property brief description here" onChange={(text) => setBriefDescription(text)}/>
      <Input required label="Price" type="number" onChange={(price) => setPrice(price)}/>
      <TextArea required label="Detailed Description" onChange={(text) => setDetailedDescription(text)}/>
      <FileAdder label="Attach image files" onAddFile={onAddFiles}/>
      <Button type="submit" styleType="primary">ADD</Button>
    </form>
  </PopupWrapper>
}

export default AddProperty;