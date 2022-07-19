import { InputWraper, Lable, Input, Erorblock, Erortext } from './../../styles';

const LastName = ({ register, errors }) => {
  return (
    <InputWraper>
      <Lable htmlFor="lastname">Last Name</Lable>
      <Input
        {...register('lastname', {
          required: true,
          minLength: { value: 3, message: 'minimum 3 symbols' },
        })}
        id="lastname"
      />
      <Erorblock>
        {errors?.lastname && (
          <Erortext>
            {errors?.lastname?.message || 'field is required'}
          </Erortext>
        )}
      </Erorblock>
    </InputWraper>
  );
};
export default LastName;
