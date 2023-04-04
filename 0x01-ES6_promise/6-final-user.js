/* eslint-disable no-template-curly-in-string */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises).then(
    (results) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      results.map((result) => ({
        status: result.status,
        value:
          result.status === 'fulfilled'
            ? result.value
            : new Error('Error: ${fileName} cannot be processed'),
        // eslint-disable-next-line comma-dangle
      }))
    // eslint-disable-next-line function-paren-newline
  );
}
