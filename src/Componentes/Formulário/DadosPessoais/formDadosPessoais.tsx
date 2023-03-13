import './formDadosPessoais.scss';
import { RegisterFormSchema } from './../../../Schema/registerFormSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function FormDadosPessoais() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  });
  return (
    <>
      <div className='formulario-item-caixa'>
        <label htmlFor='name'>Nome</label>
        <input className='input' type='text' id='name' {...register('name')} />
        <p>{errors.name?.message?.toString()}</p>
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='phone'>Telefone</label>
        <input
          className='input'
          type='number'
          id='phone'
          {...register('phone')}
        />
        <p>{errors.phone?.message?.toString()}</p>
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='birthDate'>Data de Nascimento</label>
        <input
          className='input'
          type='birthDate'
          id='birthDate'
          {...register('birthDate')}
        />
        <p>{errors.birthDate?.message?.toString()}</p>
      </div>
    </>
  );
}

export default FormDadosPessoais;
