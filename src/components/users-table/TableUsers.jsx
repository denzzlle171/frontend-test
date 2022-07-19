import { TableWraper } from '../../styles';

import TableRow from './TableRow';
import { connect } from 'react-redux';

const TableUsers = ({ userslist }) => {
  return (
    <TableWraper>
      {userslist.map((item) => (
        <TableRow key={item.number} item={item} />
      ))}
    </TableWraper>
  );
};

const mapState = (state) => {
  return {
    userslist: state.userList,
  };
};

export default connect(mapState)(TableUsers);
