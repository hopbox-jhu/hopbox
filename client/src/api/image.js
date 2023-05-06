import { axiosInstance } from './index';

async function uploadImage(fd) {
    return axiosInstance.post(`/image/upload`, fd);
}

function getImagePathById(id) {
    return `${"mongodb+srv://hopboxjhu:0zVKfI2dGKAwvSQH@hopbox.amtsmfx.mongodb.net/?retryWrites=true&w=majority"}/image/${id}`;
}

export { uploadImage, getImagePathById }