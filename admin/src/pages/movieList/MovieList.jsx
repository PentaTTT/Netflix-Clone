import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists, deleteList } from "../../context/listContext/listApiCall";

export default function MovieList() {
  // const [data, setData] = useState(productRows);
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteList(id, dispatch)
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "title", headerName: "Genre", width: 200 },
    { field: "genre", headerName: "Year", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    { field: "isSeries", headerName: "Series", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/product/" + params.row._id, state: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={r => r._id}
      />
    </div>
  );
}
