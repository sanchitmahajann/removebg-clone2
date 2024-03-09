const imageInput = document.getElementById("imageInput");
const result = document.getElementById("result");

imageInput.addEventListener("change", async () => {
  try {
    const file = imageInput.files[0];
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("mode", "magic_brush");

    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": "EQAXSmYXpqtUkfVQiJRqfPHP",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to remove background from image");
    }

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    result.style.backgroundImage = `url(${imageUrl})`;
  } catch (error) {
    console.error(error);
  }
});