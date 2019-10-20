function getPage(page, limit) {
  return limit * page - limit;
}

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(body) {
    return this.model.create(body);
  }

  async findOne(params = {}) {
    return this.model.findOne(params).lean();
  }

  async find(options = {}) {
    const limit = options.limit || 10;
    const page = getPage(options.page || 1, limit);
    const query = this.model.find(options.filter).limit(parseInt(limit, 10)).skip(page);

    if (options.populate
      && Array.isArray(options.populate)
      && options.populate.length > 0) {
      options.populate.forEach(opt => query.populate(opt));
    }

    query.limit(parseInt(limit, 10)).skip(page);
    const queryCount = options.paginate ? this.model.count(options.filter) : null;

    return Promise.all([query, queryCount])
      .then((data) => {
        const count = data[1];

        return count ? {
          limit,
          docs: data[0],
          pages: Math.ceil(count / limit),
          total: count,
        } : { limit, docs: data[0] };
      });
  }
}

module.exports = BaseRepository;
