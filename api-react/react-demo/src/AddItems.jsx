const AddItems = ({newItems, submitHandler, handleAdd}) => {
    return(
        <form onSubmit= {submitHandler}>
            <input type="text" placeholder="Enter items:" onChange={newItems}/>
            <button type="button" onClick={handleAdd}>Add Item </button>
        </form>
    )
}
export default AddItems;