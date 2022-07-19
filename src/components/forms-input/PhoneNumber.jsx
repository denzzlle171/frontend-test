import { InputWraper, Lable, Input, Erorblock, Erortext } from './../../styles';

const PhoneNumber = ({ register, errors }) => {
  return (
    <InputWraper>
      <Lable htmlFor="number">Phone Number</Lable>
      <Input
        {...register('number', {
          required: true,
          minLength: 9,
        })}
        id="number"
      />
      <Erorblock>
        {errors?.number && (
          <Erortext>{errors?.number && 'field is required'}</Erortext>
        )}
      </Erorblock>
    </InputWraper>
  );
};
export default PhoneNumber;
