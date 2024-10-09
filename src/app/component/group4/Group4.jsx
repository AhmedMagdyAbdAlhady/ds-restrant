"use client";
import { useEffect, useState } from "react";
import { overlayeBackground, MenuCard } from './Group4.module.css';

export default function Page() {
    const [data, setData] = useState([]);
    const [UpDateData, setUpDateData] = useState([]);

    // Fetch data once on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/menu");
                const result = await response.json();
                setData(result);
                setUpDateData(result); // Initialize with all data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Function to group data into sets of four
    const groupData = (data) => {
        const grouped = [];
        for (let i = 0; i < data.length; i += 4) {
            grouped.push(data.slice(i, i + 4));
        }
        return grouped;
    };

    // Function to get unique button values (categories)
    const buttonValue = (data) => {
        const Butvalue = [...new Set(data.map(item => item.category))];
        return Butvalue;
    };

    const groupButValue = buttonValue(data);

    // Function to filter data based on selected category
    const filterData = (valueOfType) => {
        if (valueOfType === 'all') {
            setUpDateData(data);  // Show all data if 'all' is selected
        } else {
            const filteredData = data.filter(i => i.category === valueOfType);  // Filter by category
            setUpDateData(filteredData);  // Set filtered data
        }
    };

    // Group filtered data into sets for carousel display
    const groupedData = groupData(UpDateData);

    return (
        <div className="container " >
            {/* Buttons for filtering */}
            {groupButValue.length > 0 && (
                <div className="d-flex justify-content-center">
                    <button
                        type="button"
                        className="btn btn-outline-light m-2"
                        onClick={() => filterData('all')}  // Show all data when "All" is clicked
                    >
                        All
                    </button>
                    {groupButValue.map((item, index) => (
                        <button
                            type="button"
                            className="btn btn-outline-light m-2"
                            onClick={() => filterData(item)}  // Filter based on category
                            key={index}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}

            {/* Carousel for displaying grouped data */}
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
                    <div className="container d-flex justify-content-center">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <div className="carousel-inner w-75">
                            {groupedData.map((group, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <div className="row">
                                        {group.map((item) => (
                                            <div key={item.id} className="col-md card p-0 m-2">
                                                <img className="card-img" src={item.image} alt={item.name} width="100%" />
                                                <div className={`card-img-overlay d-flex flex-column justify-content-center ${overlayeBackground}`}>
                                                    <h5 className={`card-title ${MenuCard}`}>{item.name}</h5>
                                                    <p className={`card-text ${MenuCard}`}>{item.description}</p>
                                                    <p className={`card-text ${MenuCard}`}>{item.category}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            )}
        </div>
    );
}
