import axios from "axios";
import UsersController from "../../controllers/UsersController";
import { validUser } from "../__mocks__/defaults/usersDefaults";
jest.mock('axios');

describe("create() method", () => {
  it('should create a valid user', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(validUser))
    await expect(UsersController.create(validUser)).resolves.toEqual(validUser)
  })
})