import { InputWraper, Lable, Input, Erorblock, Erortext } from './../../styles';

const Name = ({ register, errors }) => {
  return (
    <InputWraper>
      <Lable htmlFor="name">Name</Lable>
      <Input
        {...register('firstName', {
          required: true,
          minLength: { value: 3, message: 'minimum 3 symbols' },
        })}
        id="name"
      />
      <Erorblock>
        {errors?.firstName && (
          <Erortext>
            {errors?.firstName?.message || 'field is required'}
          </Erortext>
        )}
      </Erorblock>
    </InputWraper>
  );
};
export default Name;
