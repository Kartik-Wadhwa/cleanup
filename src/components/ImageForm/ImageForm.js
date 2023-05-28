import React,{useState,useRef,useEffect} from 'react'
import "./imageform.css"
import VanillaTilt from 'vanilla-tilt';
//import Data from '../../cleandb';
import axios from 'axios';

const ImageForm = () => {

  const tiltRef = useRef(null);
  const tiltRef2 = useRef(null);
  
  //For Camera Icon tilt
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 30,
        speed: 400,
        glare: true,
        'max-glare': 1,
      });
    }
  }, []);
  
  //For Gallery icon tilt
  useEffect(() => {
    if (tiltRef2.current) {
      VanillaTilt.init(tiltRef2.current, {
        max: 30,
        speed: 400,
        glare: true,
        'max-glare': 1,
      });
    }
  }, []);

  //When mouse cursor enters in anchor tag of camera Or gallery
  const handleMouseEnter = (event) => {
    const color = event.target.getAttribute('data-color');
    const bg = document.querySelector('.socialMedia');
    if (bg) {
      bg.style.backgroundColor = color;
      }
  };
      
  //When mouse cursor leaves the area of anchor tag
  const handleMouseLeave = () => {
    const bg = document.querySelector('.socialMedia');
    if (bg) {
      bg.style.backgroundColor = '#fff';
    }
  };

  const [image, setImage] = useState("");
  const videoRef=useRef();

  //Input function for recieving file (Only for gallery)
  const handleClickOnGallery = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.onchange = handleImageUpload;
    input.click();
  };

  //Function use to upload image by gallery
  const handleImageUpload = (event)=> {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
  }

  //Start Camera function
  const handleStartCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch(error => console.error(error));
  };

  //Function to take a photo and stops the camera after image is saved in dataUrl
  const handleTakePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0);
    const dataUrl = canvas.toDataURL();
    stopCamera();
    setImage(dataUrl);
  };

  //Stops the camera
  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
  };

 

  // Here you can save the image to a database or a file system
  const handleSavePhoto = async () => { 
    await handleLocation();

    await save_data_db(Data); 
    console.log("Image saved:",image);
    console.log(location);
    console.log(time);
    //predictImage(image.result);
    setImage("");
  };

  //Discard the picture and turn on camera
  const handleDiscardPhoto = () => {
    setImage("");
  };

  //Getting Location Using geolocation api for co-ordinates and by using open cage api for name of place and time 
const [location, setLocation] = useState(null);
const [time, setTime] = useState(null);


const handleLocation = async () => {
  try {
    const position = await getCurrentPosition();
    const locationName = await getLocationName(position.coords.latitude, position.coords.longitude);
    setLocation(`Location: ${locationName}`);
    const currentTime = new Date().toLocaleString();
    setTime(`Current time: ${currentTime}`);
  } catch (error) {
    console.error(error);
  }
};

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getLocationName = async (latitude, longitude) => {
  const apiKey = '41a29344dac64517bcef24ea0354d16f'; // replace with your OpenCage API key
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results[0].formatted;
};
const Data={location,time,image};
/*const save_in_db = async (location,time,image) => {

  try{
      const cleandb = new Data({
        location,
        time,
        image
      });

      await cleandb.save();

    } catch (error) {
      console.error(error.message);
    }
  }*/


  const save_data_db = async(Data) => {
    try{
      await axios.post("http://192.168.1.11:5000/upload-data",{Data:Data})
    }catch(error){
      console.log(error)
    }
}


  return ( 
    
  <div>
    <div className="socialMedia" id="ssss">
      <ul className="sci">
        <li   data-text="Click a Photo" >
          <a href="#ssss" ref={tiltRef}  className="camera" data-color="#1877f2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleStartCamera} ><span hidden>Click me</span><i className="fa fa-camera" aria-hidden="true"></i></a>
        </li>
        <li   data-text="Upload a Photo" >
          <a href="#ssss" ref={tiltRef2}  className="gallery"  data-color="#ff0000" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClickOnGallery} ><span hidden>Click me</span><i className="fa fa-file-image-o" aria-hidden="true"></i></a>
        </li>
      </ul>
        <div className="innerBox">
          {image?<img src={image} className="image" alt="."/>:<video ref={videoRef} className="image"/>}
          {image ? <></> : (<i className="captureButton fa fa-circle" onClick={handleTakePhoto} aria-hidden="true"></i>)}
          {image && (
        <>
          <button className='saveButton' onClick={handleSavePhoto}><i className="fa fa-check fa-2x" aria-hidden="true"></i></button>
          <button className='discardButton' onClick={handleDiscardPhoto}><i className="fa fa-times fa-2x" aria-hidden="true"></i></button>
        </>
        )}
        </div>
    </div>
  </div>

  )
}

export default ImageForm


