import FormInput from "../ui/FormInput";

export default function ProSummaryForm({ professionalSummary, setProfessionalSummary }) {
    const handleProSummaryChange = (e) => {
        const { value } = e.target;

        setProfessionalSummary(value)
    }

    return (
        <FormInput 
            type="textarea"
            name="professionalSummary"
            value={professionalSummary}
            onChange={handleProSummaryChange}
        />
    )
}