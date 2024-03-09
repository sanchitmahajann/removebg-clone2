const imageInput = document.getElementById('imageInput');
const result = document.getElementById('result');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const formData = new FormData();
  formData.append('image_file', file);
  formData.append('size', 'auto');

  fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: {
      'X-Api-Key': 'EQAXSmYXpqtUkfVQiJRqfPHP'
    },
    body: formData
  })
  .then(response => response.blob())
  .then(blob => {
    const imageUrl = URL.createObjectURL(blob);
    result.style.backgroundImage = `url(${imageUrl})`;
  })
  .catch(error => {
    console.error(error);
  });
});