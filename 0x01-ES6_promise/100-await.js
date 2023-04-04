import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const createU = await createUser();
    const uploadP = await uploadPhoto();
    return {
      photo: uploadP,
      user: createU,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
