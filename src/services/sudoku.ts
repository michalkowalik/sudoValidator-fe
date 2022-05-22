import axios from "axios";

type Board = {
  board: number[][];
};

type SaveBoardResponse = {
  id: number;
  board: Board;
};

export async function saveBoard(data: Board): Promise<SaveBoardResponse> {
  const response = await axios.post(`http://localhost:8080/board`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response.data;
}

export async function validateBoard(data: SaveBoardResponse): Promise<boolean> {
  const response = await axios.get(
    "http://localhost:8080/board/" + data.id + "/isvalid"
  );
  return response.data;
}
