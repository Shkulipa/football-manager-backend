import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DeleteResult } from 'mongodb';
import {
  Document,
  FilterQuery,
  Model,
  ProjectionType,
  QueryOptions,
  QueryWithHelpers,
  Types,
  UpdateQuery,
  UpdateWithAggregationPipeline,
  UpdateWriteOpResult,
} from 'mongoose';
import { QueryDto } from 'src/common/dto/query.dto';
import { toId } from 'src/common/helpers/transform.helper';

@Injectable()
export class BaseMongoRepository<TDocument extends Document> {
  protected readonly logger: Logger;
  protected msgItemNotFound = '';

  constructor(protected readonly model: Model<TDocument>, protected readonly name: string) {
    this.msgItemNotFound = `${name} wasn't found`;
  }

  async getItems(query: QueryDto) {
    const { limit, page } = query;

    const items = await this.model
      .find()
      .skip(limit * page - limit)
      .limit(limit)
      .select(['-key'])
      .lean();

    const count = await this.model.find().count();

    return { items, count };
  }

  async validation(id: string | Types.ObjectId, options?: QueryOptions<TDocument>) {
    const item = await this.model.findById(toId(id), {}, { lean: true, ...options });
    if (!item) throw new NotFoundException(this.msgItemNotFound);
    return item;
  }

  async create(data: Partial<TDocument>): Promise<TDocument> {
    const newDocument = await this.model.create(data);
    return newDocument;
  }

  async findByIdAndRemove(id: string | Types.ObjectId) {
    return await this.model.findByIdAndRemove(toId(id));
  }

  async regularDataCleanup(hours: number) {
    // delete all records, that were created more than 3 hours before
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - hours);

    const query = {
      $expr: {
        $lte: ['$createdAt', oneHourAgo],
      },
    };

    const filesForDelete = await this.find(query);
    const ids = filesForDelete.map((item) => item._id);
    await this.deleteMany({ _id: { $in: ids } });

    return filesForDelete.length;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: FilterQuery<TDocument>,
    options: QueryOptions<TDocument> = {},
  ) {
    const document = await this.model.findOneAndUpdate(filterQuery, update, {
      lean: true,
      new: true,
      ...options,
    });

    if (!document && !options.upsert) {
      throw new NotFoundException(this.msgItemNotFound);
    }

    return document;
  }

  async findByIdAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: FilterQuery<TDocument>,
    options: QueryOptions<TDocument> = {},
  ) {
    const document = await this.model.findByIdAndUpdate(filterQuery, update, {
      lean: true,
      new: true,
      ...options,
    });

    if (!document && !options.upsert) {
      throw new NotFoundException(this.msgItemNotFound);
    }

    return document;
  }

  async find(
    filterQuery: FilterQuery<TDocument>,
    projection: ProjectionType<TDocument> = {},
    options?: QueryOptions<TDocument>,
  ): Promise<TDocument[]> {
    return await this.model.find(filterQuery, projection, { lean: true, ...options });
  }

  async findOne(
    filterQuery: FilterQuery<TDocument>,
    projection: ProjectionType<TDocument> = {},
    options?: QueryOptions<TDocument>,
  ): Promise<TDocument> {
    return await this.model.findOne(filterQuery, projection, { lean: true, ...options });
  }

  async deleteOne(filter: FilterQuery<TDocument>, options?: QueryOptions<TDocument>) {
    return await this.model.deleteOne(filter, options);
  }

  async updateMany(
    filter?: FilterQuery<TDocument>,
    update?: UpdateQuery<TDocument> | UpdateWithAggregationPipeline,
    options?: QueryOptions<TDocument> | null,
  ): Promise<QueryWithHelpers<UpdateWriteOpResult, TDocument>> {
    return await this.model.updateMany(filter, update, options);
  }

  async deleteMany(
    filter?: FilterQuery<TDocument>,
    options?: QueryOptions<TDocument> | null,
  ): Promise<QueryWithHelpers<DeleteResult, TDocument>> {
    return await this.model.deleteMany(filter, options);
  }

  async findById(
    id: string | Types.ObjectId,
    projection?: ProjectionType<TDocument> | null,
    options?: QueryOptions<TDocument> | null,
  ): Promise<TDocument> {
    return await this.model.findById(id, projection, options);
  }
}
