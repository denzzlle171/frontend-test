import {
  InputWraper,
  Lable,
  Select,
  Erorblock,
  Erortext,
} from './../../styles';

const Gender = ({ register, errors }) => {
  return (
    <InputWraper>
      <Lable id="gender" htmlFor="gender">
        Gender
      </Lable>
      <Select {...register('gender', { required: true })} id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <Erorblock>
        {errors?.gender && <Erortext>field is required</Erortext>}{' '}
      </Erorblock>
    </InputWraper>
  );
};
export default Gender;
