import fetchShow from "./api/fetchShow";
import { episodesFixture } from "./components/Episodes.test";


jest.mock("./api/fetchShow")

test("Render episodes", async () => {
   fetchShow.mockResolvedValueOnce({ data: episodesFixture });
})