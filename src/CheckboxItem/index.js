

function CheckboxItem({item, index, handleChange}) {
    return(
        <div>
            <input type="checkbox" onChange={(e) => handleChange(e, item, index)}/>
            <span>{item}</span>
        </div>
    )
}

export default CheckboxItem