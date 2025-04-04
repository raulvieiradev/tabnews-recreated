function status(request, response) {
  response.status(200).json({ chave: "servidor ok" });
}

export default status;
