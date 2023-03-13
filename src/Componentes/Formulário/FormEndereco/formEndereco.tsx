import './formEndereco.scss';
import { RegisterFormSchema } from './../../../Schema/registerFormSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function FormEndereco() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  });
  return (
    <>
      <div className='formulario-item-caixa'>
        <label htmlFor='cep'>CEP</label>
        <input
          className='input'
          type='cep'
          id='cep'
          {...register('cep')}
          required
        />
        <p>{errors.cep?.message?.toString()}</p>
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='endereco'>Endereço</label>
        <input
          className='input'
          type='text'
          id='address'
          {...register('address')}
          required
        />
        <p>{errors.address?.message?.toString()}</p>
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='endereco'>Cidade</label>
        <input className='input' type='text' id='city' {...register('city')} />
        <p>{errors.city?.message?.toString()}</p>
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='endereco'>Estado</label>
        <input
          className='input'
          type='text'
          id='state'
          {...register('state')}
        />
        <p>{errors.state?.message?.toString()}</p>
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='endereco'>Número</label>
        <input
          className='input'
          type='number'
          id='number'
          {...register('number')}
        />
        <p>{errors.number?.message?.toString()}</p>
      </div>
    </>
  );
}

export default FormEndereco;
