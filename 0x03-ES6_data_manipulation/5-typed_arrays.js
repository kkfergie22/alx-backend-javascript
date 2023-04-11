export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  try {
    view[position] = value;
  } catch (error) {
    return 'Position outside range';
  }

  const arrayDataView = new DataView(buffer);
  return arrayDataView;
}
