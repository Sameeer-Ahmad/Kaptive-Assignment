import { useState } from "react";
import {
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Button,
  Flex,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { data as SalesData } from "../db";

const SalesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = SalesData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <div >
      <Flex  flexDir={"column"} justify={"flex-end"} >
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Overhead</Th>
              <Th>Jan</Th>
              <Th>Feb</Th>
              <Th>March</Th>
              <Th>April</Th>
              <Th>May</Th>
              <Th>June</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentItems.map((item, index) => (
              <Tr key={index}>
                <Td>{item.Overhead}</Td>
                <Td>{item.Jan.toFixed(0)}</Td>
                <Td>{item.Feb.toFixed(0)}</Td>
                <Td>{item.March.toFixed(0)}</Td>
                <Td>{item.April.toFixed(0)}</Td>
                <Td>{item.May.toFixed(0)}</Td>
                <Td>{item.June.toFixed(0)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <Flex justifyContent="center" mt={4}>
          <Button
            isDisabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            variant="ghost"
          >
            Previous
          </Button>
          <Box mx={2} /> 
          <Button
            isDisabled={indexOfLastItem >= SalesData.length}
            onClick={() => paginate(currentPage + 1)}
            variant="ghost"
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default SalesTable;
