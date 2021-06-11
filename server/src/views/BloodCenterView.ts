import BloodCenter from '../models/BloodCenter';
import imagesView from './ImagesView';

export default {
  render(bloodCenter: BloodCenter) {
    return {
      id: bloodCenter.id,
      name: bloodCenter.name,
      latitude: bloodCenter.latitude,
      longitude: bloodCenter.longitude,
      about: bloodCenter.about,
      instructions: bloodCenter.instructions,
      opening_hours: bloodCenter.opening_hours,
      open_on_weekends: bloodCenter.open_on_weekends,
      images: imagesView.renderMany(bloodCenter.images),
    };
  },

  renderMany(bloodCenters: BloodCenter[]) {
    return bloodCenters.map((bloodCenter) => this.render(bloodCenter));
  },
};