import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import clsx from "clsx";
import { useState } from "react";

const Photos = () => {
    const [active, setActive] = useState(1);

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const filteredImages = gallery.filter((item) => item.category === active);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };

    const handleNext = () => {
        setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
    };

    const handlePrev = () => {
        setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };

    const handleBack = () => {
        setSelectedImageIndex(null);
    };

    return (
        <div className="flex flex-col h-full w-full">
            <div id="window-header" className="flex items-center gap-3">
                <WindowControls target="photos" />
                {selectedImageIndex !== null && (
                    <button onClick={handleBack} className="text-gray-500 hover:text-black">
                        Back
                    </button>
                )}
            </div>
            <div className="flex flex-1 overflow-hidden relative">
                {selectedImageIndex === null ? (
                    <>
                        <div className="sidebar">
                            <ul>
                                {photosLinks.map(({ id, icon, title }) => (
                                    <li
                                        key={id}
                                        className={clsx(active === id && "bg-blue-100 text-blue-700")}
                                        onClick={() => setActive(id)}
                                    >
                                        <img src={icon} alt={title} />
                                        <p>{title}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="gallery flex-1 overflow-y-auto">
                            <ul>
                                {filteredImages.map(({ id, img }, index) => (
                                    <li key={id} onClick={() => handleImageClick(index)} className="cursor-pointer">
                                        <img src={img} alt="gallery" loading="lazy" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center bg-black relative w-full h-full">
                        <button
                            onClick={handlePrev}
                            className="absolute left-5 text-white bg-gray-800/50 p-2 rounded-full hover:bg-gray-700/80 transition-colors z-10"
                        >
                            ←
                        </button>
                        <img
                            src={filteredImages[selectedImageIndex].img}
                            alt="selected"
                            className="max-h-full max-w-full object-contain"
                        />
                        <button
                            onClick={handleNext}
                            className="absolute right-5 text-white bg-gray-800/50 p-2 rounded-full hover:bg-gray-700/80 transition-colors z-10"
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WindowWrapper(Photos, "photos");
