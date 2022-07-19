import { InputWraper, Lable, Input, Erorblock, Erortext } from './../../styles';

const Address = ({ register, errors }) => {
  return (
    <InputWraper>
      <Lable htmlFor="addres">Addres</Lable>
      <Input
        type="text"
        {...register('addres', {
          required: true,
          minLength: { value: 4, message: 'minimum 4 symbols' },
        })}
        id="addres"
      />
      <Erorblock>
        {errors?.addres && (
          <Erortext>{errors?.addres?.message || 'field is required'}</Erortext>
        )}
      </Erorblock>
    </InputWraper>
  );
};
export default Address;
