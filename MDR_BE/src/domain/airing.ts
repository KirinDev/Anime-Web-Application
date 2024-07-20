import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";

import { Result } from "../core/logic/Result";
import IAiringlDTO from "../dto/IAiringDTO";
import { AiringId } from "./airingId";

interface AiringProps {
    animeIds: string[];
}

export class Airing extends AggregateRoot<AiringProps> {
  get id (): UniqueEntityID {
    return this._id;
  }

  get airinglId (): AiringId {
    return new AiringId(this.airinglId.toValue());
  }

  get animeIds (): string[] {
    return this.props.animeIds;
  }

  set animeIds ( value: string[]) {
    this.props.animeIds = value;
  }

  private constructor (props: AiringProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(airinglDTO: IAiringlDTO, id?: UniqueEntityID): Result<Airing> {
    const animeIds = airinglDTO.animeIds;

    if (!!animeIds === false || animeIds.length === 0 || animeIds.length > 12) {
      return Result.fail<Airing>('Must provide valid animes')
    } else {
      const airing = new Airing({ animeIds:animeIds }, id);
      return Result.ok<Airing>( airing )
    }
  }
}