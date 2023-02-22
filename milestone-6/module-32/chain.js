const users = [
    {id:1, name: 'Prosen', job: 'developer'}
];

const data = {
    data: 500,
    data: [
        {id:1, name: 'abul'},
        {id:1, name: 'babul'}
    ]
}

const customer = {
    address: {
        street: {
            first: '98/434 Middle Road'
        }
    }
}
console.log(customer.address.street?.first);