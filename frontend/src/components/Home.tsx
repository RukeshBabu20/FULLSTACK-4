import {
  Container,
  Box,
  Stack,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { bankType } from "../types/bankType";
import { useEffect, useState } from "react";
import * as api from "../services/apiService";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<bankType[]>([
    {
      name: "",
      account: 0,
      type: "",
      ifsc: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.showData();
        setCustomer(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const result = await api.deleteData(id);
      console.log("data deleted");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(customer);
  return (
    <Container>
      <Box>
        <Stack>
          <Button href="/create">Add Customer</Button>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Account Number</TableCell>
                  <TableCell>IFSC code</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customer.map((ele) => (
                  <TableRow>
                    <TableCell>{ele.name}</TableCell>
                    <TableCell>{ele.type}</TableCell>
                    <TableCell>{ele.account}</TableCell>
                    <TableCell>{ele.ifsc}</TableCell>
                    <TableCell>
                      <Button href={`/update/${ele._id}`}>Update</Button>
                      <Button
                        onClick={(e) => {
                          handleDelete(ele._id);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Box>
    </Container>
  );
};
export default Home;
