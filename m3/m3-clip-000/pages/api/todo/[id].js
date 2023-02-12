import path from "path";
import fs from "fs";
import { promisify } from "util";

const delayTime = 1000; // milliseconds added to all REST calls

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHandler(req, res) {
  const method = req?.method;
  const recordFromBody = req?.body;
  const jsonFile = path.resolve("./", "db.json");

  const ids = (req?.query?.id)
    .split(",", 50)
    .map((id) => parseInt(id)); // only support 50 items max
  const id = ids.length === 1 ? ids[0] : undefined; // likely never happen because if no value, then the URL goes to GET instead

  async function getTodosData() {
    const readFileData = await readFile(jsonFile);
    return JSON.parse(readFileData).todos;
  }

  switch (method) {
    case "GET":
      const todos = await getTodosData();
      const rec = todos.find((rec) => rec.id === id);
      if (rec) {
        res.status(200).json(rec);
      } else {
        res.status(404).send("rec not found");
      }
      console.log(`GET /api/todo/${id} status: 200`);
      break;
    case "PUT":
      try {
        await delay(delayTime);
        const todos = await getTodosData();
        const newRecsArray = todos.map(function (rec) {
          return rec.id === id ? recordFromBody : rec;
        });
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              todos: newRecsArray,
            },
            null,
            2,
          ),
        );
        res.status(200).json(recordFromBody);
        console.log(`PUT /api/todo/${id} status: 200`);
      } catch (e) {
        console.log("/api/todo PUT error:", e);
      }
      break;

    case "POST":
      try {
        await delay(delayTime);
        const recs = await getTodosData();
        const newRecsArray = [
          recordFromBody,
          ...recs.map(function (rec) {
            return rec.id === id ? recordFromBody : rec;
          }),
        ];
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              todos: newRecsArray,
            },
            null,
            2,
          ),
        );
        res.status(200).json(recordFromBody);
        console.log(`POST /api/todo/${id} status: 200`);
      } catch (e) {
        console.log("/api/todo POST error:", e);
      }
      break;

    case "DELETE":
      try {
        await delay(delayTime);
        const todos = await getTodosData();
        // allows for multiple id's to be delete using non-standard REST /api/todo/10,12,14 for 3 records
        const newRecsArray = todos.filter(function (rec) {
          return !ids.includes(rec.id);
        });
        writeFile(
          jsonFile,
          JSON.stringify(
            {
              todos: newRecsArray,
            },
            null,
            2,
          ),
        );
        res.status(200).json(recordFromBody);
        console.log(`DELETE /api/todo/${ids.toString()} status: 200`);
      } catch (e) {
        console.log("/api/todo DELETE error:", e);
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
