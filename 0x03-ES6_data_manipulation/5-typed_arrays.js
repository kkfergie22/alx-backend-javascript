export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  view[position] = value;
  const arrayDataView = new DataView(buffer);
  return arrayDataView;
}
