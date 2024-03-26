"use server";

const handler = (req, res) => {
  res.status(200).json({ message: "Hello from the API!" });
};

// Named export for `server`

export default handler();
