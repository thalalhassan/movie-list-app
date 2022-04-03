export const apiMimic = async (page, limit, offset, search) => {
  const data = await require(`./API/CONTENTLISTINGPAGE-PAGE${page}.json`);

  if (limit != null && offset != null) {
    return {
      page: {
        ...data.page,
        "content-items": {
          content: data.page["content-items"].content.slice(
            offset,
            offset + limit
          ),
        },
      },
    };
  }

  return data;
};
