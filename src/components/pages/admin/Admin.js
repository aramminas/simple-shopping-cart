import AdminForm from "./AdminForm";
import "./Admin.scss";

function Admin(){
    return (
        <div className="container">
            <div className="admin-content">
                <div className="card">
                    <div className="card-body">
                        <div className="form-section">
                            <h3>Add new product</h3>
                            <AdminForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;