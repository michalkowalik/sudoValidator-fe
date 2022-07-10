import axios from "axios";

type Board = {
  board: number[][];
};

type SaveBoardResponse = {
  id: number;
  board: Board;
};

export async function saveBoard(data: Board): Promise<SaveBoardResponse> {
  const response = await axios.post(`http://dev.win:9090/board`, data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return response.data;
}

export async function validateBoard(data: SaveBoardResponse): Promise<boolean> {
  const response = await axios.get(
    "http://dev.win:9090/board/" + data.id + "/isvalid",
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
  return response.data;
}
