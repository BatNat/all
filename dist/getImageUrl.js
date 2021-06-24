// на платформе используется undefined для отрисовки заглушки
const getImageUrl = (imageUrl, API) => {
    return imageUrl ? `${API.img}${imageUrl}` : undefined;
};
export default getImageUrl;