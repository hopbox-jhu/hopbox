import { axiosInstance } from './index';

async function uploadImage(fd) {
    return axiosInstance.post(`/image/upload/`, fd);
}

function getImagePathById(id) {
    return `/image/${id}`;
}

export { uploadImage, getImagePathById }