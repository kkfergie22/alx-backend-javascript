import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUP = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);
  return Promise.allSettled(signUP, upload).then((results) => {
    console.log(results);
  });
}
