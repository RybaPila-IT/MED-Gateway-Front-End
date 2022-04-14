import {Cloudinary} from "@cloudinary/url-gen";

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: 'med-gateway-photos'
    },
    url: {
        secure: true
    }
});

export default cloudinary;