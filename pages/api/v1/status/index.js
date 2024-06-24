function status(request, response) {
  response.status(200).json({ chave: "Deu bom, acima da média" });
}

export default status;
