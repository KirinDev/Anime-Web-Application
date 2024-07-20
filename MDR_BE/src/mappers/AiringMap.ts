import { Mapper } from "../core/infra/Mapper";

import { Document, Model } from 'mongoose';

import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Airing } from "../domain/airing";
import IAiringlDTO from "../dto/IAiringDTO";
import { IHomePersistence } from "../dataschema/IHomePersistence";

export class AiringMap extends Mapper<Airing> {
  
  public static toDTO( airing: Airing): IAiringlDTO {
    return {
      id: airing.id.toString(),
      animeIds: airing.animeIds,
    } as IAiringlDTO;
  }

  public static toDomain (airing: any | Model<IHomePersistence & Document> ): Airing {
    const airingOrError = Airing.create(
        airing,
      new UniqueEntityID(airing.domainId)
    );

    airingOrError.isFailure ? console.log(airingOrError.error) : '';

    return airingOrError.isSuccess ? airingOrError.getValue() : null;
  }

  public static toPersistence (airing: Airing): any {
    return {
      domainId: airing.id.toString(),
      animeIds: airing.animeIds
    }
  }
}