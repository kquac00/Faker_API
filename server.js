const express = require("express")
const app = express()
const { faker } = require('@faker-js/faker');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class User {
    constructor() {
        this.id = faker.datatype.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.number()
        this.password = faker.internet.password()
    }
}
class Company {
    constructor() {
        this.id = faker.datatype.uuid()
        this.name = faker.company.name()
        this.address = [
            {
                Street: faker.address.street(),
                City: faker.address.city(),
                State: faker.address.state(),
                Country: faker.address.country(),
                Zipcode: faker.address.zipCode()
            }
        ]

    }
}

class All {
    constructor() {
        this.id = faker.datatype.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.number()
        this.password = faker.internet.password()
        this.id = faker.datatype.uuid()
        this.name = faker.company.name()
        this.address = [
            {
                Street: faker.address.street(),
                City: faker.address.city(),
                State: faker.address.state(),
                Country: faker.address.country(),
                Zipcode: faker.address.zipCode()
            }
        ]

    }
}


const createUser = () => {
    const newUser = {
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()

    };
    return newUser;
};
const newUsers = createUser();

const createCompany = () => {
    const newCompany = {
        id : faker.datatype.uuid(),
        name : faker.company.name(),
        address : [
            {
                Street: faker.address.street(),
                City: faker.address.city(),
                State: faker.address.state(),
                Country: faker.address.country(),
                Zipcode: faker.address.zipCode()
            }]

    };
    return newCompany;
};
const newCompanies = createCompany();




app.get("/api/testing", (req, res) => {
    res.json({ message: "Testing phase" })
})

app.post("/api/users", (req, res) => {
    const newUser = new User()
    res.json(newUser)
})

app.post("/api/company", (req, res) => {
    const newCompany = new Company()
    res.json(newCompany)
})

app.post("/api/all", (req, res) => {
    const newAll = new All()
    res.json({ newAll })
})

app.get("/api/users/new", (req, res)=>{
    res.json(newUsers)
})

app.get("/api/companies/new", (req, res)=>{
    res.json(newCompanies)
})

app.get("/api/user/company", (req, res)=>{
    res.json({newUsers, newCompanies})
})

app.listen(8000, () => console.log(`Listening on port: 8000`))