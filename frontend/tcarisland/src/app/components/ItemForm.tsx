import React from "react";

type ItemForm = {
    labelname: string;
    labeltitle: string;
}
type ItemFormProps = {
    fields: ItemForm[];
}
const ItemForm: React.FC<ItemFormProps> = ({fields}) => {
    return (
        <form>
            {
                fields.map((field, index) =>
                    <div key={index}>
                        <label htmlFor={field.labelname}>{field.labeltitle}</label>
                        <br/>
                        <input type="text" id={field.labelname} name={field.labelname}/>
                    </div>)
            }
            <button>Click Me</button>
        </form>
    )
}

export default ItemForm