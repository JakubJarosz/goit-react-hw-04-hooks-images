import React, {useState, useEffect, useRef  } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import api from "../Api/Api";
import { Audio } from "react-loader-spinner"



const App = () => {
    const [picGallery, setPicGallery] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [bigPic, setBigPic] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const divRef = useRef();
    

    const handlePicClick = (ev) => {
        setShowModal(true);
        setBigPic(picGallery.filter(el => el.id == ev.target.id).map(url => url.largeImageURL));
    }

    const handleOverlayClose = () => {
        setShowModal(false);
    }

    const handleChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setPage(1);
        await fetchApi();
    }

    const fetchApi = async () => {
        setIsLoading(true);
        try {
            const gallery = await api.fetchPictures(inputValue, page);
            setPicGallery(prevState => [...prevState, ...gallery.data.hits])
            console.log(picGallery)
        } catch (error) {
           setError(error)
        } finally {
            setIsLoading(false)
        }
    }
    
    const handleMoreClick = async (e) => {
        setPage(page + 1)
           await fetchApi();
            e.preventDefault();
        
    }

    const scrollToBottom = () => {
        divRef.current.scrollIntoView({ block: 'center' });
    }

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                handleOverlayClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [scrollToBottom]);

   

    return (
        <div className="App">
            <Searchbar
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                inputValue={inputValue}
            />
            <ImageGallery>
                <ImageGalleryItem
                    picItems={picGallery}
                    clickHandler={handlePicClick}

                />
            </ImageGallery>

            <Button
                handleClick={handleMoreClick}
                picGallery={picGallery}
            />

            <Loader>
                {isLoading === true && (
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="green"
                        ariaLabel="loading"
                        wrapperStyle
                        wrapperClass
                    />
                )}
            </Loader>
            {showModal === true && (
                <Modal
                    bigPic={bigPic}
                    handleOverlay={handleOverlayClose}
                />
            )}
            <div className="bottom" ref={divRef}></div>
        </div>
    );
};


export default App