import got from 'got'; // Importe a biblioteca 'got'

async function getMangaById(name, id) {
  try {
    const response = await got(`https://mangalivre.net/manga/${name}/${id}`);
    const bay = response.body;

    const descriptionMatch = /<meta\sname="description"\scontent="([^"]+)"/.exec(bay);
    const fotoMatch = /<meta\sproperty="og:image"\scontent="([^"]+)"/.exec(bay);

    const descriptionContent = descriptionMatch ? descriptionMatch[1] : '';
    const foto = fotoMatch ? fotoMatch[1] : '';
    
    const result = {
      "nome": name,
      "id": id,
      "desc": descriptionContent,
      "foto": foto
    };

    return result;
  } catch (error) {
    console.error(error.message);
  }
}

// Exemplo de uso:
getMangaById("arisugawa-ren-tte-honto-wa-onna-nanda-yo-ne-", "9522")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });