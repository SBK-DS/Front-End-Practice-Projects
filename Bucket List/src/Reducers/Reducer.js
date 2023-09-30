const iniState = {
    menu : [
        {id: 1, name: "Apple", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1,},
        {id: 2, name: "Banana", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1},
        {id: 3, name: "Cucumber", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1},
        {id: 4, name: "Date", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1},
        {id: 5, name: "Egg Plant", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1},
        {id: 6, name: "Finger Lady", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1},
        {id: 7, name: "Ginger", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1},
        {id: 8, name: "Honeycrisp", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1},
        {id: 9, name: "Ice cream", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1},
        {id: 10, name: "Jelly Palm fruit", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", price: 5.00, Q: 1}
    ]
}

const rootReducer = (state = iniState, action) => {
    console.log("Reducer Called");
    return state;
}

export default rootReducer