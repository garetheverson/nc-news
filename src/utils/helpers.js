exports.publishedDate = (created_at) => {
  const date = new Date(created_at);
  const publishedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return publishedDate;
};
