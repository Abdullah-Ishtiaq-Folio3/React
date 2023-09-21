import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useState } from "react";

export default function NewRecord({ addRecord }) {
  const [values, setValues] = useState({
    rollNo: "",
    name: "",
    amount: "",
    paid: false,
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setValues({ ...values, [name]: value });
  };

  return (
    <Form onSubmit={() => addRecord(values)}>
      <Form.Group width="equal" widths={"equal"}>
        <Form.Field>
          <input
            type="text"
            name="rollNo"
            value={values.rollNo}
            placeholder="Roll No#"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="number"
            name="amount"
            value={values.amount}
            placeholder="Amount (PKR)"
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field inline>
          <label htmlFor="status">Fees Paid</label>
          <input
            type="checkbox"
            id="status"
            name="paid"
            checked={values.paid}
            label="Paid"
            onChange={handleChange}
          />
        </Form.Field>
        <Button style={{ marginRight: 20 }} primary type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
