import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import TasksList from "./components/TasksList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import "./tasksTable.css";

const TasksTable = ({ dailyTasks, selectedCategories }) => {
  return (
    <>
      {dailyTasks.length === 0 ? (
        <p className="table__no-tasks-message">
          No tasks yet
          <FontAwesomeIcon icon={faHandPointer} />
        </p>
      ) : (
        <TableContainer className="table">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th className="table__heading--task-name">Task Name</Th>
                <Th className="table__heading">Priority</Th>
                <Th className="table__heading">Category</Th>
                <Th className="table__heading">Status</Th>
                <Th className="table__heading">Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <TasksList
                dailyTasks={dailyTasks}
                selectedCategories={selectedCategories}
              />
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default TasksTable;
