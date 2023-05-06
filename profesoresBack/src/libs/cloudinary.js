import { v2 as cloudinary } from 'cloudinary';
import { cloudinaryConfig } from '../config';

cloudinary.config(cloudinaryConfig);

export const uploadImage = async (filePath) => {
	return await cloudinary.uploader.upload(filePath, {
		folder: 'images',
	});
};

export const deleteImage = async (id) => {
	return await cloudinary.uploader.delete(id);
};
