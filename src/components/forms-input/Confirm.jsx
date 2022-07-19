import {
  InputWraper,
  Lable,
  Checkbox,
  Erorblock,
  Erortext,
} from './../../styles';

const Confirm = ({ register, errors }) => {
  return (
    <InputWraper>
      <Lable htmlFor="checkbox">Confirm</Lable>
      <Checkbox
        type="checkbox"
        {...register('checkbox', { required: true })}
        id="checkbox"
      />
      <Erorblock>
        {errors?.checkbox && <Erortext>field is required</Erortext>}{' '}
      </Erorblock>
    </InputWraper>
  );
};
export default Confirm;
