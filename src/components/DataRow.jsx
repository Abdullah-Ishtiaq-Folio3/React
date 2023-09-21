import { Icon, Table } from "semantic-ui-react";

export default function DataRow({ rollNo, name, fees, status }) {
  return (
    <Table.Row>
      <Table.Cell>{rollNo}</Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{fees}</Table.Cell>
      {status && <Table.Cell>Paid</Table.Cell>}
      {!status && (
        <Table.Cell warning>
          <Icon name="attention" />
          Unpaid
        </Table.Cell>
      )}
    </Table.Row>
  );
}
