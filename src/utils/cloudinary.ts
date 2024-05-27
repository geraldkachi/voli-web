import { Cloudinary } from '@cloudinary/url-gen';
// import { Cloudinary } from 'cloudinary-react';

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  },
  url: {
    secure: true,
  },
  
});

// export default cloudinary;


// import cloudinary from 'cloudinary';

// cloudinary.config({
//   cloud_name: 'your_cloud_name',
//   api_key: 'your_api_key',
//   api_secret: 'your_api_secret',
// });

// const uploadImage = async (image) => {
//   try {
//     const uploadedResponse = await cloudinary?.v2.uploader.upload(image, {
//       upload_preset: 'your_upload_preset',
//     });

//     return uploadedResponse;
//   } catch (error) {
//     console.error(error);
//   }
// };