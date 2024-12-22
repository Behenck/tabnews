function status(request, response) {
  return response.status(200).json({ message: "ok" });
}

export default status;
