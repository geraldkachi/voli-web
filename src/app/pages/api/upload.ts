import {Cloudinary} from "@cloudinary/url-gen";

// const cloudinary = new Cloudinary()
const cld = new Cloudinary({cloud: {cloudName: 'dejquibd1'}});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { image } = req.body;

    try {
      const uploadResponse = await cloudinary.uploader.upload(image, {
        upload_preset: 'your_upload_preset',
      });

      res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
