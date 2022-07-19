import { InputWraper, Lable, Input, Erorblock, Erortext } from './../../styles';

const Email = ({ register, errors }) => {
  return (
    <InputWraper>
      <Lable htmlFor="email">Email</Lable>
      <Input
        type="email"
        {...register('email', {
          required: true,
          minLength: 4,
        })}
        id="email"
      />
      <Erorblock>
        {errors?.addres && (
          <Erortext>{errors?.email?.message && 'field is required'}</Erortext>
        )}
      </Erorblock>
    </InputWraper>
  );
};
export default Email;
