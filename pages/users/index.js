
import { useContext } from "react";
import { DataContext } from "../../Context/AppContext";
function Users() {
    const users = useContext(DataContext);
    console.log(users);
    return (
        <div className="container px-4">
            <h1 className="text-center">Users</h1>
            <div className="row  mt-3 g-4">
                {
                    users.map(user => (
                        <div key={user.id} className='border col-4'>
                            <h3>{user.name}</h3>
                            <h4>{user.email}</h4>
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Users;