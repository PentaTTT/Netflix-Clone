import { Link, useLocation } from "react-router-dom";
import "./product.css";
// import Chart from "../../components/chart/Chart"
// import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useState, useContext } from "react";
import { updateMovie } from "../../context/movieContext/movieApiCall";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function Product() {
    const location = useLocation();
    const movie = location.state;
    const { dispatch } = useContext(MovieContext)

    const [title, setTitle] = useState(movie.title);
    const [genre, setGenre] = useState('');
    const [desc, setDesc] = useState('');
    const [year, setYear] = useState('');
    const [limit, setLimit] = useState('');

    const handleClickUpdate = (e) => {
        e.preventDefault();
        let movieUpdate = {
            id: movie._id,
            title, genre, desc, year, limit
        }
        updateMovie(movieUpdate, dispatch)
    }

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                {/* <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div> */}
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={movie.img} alt="" className="productInfoImg" />
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{movie._id.substring(0, 10)}..</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">limit:</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Movie Name</label>
                        <input type="text" placeholder={movie.title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre}
                            onChange={(event) => setGenre(event.target.value)}
                        />
                        <label>Description</label>
                        <input type="text" placeholder="..."
                            onChange={(event) => setDesc(event.target.value)}
                        />
                        <label>Year</label>
                        <input type="text" placeholder={movie.year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                        <label>Limit</label>
                        <input type="text" placeholder={movie.limit}
                            onChange={(e) => setLimit(e.target.value)}
                        />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.img} alt="" className="productUploadImg" />
                            <label style={{ cursor: 'pointer' }} for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <div className="productUpload">
                            <div>Trailer</div>
                            <label style={{ cursor: 'pointer', marginLeft: '5px' }} for="trailer">
                                <Publish />
                            </label>

                            <input type="file" id="trailer" style={{ display: "none" }} />
                        </div>
                        <div className="productUpload">
                            <div>Video</div>
                            <label style={{ cursor: 'pointer', marginLeft: '5px' }} for="video">
                                <Publish />
                            </label>

                            <input type="file" id="video" style={{ display: "none" }} />
                        </div>
                        <button className="productButton"
                            onClick={handleClickUpdate}
                        >Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
