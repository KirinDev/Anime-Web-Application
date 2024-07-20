import mongoose from 'mongoose';
import { IHomePersistence } from '../../dataschema/IHomePersistence';

const CarouselSchema = new mongoose.Schema(
  {
    domainId: { type: String, unique: true },
    animeIds: [{ type: String }]
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IHomePersistence & mongoose.Document>('Carousel', CarouselSchema);