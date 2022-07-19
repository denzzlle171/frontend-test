import { BodyTable, TabBodyItem } from '../../styles';


const TableRow = ({ item }) => {
  return (
    <BodyTable>
      <TabBodyItem>{item.firstName}</TabBodyItem>
      <TabBodyItem>{item.lastname}</TabBodyItem>
      <TabBodyItem>{item.number}</TabBodyItem>
      <TabBodyItem>{item.email}</TabBodyItem>
      <TabBodyItem>{item.addres}</TabBodyItem>
      <TabBodyItem>{item.gender}</TabBodyItem>
    </BodyTable>
  );
};





export default TableRow;
