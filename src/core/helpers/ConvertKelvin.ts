export const getConvertKelvin = (val: number): string => {
    var _ans = val - 273.15;
    var ans = _ans.toFixed(0);
  return ans.toString()+'°';
};
