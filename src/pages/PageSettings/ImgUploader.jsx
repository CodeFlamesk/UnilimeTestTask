import { useState } from "react";
import FotoIcon from "./icon/FotoIcon";
import SubheadingM from "@components/ui/SubheadingM";
const ImageUploader = ({ uploading = "Add/Change Image", onImageSave }) => {
    const [fileName, setFileName] = useState("Choose a file");
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            const previewUrl = URL.createObjectURL(file);
            setImagePreviewUrl(previewUrl);
        } else {
            setFileName("Choose a file");
            setImagePreviewUrl(null);
        }
    };

    const handleSaveImg = (e) => {
        e.preventDefault();
        if (onImageSave && typeof onImageSave === "function") {
            onImageSave(imagePreviewUrl);
        }
    };

    return (
        <div className="flex flex-col w-full gap-4">
            <div className="border border-grey-border rounded-2xl w-full aspect-video overflow-hidden bg-grey-border">
                {imagePreviewUrl ? (
                    <img
                        src={imagePreviewUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full">
                        <FotoIcon />
                    </div>
                )}
            </div>

            {/* Label */}
            <label htmlFor="file-upload" className="cursor-pointer">
                <SubheadingM
                    title={uploading}
                    styles="text-grey-900 text-lg cursor-pointer"
                />
            </label>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <input
                    type="text"
                    readOnly
                    value={fileName}
                    className="inputs-checkout w-full sm:max-w-md"
                />
                <div className="relative">
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-grey-200 text-sm text-grey-800 font-medium py-2 px-4 rounded-lg hover:bg-grey-300 transition"
                    >
                        Upload Image
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>
            </div>


            <button
                onClick={handleSaveImg}
                className="bg-grey-900 text-white font-medium text-sm px-5 py-3 rounded-lg hover:bg-white hover:text-grey-900 border hover:border-grey-900 transition w-full sm:w-fit"
            >
                Save Image
            </button>
        </div>
    );
};

export default ImageUploader;
