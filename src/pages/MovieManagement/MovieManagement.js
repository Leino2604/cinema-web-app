import React, {useState} from 'react'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './MovieManagement.css'

function Table({ rows, deleteRow, editRow }) {
    return (
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Tên phim</th>
              <th className="expand">Mô tả</th>
              <th>Thể Loại</th>
              <th>Giá tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
  
              return (
                <tr key={idx}>
                  <td>{row.movie}</td>
                  <td className="expand">{row.description}</td>
                  <td>
                    <span>
                      {(() => {
                        if (row.type === 'action') {
                          return 'Hành động';
                        }
                        else if (row.type === 'comedy'){
                          return 'Hài hước'
                        }
                        else if (row.type === 'science'){
                          return 'Khoa học'
                        }
                        else if (row.type === 'horror'){
                          return 'Kinh dị'
                        }
                        else if (row.type === 'family'){
                          return 'Gia đình'
                        }
                        else if (row.type === 'cartoon'){
                          return 'Hoạt hình'
                        }
                      })()}
                    </span>
                  </td>
                  <td>{row.price}đ</td>
                  <td className="fit">
                    <span className="actions">
                      <BsFillTrashFill
                        className="delete-btn"
                        onClick={() => deleteRow(idx)}
                      />
                      <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editRow(idx)}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
  function Modal ({ closeModal, onSubmit, defaultValue }) {
    const [formState, setFormState] = useState(
      defaultValue || {
        movie: "",
        description: "",
        type: "action",
        price: null,
      }
    );
    const [errors, setErrors] = useState("");
  
    const validateForm = () => {
      if (formState.movie && formState.description && formState.type && formState.price) {
        setErrors("");
        return true;
      } else {
        let errorFields = [];
        for (const [key, value] of Object.entries(formState)) {
          if (!value) {
            errorFields.push(key);
          }
        }
        setErrors(errorFields.join(", "));
        return false;
      }
    };
  
    const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!validateForm()) return;
  
      onSubmit(formState);
  
      closeModal();
    };
  
    return (
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModal();
        }}
      >
        <div className="modal-box">
          <form>
            <div className="form-group">
              <label htmlFor="movie">Tên phim</label>
              <input name="movie" onChange={handleChange} value={formState.movie} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Mô tả</label>
              <textarea
                name="description"
                onChange={handleChange}
                value={formState.description}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="type">Thể loại</label>
              <select
                name="type"
                onChange={handleChange}
                value={formState.type}
              >
                <option value="action">Hành động</option>
                <option value="comedy">Hài hước</option>
                <option value="science">Khoa học</option>
                <option value="horror">Kinh dị</option>
                <option value="family">Gia đình</option>
                <option value="cartoon">Hoạt hình</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="price">Giá tiền</label>
              <input name="price" type='number' onChange={handleChange} value={formState.price} />
            </div>
            {errors && <div className="error">{`Please include: ${errors}`}</div>}
            <button type="submit" className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

function MovieManagement() {
    const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([{
    id: 1,
    movie: "Spider Man",
    description: "Người nhện là một siêu anh hùng hư cấu trong các truyện tranh xuất bản bởi Marvel Comics. Nhân vật này được sáng tạo bởi nhà văn Stan Lee và nhà văn-nghệ sĩ Steve Ditko, lần đầu xuất hiện trong Amazing Fantasy.",
    type: "action",
    price: 90000
  },
  {
    id: 2,
    movie: "Kỳ nghỉ của Mr. Bean",
    description: "Kỳ nghỉ hè của Bean là một bộ phim hài hước năm 2007 của Anh do Steve Bendelack làm đạo diễn. Diễn viên Rowan Atkinson thủ vai chính là ngài Bean. Bộ phim này là phim cuối cùng của loạt phim Mr. Bean cũng như là sự xuất hiện cuối cùng của Rowan Atkinson trong vai ngài Bean.",
    type: "comedy",
    price: 50000
  },
  {
    id: 3,
    movie: "Kẻ trộm mặt trăng",
    description: "Despicable Me (tiếng Việt: Kẻ trộm mặt trăng) là một bộ phim hoạt hình kể về câu chuyện của một siêu trộm tên là Gru, vốn có âm mưu lợi dụng ba đứa trẻ mồ côi để thực hiện ý đồ xấu xa, đã tìm thấy được ở ba cô bé một tình thương yêu kì lạ, và điều này đã thay đổi con người Gru.",
    type: "cartoon",
    price: 45000
  }]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="Movie">
      <h1>Quản lí phim</h1>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Thêm
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}
export default MovieManagement