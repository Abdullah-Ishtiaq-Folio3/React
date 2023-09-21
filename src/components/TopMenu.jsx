import { Button, Menu } from "semantic-ui-react";

export default function TopMenu({ setShowRecord, deleteRecord }) {
  return (
    <Menu fixed="top" borderless>
      <Menu.Item>
        <Button positive onClick={() => setShowRecord(true)}>
          Add Record
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button negative onClick={deleteRecord}>
          Delete Record
        </Button>
      </Menu.Item>
    </Menu>
  );
}
