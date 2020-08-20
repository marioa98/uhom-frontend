import { getTotalPages, getCurrentPageByQuery, getValidPage } from "../../services/pagination/PaginationService"

function randomNumber(range) {
  return Math.floor(Math.random() * range);
}

function randomString() {
  return Math.random().toString(36).substring(7)
}

it("describes getTotalPages()", () => {
  const totalItems = randomNumber(100)
  const total = Math.ceil(totalItems / 9)
  expect(getTotalPages(totalItems, 9)).toBe(total)
})

describe("getValidPage()", () => {
  const validPage = randomNumber(10)
  const invalidPage = randomString();

  it("returns a valid page", () => {
    expect(getValidPage(validPage)).toBe(validPage)
  })
  it("returns default page when is not a number", () => {
    expect(getValidPage(invalidPage)).toBe(1)
  })
})

test("getCurrentPageByQuery()", () => {
  const page = toString(randomNumber(10));
  const queryPage = `?page=${page}`
  expect(getCurrentPageByQuery(queryPage)).toBe(page)
})