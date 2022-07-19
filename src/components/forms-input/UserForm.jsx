import Address from './Address';
import Confirm from './Confirm';
import Gender from './Gender';
import Email from './Email';
import PhoneNumber from './PhoneNumber';
import LastName from './LastName';
import Name from './Name';
import { Form, Header, Button } from './../../styles';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import * as allActions from '../../store/users.actions';

const UserForm = ({ addUser }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    addUser(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Header> User form </Header>
      <Name register={register} errors={errors} />
      <LastName register={register} errors={errors} />
      <PhoneNumber register={register} errors={errors} />
      <Email register={register} errors={errors} />
      <Address register={register} errors={errors} />
      <Gender register={register} errors={errors} />
      <Confirm register={register} errors={errors} />
      <Button>Register</Button>
    </Form>
  );
};

const mapDispatch = {
  addUser: allActions.addUser,
};

export default connect(null, mapDispatch)(UserForm);
