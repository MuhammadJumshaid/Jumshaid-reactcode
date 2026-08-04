const TableAndArray = () => {

    const employeeInf = [
        {
            Id: 1,
            "Name": "Jumshaid",
            Salary: 25000,
            Age: 24,
            Email: "Jumshaid@gmail.com"
        },
        {
            Id: 2,
            "Name": "Kamran",
            Salary: 20000,
            Age: 34,
            Email: "Kamran@gmail.com"
        },
        {
            Id: 3,
            "Name": "Zohaib",
            Salary: 50000,
            Age: 30,
            Email: "Zohaib@gmail.com"
        },
        {
            Id: 4,
            "Name": "Ali",
            Salary: 34000,
            Age: 29,
            Email: "Ali@gmail.com"
        },
    ]

    return (
        <div>
            <h1>Array Data in Table</h1>

            {/* <table border={{border : 1}}> */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        employeeInf.map(user => 
                            (
                           <tr>
                                <td>{user.Id}</td>
                                <td>{user.Name}</td>
                                <td>{user.Salary}</td>
                                <td>{user.Age}</td>
                                <td>{user.Email}</td>
                            </tr>
                            )
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TableAndArray
