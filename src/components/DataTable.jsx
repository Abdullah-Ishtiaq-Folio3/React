import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import DataRow from "./DataRow";
import studentRecords from "../data";
import TopMenu from "./TopMenu";
import NewRecord from "./NewRecord";
import "semantic-ui-css/semantic.min.css";

class DataTable extends Component {
  state = {
    studentData: [],
    showNewRecord: false,
  };

  handleShowRecord = (value) => {
    this.setState({
      studentData: this.state.studentData,
      showNewRecord: value,
    });
  };

  handleNewRecord = (record) => {
    record = [record.rollNo, record.name, record.amount, record.paid];
    this.setState({
      studentData: [...this.state.studentData, record],
      showNewRecord: false,
    });
  };

  handleDeleteRecord = () => {
    if (this.state.showNewRecord) {
      this.setState({
        studentData: this.state.studentData,
        showNewRecord: false,
      });
    } else {
      let list = [...this.state.studentData];
      list.pop();
      this.setState({
        studentData: list,
        showNewRecord: this.state.showNewRecord,
      });
    }
  };

  componentDidMount() {
    this.setState({ studentData: studentRecords });
    console.log("Mounting");
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
      let copy = [...this.state.studentData];
      copy.sort((a, b) => (a[0] < b[0] ? -1 : 1));
      this.setState({
        studentData: copy,
        showNewRecord: this.state.showNewRecord,
      });
      console.log("Updating");
    }
  }

  componentWillUnmount() {
    console.log("Unmounting");
  }

  render() {
    return (
      <>
        <TopMenu
          setShowRecord={this.handleShowRecord}
          deleteRecord={this.handleDeleteRecord}
        />
        <Table style={{ marginTop: 48 }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Roll No#</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Fees</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.studentData.map((record) => {
              return (
                <DataRow
                  key={record[0]}
                  rollNo={record[0]}
                  name={record[1]}
                  fees={record[2]}
                  status={record[3]}
                />
              );
            })}
          </Table.Body>
        </Table>
        {this.state.showNewRecord && (
          <NewRecord addRecord={this.handleNewRecord} />
        )}
      </>
    );
  }
}

export default DataTable;
