import mongoose from 'mongoose';
import { IAnimePersistence } from '../../dataschema/IAnimePersistence';

const AnimeSchema = new mongoose.Schema(
  {
    domainId: { type: String, unique: true },
    type: { type: String },
    title: { type: String, unique: true },
    jpTitle: { type: String, unique: true },
    urlTitle: { type: String, unique: true },
    description: { type: String },
    studio: { type: String },
    producers: { type: String },
    aired: { type: String },
    status: { type: String },
    genres: { type: String },
    episodes: { type: Number },
    duration: { type: Number },
    rate: { type: String },
    imgUrl: { type: String, unique: true },
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IAnimePersistence & mongoose.Document>('Anime', AnimeSchema);