import mongoose from 'mongoose';
import { IEpisodePersistence } from '../../dataschema/IEpisodePersistence';

const EpisodeSchema = new mongoose.Schema(
  {
    domainId: { type: String, unique: true },
    number: { type: Number },
    animeId: { type: String },
    episodeUrl: { type: String, unique: true },
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IEpisodePersistence & mongoose.Document>('Episode', EpisodeSchema);