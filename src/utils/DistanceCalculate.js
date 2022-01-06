import HaversineAlgorithm from './HaversineAlgorithm';

export default array => {
    let distance = 0;
    for (let i = 1; i < array.length; i++) {
      distance += HaversineAlgorithm(
        array[i - 1].latitude,
        array[i - 1].longitude,
        array[i].latitude,
        array[i].longitude,
      );
    }
    return distance;
  };