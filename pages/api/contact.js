// api/contact
import emailValidator from "email-validator";
import { connectDB, insertDocument } from "../../helpers/db-util";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    const validation =
      !emailValidator.validate(email) ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === "";
    if (validation) {
      return res.status(422).json({ message: "Invalid input." });
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await connectDB();
    } catch (error) {
      return res.status(500).json({ message: "Failed to Connect to Database" });
    }
    try {
      await insertDocument(client, "messages", { ...newMessage });
      client.close();
    } catch (error) {
      return res.status(500).json({ message: "Failed to Insert data" });
    }

    res.status(201).json({ message: "Success", message: newMessage });
  }
};
export default handler;
