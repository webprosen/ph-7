const setData = () => {
    const data = {pepsi: 12, mojo: 20};
    const dataString = JSON.stringify(data);
    console.log(dataString);
    localStorage.setItem('drink', dataString);
}