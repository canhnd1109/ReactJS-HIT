import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
const ImageList = () => {
    const [listImage, setListImage] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            const data = await axios.get(`https://picsum.photos/v2/list?page=2&limit=8`);
            setListImage([...listImage, ...data.data]);
        };
        fetchImages();
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            {listImage && listImage.length > 0 ? (
                <div className="container">
                    <>
                        {listImage.map((item, index) => {
                            return (
                                <div key={index} className="img ">
                                    <img src={item.download_url} alt="" className="img-item" />
                                </div>
                            );
                        })}
                    </>
                </div>
            ) : (
                <>
                    <tr>
                        <td>Not found data</td>
                    </tr>
                </>
            )}
            <div className="btn">
                <button onClick={() => handleClick()}>Load more</button>
            </div>
        </>
    );
};

export default ImageList;
