export const paginate = (page = 0 , perPage = 20) => {
    const limit = perPage;
    const offset = page * perPage;
    return { limit, offset };
  };