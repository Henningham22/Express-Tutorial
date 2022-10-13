Const.Car = () => {
    const [Brand, setBrand] = useState("Mercedes");
    const [Model, setModel] = useState("CLA");
    const [Colour, setColour] = useState("Grey");
    const [Year, setYear] = useState(2022);

    return(
        <>
        <h1>My car is very nice</h1>
        <h4>The car has twin turbo boosters, with a spoiler and heated seat</h4>
        <p>{Brand},{Model}</p>
        <p>{Colour}</p>
        <p>{year}</p>

        <form>
            <label> Brand:</label>
            <input name="Brand"
            type="text"
            value={Brand}
            onChange= {e => setBrand(e.target.value)} />

<label> Colour:</label>
            <input name="Colour"
            type="text"
            value={Colour}
            onChange= {e => setColour(e.target.value)} />

<label> <Model></Model>:</label>
            <input name="Model"
            type="text"
            value={Model}
            onChange= {e => setModel(e.target.value)} />

<label> Year:</label>
            <input name="Year"
            type="text"
            value={Year}
            onChange= {e => setYear(e.target.value)} />
        <br/>
     </form>
      </>
          );
};