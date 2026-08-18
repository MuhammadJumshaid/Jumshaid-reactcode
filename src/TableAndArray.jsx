import EmpCard from "./EmpCard"

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
            <h1>Array Data in Cards</h1>
                    {
                        employeeInf.map((user) => (
                            <div key={user.Id}>
                                <EmpCard data = {user}/>
                           </div>
                            ))
                    }
        </div>
    )
}

export default TableAndArray
