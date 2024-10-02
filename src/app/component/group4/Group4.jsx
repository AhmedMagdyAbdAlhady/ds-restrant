"use client";
import { useEffect, useState } from "react";

export default function Page() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/menu");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Function to group data into sets of three
    const groupData = (data) => {
        const grouped = [];
        for (let i = 0; i < data.length; i += 3) {
            grouped.push(data.slice(i, i + 3));
        }
        return grouped;
    };

    const groupedData = groupData(data);

    return (
        <>
            {groupedData.length > 0 && (
                <div id="carouselExampleCaptions" className="carousel slide container" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {groupedData.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : undefined}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {groupedData.map((group, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                <div className="row">
                                    {group.map((item) => (
                                        // <div key={item.id} className="col">
                                        //     <h5>{item.name} ------- {item.price} -------</h5>
                                        //     <img src={item.image} alt={item.name} width="100" />
                                        // </div>
                                        <div key={item.id} className="col card" >
                                            <img  className="card-img" src={item.image} alt={item.name} width="100%" />
                                                <div className="card-img-overlay">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text">{item.description}</p>
                                                    <p className="card-text">{item.price}</p>
                                                </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )}
        </>
    );
}
