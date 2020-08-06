import queryString from "query-string"

export const getTotalPages = (total_items, per_page) => 
  Math.ceil(total_items / per_page);

export const getCurrentPageByQuery = queryPage => {
  const pageHash = queryString.parse(queryPage)
  return pageHash.page;
}