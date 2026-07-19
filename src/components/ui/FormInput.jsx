export default function FormInput({ type="text", label, name, value, onChange }) {
    if(type === "textarea") {
        return (
            <textarea 
                name={name} 
                value={value} 
                onChange={onChange}
                rows={"4"}
                className="p-3 border border-gray-700 rounded-sm"
            ></textarea>
        )
    } else {
        return (
            <div className="flex flex-col gap-1">
                <label htmlFor={name} className="text-sm font-semibold text-gray-600">{label}</label>
                <input 
                    type={type}
                    name={name} 
                    value={value} 
                    onChange={onChange}
                    className="p-3 border border-gray-700 rounded-sm" 
                />
            </div>
        )
    }
}